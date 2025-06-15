
import { GraduationCap, Award, Briefcase, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const education = [
    {
      degree: "Post Graduate Diploma (PGD) in Mass Communication",
      institution: "National Open University, Akure Study Center",
      status: "In Progress"
    },
    {
      degree: "Higher National Diploma (HND) in Mass Communication",
      institution: "Delta State Polytechnic Ogwashi-Uku, Delta State",
      year: "November 2020",
      grade: "Second Class Upper Division"
    }
  ];

  const certifications = [
    "Production Design and Art Direction - EbonyLife Creative Academy (2024)",
    "Human Resources Management Professional (HRMP) - May 2022",
    "Health, Safety and Environment Management Professional (HSEMP) - May 2022",
    "Project Management Professional (PMP) - May 2022",
    "Certificate in Acting - Royal Arts Academy (2023)"
  ];

  const affiliations = [
    "Associate, Chartered Institute of Human Resources Management (ACIHRM)",
    "Associate, International Institute of Safety Management (AIISM)",
    "Associate, International Institute of Project Management (AIIPM)",
    "Fellow, Nigerian Institute of Management (FNIM)",
    "Fellow, Institute of Management Consultants (FIMC)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-12 sm:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 transform transition-all duration-500 hover:scale-105">
                About 
                <span className="text-gold animate-pulse">EPOCOMEDIAN</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent animate-fade-in delay-200">
                Erukakpomre Promise Obruche
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 animate-fade-in delay-400">
                A nimble, industrious and charismatic individual, possessing excellent creative skills. 
                Very confident, disciplined and proactive having the ability to work under little or no supervision.
              </p>
              <p className="text-base sm:text-lg animate-fade-in delay-600">
                A good team player willing to grow alongside the organization through immense contribution 
                to development while increasing work experience and growing abilities.
              </p>
            </div>
            <div className="animate-slide-in-right order-1 lg:order-2">
              <img 
                src="/lovable-uploads/3c2ec757-f857-43e2-bee5-04132d85784a.png" 
                alt="Erukakpomre Promise Obruche" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 sm:py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-gold transform -rotate-6 scale-150"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="animate-fade-in transform transition-all duration-500 hover:shadow-xl hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-playfair text-primary text-center sm:text-left transform transition-all duration-300 hover:text-secondary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center sm:text-left animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-semibold text-primary mb-2 transition-colors duration-300 hover:text-gold">Lagos Address</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Ochima Close, Even Estate,<br />
                  Badore, Ajah, Lagos-Nigeria
                </p>
              </div>
              <div className="text-center sm:text-left animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-semibold text-primary mb-2 transition-colors duration-300 hover:text-gold">Delta Address</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  No. 1, street 1, off. KES College Street,<br />
                  Iwhrekpokpor, Ughelli, Delta State
                </p>
              </div>
              <div className="text-center sm:text-left animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-semibold text-primary mb-2 transition-colors duration-300 hover:text-gold">Phone Numbers</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  +234 803 213 1403<br />
                  +234 902 514 5484
                </p>
              </div>
              <div className="text-center sm:text-left animate-slide-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className="font-semibold text-primary mb-2 transition-colors duration-300 hover:text-gold">Email</h3>
                <p className="text-sm sm:text-base text-gray-700 break-words">erukakpomrepromise99@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4 transform transition-all duration-300 hover:text-secondary">
              Educational Background
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 animate-scale-in hover:scale-105 hover:-translate-y-2 group" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-accent p-2 sm:p-3 rounded-full flex-shrink-0 transform transition-all duration-300 group-hover:rotate-12 group-hover:bg-gold">
                      <GraduationCap className="text-primary transition-colors duration-300 group-hover:text-white" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base transition-colors duration-300 group-hover:text-secondary">{edu.degree}</h3>
                      <p className="text-gray-700 mb-1 text-sm sm:text-base">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {edu.year || edu.status}
                        {edu.grade && ` - ${edu.grade}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="mb-8 sm:mb-12 animate-fade-in transform transition-all duration-500 hover:shadow-xl hover:scale-105 group" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-primary text-center sm:text-left transition-colors duration-300 group-hover:text-secondary">
                <Award className="mr-2 sm:mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:rotate-12" size={20} />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start animate-slide-in-right" style={{ animationDelay: `${600 + index * 100}ms` }}>
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm sm:text-base text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Professional Affiliations */}
          <Card className="animate-fade-in transform transition-all duration-500 hover:shadow-xl hover:scale-105 group" style={{ animationDelay: '800ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-primary text-center sm:text-left transition-colors duration-300 group-hover:text-secondary">
                <Users className="mr-2 sm:mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:rotate-12" size={20} />
                Professional Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 sm:space-y-3">
                {affiliations.map((affiliation, index) => (
                  <li key={index} className="flex items-start animate-slide-in-right" style={{ animationDelay: `${1000 + index * 100}ms` }}>
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm sm:text-base text-gray-700">{affiliation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
