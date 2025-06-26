
import React from 'react';
import { Shield, Zap, Download, Heart } from 'lucide-react';

const CTASection = () => {
  const handlePurchase = () => {
    // Here you would integrate with your payment processor or affiliate link
    console.log('Redirecting to purchase...');
  };

  return (
    <section id="comprar" className="py-20 bg-gradient-to-br from-viva-blue/10 via-white to-viva-green/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Block */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-viva-blue to-viva-green p-1 rounded-3xl mb-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-viva-text mb-6">
                Pronto(a) para dar o primeiro passo?
              </h2>
              
              <p className="text-xl text-gray-600 font-inter mb-8 max-w-3xl mx-auto leading-relaxed">
                O livro <span className="font-semibold text-viva-blue">Viva Leve</span> é um convite para você cuidar de si com gentileza, 
                sem promessas mágicas — só verdade, saúde e autoestima.
              </p>

              {/* Main CTA Button */}
              <button 
                onClick={handlePurchase}
                className="bg-viva-green text-white px-12 py-6 rounded-full font-poppins font-bold text-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl mb-8 animate-pulse"
              >
                Quero meu exemplar agora
              </button>

              {/* Security badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-viva-green" />
                  <span>Checkout seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={20} className="text-viva-blue" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download size={20} className="text-viva-green" />
                  <span>Entrega digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-viva-blue" />
                  <span>Acesso imediato</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 font-inter">
                Versão digital. Acesso imediato após a compra.
              </p>
            </div>
          </div>
        </div>

        {/* What you get section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-viva-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="text-xl font-poppins font-semibold text-viva-text mb-3">
              Livro Digital Completo
            </h3>
            <p className="text-gray-600 font-inter">
              Mais de 150 páginas de conteúdo prático sobre autoestima e saúde
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-viva-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-xl font-poppins font-semibold text-viva-text mb-3">
              Guia de Receitas
            </h3>
            <p className="text-gray-600 font-inter">
              25 receitas nutritivas e saborosas para nutrir corpo e mente
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-viva-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💪</span>
            </div>
            <h3 className="text-xl font-poppins font-semibold text-viva-text mb-3">
              Plano de Exercícios
            </h3>
            <p className="text-gray-600 font-inter">
              Rotina de 4 semanas adaptável ao seu ritmo e disponibilidade
            </p>
          </div>
        </div>

        {/* Final motivational message */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-viva-blue/5 to-viva-green/5 rounded-2xl p-8">
            <h3 className="text-2xl font-poppins font-bold text-viva-text mb-4">
              Sua jornada de autocuidado começa aqui
            </h3>
            <p className="text-lg text-gray-700 font-inter mb-6">
              Não é sobre perfeição. É sobre progresso. É sobre escolher se cuidar, 
              um dia de cada vez, com gentileza e amor próprio.
            </p>
            <button 
              onClick={handlePurchase}
              className="bg-viva-blue text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Começar minha transformação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
