
import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-viva-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-viva-text leading-tight mb-6">
              Transforme sua autoestima através da{' '}
              <span className="text-viva-blue">saúde</span> e do{' '}
              <span className="text-viva-green">cuidado diário</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-inter mb-8 leading-relaxed">
              Receitas, treinos e um livro inspirador para quem quer se reconectar com o próprio corpo.
            </p>
            
            <button 
              onClick={() => scrollToSection('receitas')}
              className="bg-viva-green text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quero me cuidar hoje
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-viva-blue/20 to-viva-green/20 rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                  alt="Pessoa sorrindo, cozinhando alimentos saudáveis"
                  className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-viva-green/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-viva-blue/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
