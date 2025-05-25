"use client";

import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Image from "next/image";
import DonateModal from "@/components/donate-modal";

export default function Home() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [activeTab, setActiveTab] = useState("contexto");

  // Campaign data
  const campaignData = {
    title: "Menino com escoliose grave chora todos os dias com muita dor e precisa de cirurgia",
    raised: 30712,
    goal: 80000.0,
    donorsCount: 358,
    daysRemaining: 33,
    bannerImage: "https://ext.same-assets.com/4073814682/524035916.png",
    contentImage: "https://ext.same-assets.com/4073814682/524035916.png",
  };

  // Calculate percentage
  const percentRaised = (campaignData.raised / campaignData.goal) * 100;

  const TimeIsRunning = () => (
    <div className="bg-red-50 border border-red-200 rounded-md p-3 my-4 animate-pulse">
      <p className="text-red-600 font-bold flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        URGENTE: Mateus tem apenas {campaignData.daysRemaining} dias para conseguir sua cirurgia!
      </p>
    </div>
  );

  return (
    <div className="mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content - 8 columns on large screens */}
          <div className="lg:col-span-8">
            {/* Banner */}
            <div className="mb-3 rounded-md overflow-hidden">
              <Image
                src={campaignData.bannerImage}
                alt="Banner da campanha"
                width={736}
                height={386}
                className="w-full h-auto"
              />
            </div>

            {/* Title */}
            <h1 className="mb-3 text-2xl md:text-3xl font-bold">
              {campaignData.title}
            </h1>

            <TimeIsRunning />

            {/* Campaign tags */}
            <div className="border-t border-b py-2 mb-4">
              <button className="filter-button my-1">Doação Protegida</button>
              <button className="filter-button my-1">Campanha Transparente</button>
            </div>

            {/* Campaign content */}
            <div className="mb-6">
              <div className="border rounded-md">
                <div className="p-4">
                  <div>
                    <p className="text-lg mb-4">
                      <strong className="text-red-600 text-xl">QUE SOFRIMENTO 😢</strong>
                      <br />
                      Mateus tem paralisia cerebral e escoliose em alto grau.
                      Os pulmões estão sendo comprimidos e ele <span className="text-red-600 font-bold">CHORA MUITO de dor</span>. Não consegue mais ficar em pé sozinho. Precisa de cirurgia <span className="text-red-600 font-bold">URGENTE</span>, mas seus pais são bem simples, vivem numa casa muito velha na zona rural de Russas, Ceará.
                    </p>

                    <div className="my-6">
                      <Image
                        src={campaignData.contentImage}
                        alt="Imagens do Mateus"
                        width={712}
                        height={401}
                        className="w-full h-auto rounded-md"
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md mb-4 border-l-4 border-blue-500">
                      <p className="italic text-blue-800 font-medium">
                        "Toda noite eu ouço meu filho chorar de dor. Como pai, me sinto impotente... Só quero ver meu filho sorrir novamente."
                        <span className="block mt-1 text-sm text-gray-700">— Darlem, pai do Mateus</span>
                      </p>
                    </div>

                    <p className="text-lg mb-4">
                      Pelo SUS, está há <span className="text-red-600 font-bold">4 anos nessa luta</span>, tem retorno só em julho do ano que vem ainda. Esse menino <span className="text-red-600 font-bold">não pode e nem consegue mais esperar!</span> <strong className="text-red-600 text-xl">MUITO SOFRIMENTO!</strong>
                    </p>

                    <div className="bg-green-50 p-4 rounded-md mb-6">
                      <p className="text-green-800 font-medium mb-2">💰 Sua doação faz diferença REAL:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-bold">R$ 20</span> - Ajuda com medicamentos para dor</li>
                        <li><span className="font-bold">R$ 50</span> - Contribui para o transporte às consultas</li>
                        <li><span className="font-bold">R$ 100</span> - Ajuda com exames pré-operatórios</li>
                        <li><span className="font-bold">R$ 200+</span> - Contribuição significativa para a cirurgia</li>
                      </ul>
                      <p className="mt-3 text-center">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
                          onClick={() => setShowDonateModal(true)}
                        >
                          Quero ajudar agora
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 4 columns on large screens */}
          <div className="lg:col-span-4 sticky top-4 self-start">
            <Card className="p-6">
              <div className="mb-4">
                <p className="mb-3">
                  <span className="color-principal font-bold text-2xl">
                    R$ {campaignData.raised.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm text-gray-600">
                    {" "}
                    captados da meta de R$ {campaignData.goal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                </p>

                <Progress value={percentRaised} className="h-2 mb-3" />

                <div className="flex justify-between">
                  <div>
                    <p className="flex items-center cursor-pointer">
                      <span className="color-principal font-bold text-2xl">
                        {campaignData.donorsCount}
                      </span>
                      <span className="ml-1">Doadores</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-right">
                      <span className="color-principal font-bold text-2xl">
                        {campaignData.daysRemaining}
                      </span>
                      <span className="ml-1 text-red-600 font-bold">dias restantes</span>
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="btn-home-1 mb-3 relative overflow-hidden group"
                onClick={() => setShowDonateModal(true)}
              >
                <span className="absolute -inset-x-1 -bottom-1 h-1 bg-white/20 animate-[shimmer_2s_infinite]"></span>
                Doar agora
              </button>

              <p className="text-sm text-center text-gray-600 mb-4">Sua doação pode <span className="font-bold text-blue-600">salvar a vida dele</span></p>
            </Card>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
        campaignId="mateus-campaign"
        campaignTitle="Campanha do Mateus"
      />
    </div>
  );
}