import React from "react";
import { Instagram, Youtube, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-viva-text text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-poppins font-bold text-viva-green mb-4">
              Viva Leve
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              Transformando vidas através do autocuidado consciente. Receitas,
              treinos e inspiração para uma vida mais equilibrada e feliz.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-viva-green p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-viva-green p-3 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-viva-green p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-viva-green p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-viva-green">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-gray-300 font-inter">
              <li>
                <a
                  href="#receitas"
                  className="hover:text-viva-green transition-colors"
                >
                  Receitas
                </a>
              </li>
              <li>
                <a
                  href="#treinos"
                  className="hover:text-viva-green transition-colors"
                >
                  Treinos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-viva-green transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#comprar"
                  className="hover:text-viva-green transition-colors"
                >
                  Comprar Livro
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4 text-viva-green">
              Informações
            </h4>
            <ul className="space-y-3 text-gray-300 font-inter">
              <li>
                <a href="#" className="hover:text-viva-green transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-viva-green transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-viva-green transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-viva-green transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Inspirational quote */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <p className="text-xl font-inter italic text-viva-green mb-2">
              "Autoestima se cultiva. Um dia de cada vez."
            </p>
            <div className="flex items-center justify-center text-gray-400">
              <span className="text-sm">Com amor, equipe Viva Leve</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-inter text-sm">
            © {currentYear} Viva Leve. Todos os direitos reservados. Feito para
            pessoas que se importam consigo mesmas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
