
import { Film, Camera, Palette, Users, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Production Design",
      description: "Comprehensive visual narrative creation through detailed production design and creative vision development.",
      features: [
        "Moodboard Development",
        "Set Design & Decoration", 
        "Creative Vision Implementation",
        "Pre-production Planning"
      ]
    },
    {
      icon: Camera,
      title: "Art Direction",
      description: "Leading art departments in executing visual narratives for feature films, series, and commercial productions.",
      features: [
        "Art Department Leadership",
        "Visual Narrative Execution",
        "Props & Set Dressing",
        "Team Coordination"
      ]
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Providing overall creative vision and direction for multimedia projects and content creation.",
      features: [
        "Creative Vision Development",
        "Brand Visual Identity",
        "Content Strategy",
        "Project Oversight"
      ]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Professional project management with proven track record in film and media production environments.",
      features: [
        "Team Leadership",
        "Budget Management",
        "Timeline Coordination",
        "Quality Assurance"
      ]
    }
  ];

  const filmography = [
    {
      year: "2025",
      project: "Creative Hangout Event",
      role: "Production Designer",
      company: "Dirty Youth Africa"
    },
    {
      year: "2025", 
      project: "Loving a GenZ & Opposite Sides",
      role: "Art Director",
      company: "Kanayo O. Kanayo Production"
    },
    {
      year: "2024",
      project: "The Red Hill Academy",
      role: "Art Director", 
      company: "Mary Jane TV"
    },
    {
      year: "2024",
      project: "Beneath Command",
      role: "Production Designer",
      company: "EbonyLife Student Film Project"
    },
    {
      year: "2024",
      project: "One Chance",
      role: "Set Dressing Assistant",
      company: "EbonyLife Student Film Project"
    },
    {
      year: "2024",
      project: "The Right Girl, Meet Me Halfway, Loving Hearts",
      role: "Art Director",
      company: "Royal Art Academy"
    },
    {
      year: "2024",
      project: "Picking Sides, A Case for The Heart",
      role: "Art Director",
      company: "Omoni Oboli TV"
    },
    {
      year: "2024",
      project: "A Love Like Yours",
      role: "Art Director",
      company: "Uduak Isong TV"
    },
    {
      year: "2024",
      project: "Ralp and Brenda Season 2",
      role: "Art Director",
      company: "Ebawa TV"
    }
  ];

  const skills = {
    personal: [
      "Oral and Written Communication",
      "Time Management", 
      "Leadership",
      "Teamwork",
      "Organization and Planning",
      "Interpersonal Relations",
      "Innovation",
      "Critical Thinking",
      "Media Literacy",
      "Technology Literacy",
      "Flexibility",
      "Creativity"
    ],
    professional: [
      "Adobe Photoshop",
      "Microsoft PowerPoint/Word/Excel", 
      "Scheduling",
      "Budgeting",
      "Moodboarding",
      "Research",
      "Canva",
      "Corel Draw"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
              Professional 
              <span className="text-gold block">Services</span>
            </h1>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Delivering excellence in film production, creative direction, and visual storytelling 
              with a proven track record of successful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filmography */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-4">
              Filmography & Experience
            </h2>
            <p className="text-lg text-gray-600">Recent projects and collaborations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmography.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-primary text-white px-2 py-1 rounded text-sm font-semibold">
                      {item.year}
                    </div>
                    <div className="bg-gold text-primary px-2 py-1 rounded text-sm font-semibold">
                      {item.role}
                    </div>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.project}</h3>
                  <p className="text-sm text-gray-600">{item.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Users className="mr-3" size={24} />
                  Personal Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.personal.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Award className="mr-3" size={24} />
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.professional.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
