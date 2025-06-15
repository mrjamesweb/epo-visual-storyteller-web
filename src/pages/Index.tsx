
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
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
              Professional 
              <span className="text-gold block">Filmmaker</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-accent max-w-3xl mx-auto px-4">
              Bringing creative visions to life through exceptional production design, 
              art direction, and innovative storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/services">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90 font-semibold w-full sm:w-auto">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-primary font-semibold w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <img 
                src="/lovable-uploads/3c2ec757-f857-43e2-bee5-04132d85784a.png" 
                alt="Erukakpomre Promise Obruche" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-fade-in order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4 sm:mb-6">
                Meet the Creative Mind
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                A nimble, industrious and charismatic individual, possessing excellent creative skills. 
                Very confident, disciplined and proactive with the ability to work under little or no supervision.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                With extensive experience in production design, art direction, and project management, 
                I bring stories to life through meticulous attention to detail and creative vision.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Learn More About Me
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
              Professional Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence in every aspect of film production and creative direction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-base sm:text-lg text-accent max-w-2xl mx-auto">
              Latest collaborations with industry leaders and creative productions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-secondary p-4 sm:p-6 rounded-lg hover:bg-secondary/90 transition-colors duration-300">
                <h3 className="text-base sm:text-lg font-semibold text-gold mb-2">Featured Project</h3>
                <p className="text-sm sm:text-base text-white">{project}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gold text-primary hover:bg-gold/90">
                View All Projects
                <ArrowRight className="ml-2" size={20} />
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
