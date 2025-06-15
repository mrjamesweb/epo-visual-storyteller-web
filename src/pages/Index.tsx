
import { ArrowRight, Film, Camera, Palette, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Film,
      title: "Production Design",
      description: "Creating compelling visual narratives through comprehensive production design and art direction."
    },
    {
      icon: Camera,
      title: "Art Direction",
      description: "Leading art departments in executing visual narratives for feature films and series."
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Providing creative vision and direction for multimedia projects and content creation."
    },
    {
      icon: Award,
      title: "Project Management",
      description: "Professional project management with proven track record in film and media production."
    }
  ];

  const recentProjects = [
    "Kanayo O. Kanayo Production - Loving a GenZ & Opposite Sides",
    "EbonyLife Student Film - Beneath Command",
    "Royal Art Academy - The Right Girl, Meet Me Halfway, Loving Hearts",
    "Mary Jane TV - The Red Hill Academy"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 hover:scale-105">
              Professional 
              <span className="text-gold block animate-pulse">Filmmaker</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-accent max-w-3xl mx-auto px-4 animate-fade-in delay-300">
              Bringing creative visions to life through exceptional production design, 
              art direction, and innovative storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fade-in delay-500">
              <Link to="/services">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90 font-semibold w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View My Work
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-primary font-semibold w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary transform rotate-12 scale-150"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-in-left order-2 lg:order-1">
              <img 
                src="/lovable-uploads/3c2ec757-f857-43e2-bee5-04132d85784a.png" 
                alt="Erukakpomre Promise Obruche" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1"
              />
            </div>
            <div className="animate-slide-in-right order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4 sm:mb-6 transform transition-all duration-300 hover:text-secondary">
                Meet the Creative Mind
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 animate-fade-in delay-200">
                A nimble, industrious and charismatic individual, possessing excellent creative skills. 
                Very confident, disciplined and proactive with the ability to work under little or no supervision.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 animate-fade-in delay-400">
                With extensive experience in production design, art direction, and project management, 
                I bring stories to life through meticulous attention to detail and creative vision.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in delay-600">
                  Learn More About Me
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4 transform transition-all duration-300 hover:text-secondary">
              Professional Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence in every aspect of film production and creative direction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 animate-scale-in hover:scale-105 hover:-translate-y-2 group" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 group-hover:rotate-12 group-hover:bg-gold">
                    <service.icon className="text-primary transition-all duration-300 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-secondary">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-12 sm:py-16 bg-primary text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gold/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4 transform transition-all duration-300 hover:text-gold">
              Recent Projects
            </h2>
            <p className="text-base sm:text-lg text-accent max-w-2xl mx-auto">
              Latest collaborations with industry leaders and creative productions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-secondary p-4 sm:p-6 rounded-lg hover:bg-secondary/90 transition-all duration-500 animate-slide-in-up transform hover:scale-105 hover:shadow-xl group" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-base sm:text-lg font-semibold text-gold mb-2 transition-all duration-300 group-hover:text-white">Featured Project</h3>
                <p className="text-sm sm:text-base text-white">{project}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12 animate-fade-in delay-800">
            <Link to="/services">
              <Button size="lg" className="bg-gold text-primary hover:bg-gold/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Projects
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
