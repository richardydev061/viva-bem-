
import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

const RecipesSection = () => {
  const [showAllRecipes, setShowAllRecipes] = useState(false);

  const recipes = [
    {
      id: 1,
      name: "Salada revigorante com abacate e quinoa",
      emoji: "🥗",
      description: "Uma explosão de sabores frescos e nutrientes essenciais",
      ingredients: ["Abacate maduro", "Quinoa cozida", "Rúcula", "Tomate cereja", "Limão"],
      time: "15 min"
    },
    {
      id: 2,
      name: "Sopa energética de lentilha com cúrcuma",
      emoji: "🍲",
      description: "Reconfortante e anti-inflamatória, perfeita para aquecer o coração",
      ingredients: ["Lentilha vermelha", "Cúrcuma", "Gengibre", "Cebola", "Caldo de legumes"],
      time: "25 min"
    },
    {
      id: 3,
      name: "Omelete proteico com espinafre e tomate",
      emoji: "🍳",
      description: "Proteínas de qualidade para começar o dia com energia",
      ingredients: ["Ovos", "Espinafre fresco", "Tomate", "Queijo cottage", "Azeite"],
      time: "10 min"
    },
    {
      id: 4,
      name: "Panqueca de banana com aveia",
      emoji: "🍌",
      description: "Doçura natural sem culpa, perfeita para qualquer hora",
      ingredients: ["Banana madura", "Aveia", "Ovos", "Canela", "Mel"],
      time: "12 min"
    },
    {
      id: 5,
      name: "Suco verde calmante com gengibre e hortelã",
      emoji: "🧃",
      description: "Detox natural que revitaliza corpo e mente",
      ingredients: ["Couve", "Maçã verde", "Gengibre", "Hortelã", "Água de coco"],
      time: "8 min"
    }
  ];

  return (
    <section id="receitas" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-viva-text mb-4">
            Receitas Recomendadas por Nutricionistas
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Alimente-se com carinho. Escolha receitas que nutrem seu corpo e sua mente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{recipe.emoji}</div>
              <h3 className="text-xl font-poppins font-semibold text-viva-text mb-3">
                {recipe.name}
              </h3>
              <p className="text-gray-600 font-inter mb-4 line-clamp-2">
                {recipe.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="bg-viva-gray px-3 py-1 rounded-full">⏱️ {recipe.time}</span>
              </div>
              <button className="text-viva-blue font-inter font-medium hover:text-viva-green transition-colors flex items-center">
                Ver receita <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowAllRecipes(true)}
            className="text-viva-blue font-inter font-semibold hover:text-viva-green transition-colors border-2 border-viva-blue hover:border-viva-green px-8 py-3 rounded-full"
          >
            Ver todas as receitas
          </button>
        </div>

        {/* Modal/Popup for all recipes */}
        {showAllRecipes && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-2xl font-poppins font-bold text-viva-text">
                  Todas as Receitas
                </h3>
                <button 
                  onClick={() => setShowAllRecipes(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {recipes.map((recipe) => (
                    <div key={recipe.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{recipe.emoji}</div>
                        <div className="flex-1">
                          <h4 className="font-poppins font-semibold text-viva-text mb-2">
                            {recipe.name}
                          </h4>
                          <p className="text-gray-600 font-inter text-sm mb-3">
                            {recipe.description}
                          </p>
                          <div className="mb-3">
                            <span className="text-xs font-semibold text-viva-blue mb-1 block">
                              INGREDIENTES:
                            </span>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx}>• {ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <span className="bg-viva-gray px-2 py-1 rounded-full text-xs">
                            ⏱️ {recipe.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesSection;
