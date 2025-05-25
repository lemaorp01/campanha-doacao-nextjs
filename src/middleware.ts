import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de campanhas disponíveis (deve corresponder aos slugs em campaign-randomizer.ts)
const campaignSlugs = ['/', '/julia', '/carlos'];

// Função para gerar número aleatório entre min e max
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para calcular hash de string para determinismo por IP
function hashIP(ip: string): number {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

export function middleware(request: NextRequest) {
  // Somente processar solicitações para a raiz
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  // Verificar se já tem um cookie de campanha
  const campaignCookie = request.cookies.get('campaign_assigned');

  if (campaignCookie) {
    // Se já tiver um cookie, manter a mesma campanha
    const assignedSlug = campaignCookie.value;

    // Verificar se é um slug válido
    if (campaignSlugs.includes(assignedSlug) && assignedSlug !== '/') {
      return NextResponse.redirect(new URL(assignedSlug, request.url));
    }

    return NextResponse.next();
  }

  // Determinar a campanha para este usuário
  let campaignIndex: number;

  // Opção 1: Aleatório puro
  // campaignIndex = getRandomInt(0, campaignSlugs.length - 1);

  // Opção 2: Determinístico por IP (mesmo usuário vê mesma campanha)
  const ip = request.ip || '127.0.0.1';
  campaignIndex = hashIP(ip) % campaignSlugs.length;

  // Redirecionar para a campanha escolhida (exceto se for a padrão '/')
  const chosenSlug = campaignSlugs[campaignIndex];
  const response = chosenSlug === '/'
    ? NextResponse.next()
    : NextResponse.redirect(new URL(chosenSlug, request.url));

  // Definir cookie para manter consistência nas próximas visitas
  // O cookie expira em 30 dias
  response.cookies.set({
    name: 'campaign_assigned',
    value: chosenSlug,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 dias
    path: '/',
  });

  return response;
}

export const config = {
  matcher: ['/'],
};