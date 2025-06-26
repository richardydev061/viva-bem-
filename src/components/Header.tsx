
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-poppins font-bold text-viva-blue">
              Viva Leve
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('receitas')}
              className="text-viva-text font-inter hover:text-viva-blue transition-colors"
            >
              Receitas
            </button>
            <button 
              onClick={() => scrollToSection('treinos')}
              className="text-viva-text font-inter hover:text-viva-blue transition-colors"
            >
              Treinos
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-viva-text font-inter hover:text-viva-blue transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('comprar')}
              className="bg-viva-green text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-green-500 transition-colors"
            >
              Comprar
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-viva-text hover:text-viva-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('receitas')}
                className="text-left text-viva-text font-inter hover:text-viva-blue transition-colors"
              >
                Receitas
              </button>
              <button 
                onClick={() => scrollToSection('treinos')}
                className="text-left text-viva-text font-inter hover:text-viva-blue transition-colors"
              >
                Treinos
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-viva-text font-inter hover:text-viva-blue transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('comprar')}
                className="text-left bg-viva-green text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-green-500 transition-colors w-fit"
              >
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
