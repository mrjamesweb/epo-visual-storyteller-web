
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || "Inquiry from Website");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:erukakpomrepromise99@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your email client should open with the message pre-filled.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+234 803 213 1403", "+234 902 514 5484"],
      action: "tel:+2348032131403"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["erukakpomrepromise99@gmail.com"],
      action: "mailto:erukakpomrepromise99@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Ochima Close, Even Estate", "Badore, Ajah, Lagos-Nigeria"],
      action: null
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "2348032131403";
    const message = "Hello! I'm interested in your filmmaking services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
              Get In 
              <span className="text-gold block">Touch</span>
            </h1>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Ready to bring your creative vision to life? Let's discuss your next project 
              and explore how we can collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="break-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-8">
                  Ready to collaborate on your next creative project? Reach out through any of the 
                  channels below. I'm always excited to discuss new opportunities and bring 
                  innovative ideas to life.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent p-3 rounded-full">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-gray-700 ${info.title === "Email Address" ? "break-all" : ""}`}>
                            {info.action ? (
                              <a 
                                href={info.action} 
                                className="hover:text-primary transition-colors duration-200 break-all"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Direct Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-500 p-3 rounded-full">
                        <MessageCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Quick WhatsApp Chat</h3>
                        <p className="text-gray-600">Get instant response</p>
                      </div>
                    </div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

