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
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 border-b border-gray-900 pb-10">
          <div className="flex items-center gap-2 text-white group">
            <img src="https://i.ibb.co/67gXgsw6/Chat-GPT-Image-5-de-jun-de-2026-18-38-29.png" alt="TecNova Logo" className="h-14 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-sm" />
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} TecNova. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;