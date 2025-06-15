
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "2348032131403";
  const message = "Hello! I'm interested in your filmmaking services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 animate-scale-in"
      size="lg"
    >
      <MessageCircle size={24} />
      <span className="ml-2">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
