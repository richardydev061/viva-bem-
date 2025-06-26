import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Eu não queria só emagrecer. Queria gostar de mim. E esse livro me ajudou a começar.",
      author: "Juliana R.",
      age: "28 anos",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      text: "Simples, humano e direto. Me senti abraçado lendo.",
      author: "Carlos F.",
      age: "35 anos",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      text: "Achei que ia encontrar uma dieta. Encontrei uma nova forma de viver.",
      author: "Fernanda G.",
      age: "31 anos",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 4,
      text: "Finalmente um livro que não promete milagres, mas ensina verdades sobre autoestima.",
      author: "Roberto M.",
      age: "42 anos",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 5,
      text: "Mudou minha relação com a comida e comigo mesma. Gratidão eterna.",
      author: "Mariana L.",
      age: "26 anos",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-viva-text mb-4">
            Este livro mudou minha forma de me enxergar.
          </h2>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Histórias reais de pessoas que escolheram se cuidar com gentileza
          </p>
        </div>

        {/* Main testimonial slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-viva-blue/5 to-viva-green/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote
              className="absolute top-6 left-6 text-viva-blue/20"
              size={48}
            />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].author}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <blockquote className="text-2xl md:text-3xl font-inter font-medium text-viva-text leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-viva-blue font-poppins font-semibold">
                  {testimonials[currentTestimonial].author},{" "}
                  {testimonials[currentTestimonial].age}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-viva-blue" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight size={24} className="text-viva-blue" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-viva-blue w-8"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-poppins font-semibold text-viva-text">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.age}</div>
                </div>
              </div>
              <blockquote className="text-gray-700 font-inter italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
