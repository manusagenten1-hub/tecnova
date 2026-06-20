import React from 'react';
import Button from './Button';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-24 md:pt-32 pb-10 text-white relative border-t border-brand-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Final CTA Box */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mt-32 md:-mt-48 mb-12 md:mb-16 z-10"
        >
            <div className="bg-gradient-to-br from-[#1a0000] to-[black] rounded-3xl p-6 md:p-16 text-center shadow-[0_0_50px_rgba(230,0,0,0.2)] mx-auto max-w-5xl border border-brand-accent/30 relative overflow-hidden group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black mb-4 md:mb-6 relative z-10 uppercase tracking-tight">
                Pronto para levar sua presença digital a um novo nível?
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed relative z-10">
                Sua marca pode ser muito mais visível, estratégica e preparada para crescer. Pare de depender de uma presença digital fraca e comece a construir autoridade de verdade.
            </p>
            <div className="relative z-10 block">
                <Button variant="primary" icon="arrow" onClick={() => window.dispatchEvent(new CustomEvent('open-quiz-modal'))} className="w-full md:w-auto text-base md:text-lg px-8 py-4 md:px-10 md:py-5 font-bold uppercase tracking-wide bg-brand-accent hover:bg-brand-accentDark text-white shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)]">
                    Começar Meu Projeto
                </Button>
            </div>
            </div>
        </motion.div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-900 pb-12 pt-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white group mb-6">
              <img src="https://i.ibb.co/67gXgsw6/Chat-GPT-Image-5-de-jun-de-2026-18-38-29.png" alt="TecNova Logo" className="h-14 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Criamos sites modernos, rápidos e estratégicos para negócios que querem vender mais no digital através de autoridade e conversão previsível.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide uppercase">Atalhos</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Portfólio</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Método</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-brand-accent transition-colors text-sm">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide uppercase">Contato & Sociais</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:tecnova.agencia@gmail.com" className="text-gray-400 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  Email: tecnova.agencia@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5551981794338" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors text-sm flex items-center gap-2">
                  WhatsApp: (51) 981794338
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tecnovaagencia?igsh=bzc2bzYwbGF3Zmdz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-sm border border-white/5 hover:border-brand-accent/50" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center flex flex-col items-center justify-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} TecNova. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
