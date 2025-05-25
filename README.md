# Campanha de Doação - Next.js

Sistema completo de campanha de doação desenvolvido em Next.js com integração de pagamentos Stripe e PIX.

## 🚀 Funcionalidades

- ✅ Interface moderna e responsiva
- ✅ Integração com Stripe para pagamentos com cartão
- ✅ Pagamentos PIX com QR Code
- ✅ Sistema de randomização de campanhas
- ✅ Tracking de eventos de doação
- ✅ Múltiplas campanhas dinâmicas
- ✅ Design emocional para aumentar conversões

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Package Manager**: Bun
- **Payments**: Stripe + PIX
- **Deployment**: Netlify

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/lemaorp01/campanha-doacao-nextjs.git

# Entre no diretório
cd campanha-doacao-nextjs

# Instale as dependências
bun install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Execute o projeto em desenvolvimento
bun dev
```

## ⚙️ Configuração

1. Configure suas chaves do Stripe no arquivo `.env.local`
2. Configure as variáveis de ambiente para PIX
3. Personalize as campanhas em `src/lib/campaign-randomizer.ts`

## 📝 Documentação

Consulte os arquivos de documentação incluídos:
- `INSTALACAO.md` - Guia detalhado de instalação
- Comentários no código para funcionalidades específicas

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.