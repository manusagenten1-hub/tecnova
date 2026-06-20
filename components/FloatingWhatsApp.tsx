import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5551981794338"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-brand-green text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-brand-green/50 animate-bounce cursor-pointer flex items-center justify-center"
      aria-label="Falar no WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
