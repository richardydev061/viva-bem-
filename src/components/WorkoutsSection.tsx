
import React from 'react';
import { Play, Clock, TrendingUp } from 'lucide-react';

const WorkoutsSection = () => {
  const workouts = [
    {
      id: 1,
      name: "Alongamento matinal",
      icon: "🧘",
      duration: "5 min",
      level: "Iniciante",
      description: "Desperte seu corpo com movimentos suaves e energizantes",
      benefits: ["Melhora flexibilidade", "Reduz tensão muscular", "Aumenta disposição"]
    },
    {
      id: 2,
      name: "Caminhada leve com passos guiados",
      icon: "🏃",
      duration: "15 min",
      level: "Iniciante",
      description: "Cardio suave para fortalecer coração e mente",
      benefits: ["Melhora cardiovascular", "Queima calorias", "Libera endorfinas"]
    },
    {
      id: 3,
      name: "Treino funcional leve",
      icon: "💪",
      duration: "10 min",
      level: "Iniciante",
      description: "Exercícios práticos para o dia a dia",
      benefits: ["Fortalece músculos", "Melhora postura", "Aumenta resistência"]
    },
    {
      id: 4,
      name: "Exercícios com o peso do corpo",
      icon: "🪑",
      duration: "8 min",
      level: "Iniciante",
      description: "Use apenas uma cadeira e seu próprio peso",
      benefits: ["Não precisa de equipamentos", "Fortalece core", "Melhora equilíbrio"]
    },
    {
      id: 5,
      name: "Meditação ativa pós-treino",
      icon: "🎧",
      duration: "4 min",
      level: "Todos",
      description: "Relaxamento profundo para finalizar com tranquilidade",
      benefits: ["Reduz estresse", "Melhora foco", "Acelera recuperação"]
    }
  ];

  return (
    <section id="treinos" className="py-20 bg-viva-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-viva-text mb-4">
            Treinos Básicos para Iniciantes
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto mb-6">
            Movimente-se no seu ritmo. Comece com o básico, evolua com prazer.
          </p>
          <div className="bg-viva-blue/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-inter italic text-viva-text">
              "Seu corpo é um presente. Trate-o com carinho e respeito."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {workouts.map((workout, index) => (
            <div 
              key={workout.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon and basic info */}
                <div className="flex items-center gap-4 md:min-w-[300px]">
                  <div className="text-4xl">{workout.icon}</div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-viva-text mb-1">
                      {workout.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {workout.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp size={16} />
                        {workout.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-gray-700 font-inter mb-3">
                    {workout.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {workout.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="bg-viva-green/10 text-viva-green px-3 py-1 rounded-full text-sm font-inter"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="md:min-w-[120px]">
                  <button className="w-full md:w-auto bg-viva-blue text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group">
                    <Play size={16} className="group-hover:scale-110 transition-transform" />
                    Iniciar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-viva-text mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Lembre-se: não existe exercício perfeito. Existe o exercício que você consegue fazer hoje. 
              Comece devagar, seja gentil consigo mesmo.
            </p>
            <button className="bg-viva-green text-white px-8 py-3 rounded-full font-inter font-semibold hover:bg-green-500 transition-colors">
              Ver cronograma completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutsSection;
