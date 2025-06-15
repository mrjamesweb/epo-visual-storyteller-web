
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
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
                About 
                <span className="text-gold">EPOCOMEDIAN</span>
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Erukakpomre Promise Obruche
              </h2>
              <p className="text-lg mb-6">
                A nimble, industrious and charismatic individual, possessing excellent creative skills. 
                Very confident, disciplined and proactive having the ability to work under little or no supervision.
              </p>
              <p className="text-lg">
                A good team player willing to grow alongside the organization through immense contribution 
                to development while increasing work experience and growing abilities.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/3c2ec757-f857-43e2-bee5-04132d85784a.png" 
                alt="Erukakpomre Promise Obruche" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Lagos Address</h3>
                <p className="text-gray-700">
                  Ochima Close, Even Estate,<br />
                  Badore, Ajah, Lagos-Nigeria
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Delta Address</h3>
                <p className="text-gray-700">
                  No. 1, street 1, off. KES College Street,<br />
                  Iwhrekpokpor, Ughelli, Delta State
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Phone Numbers</h3>
                <p className="text-gray-700">
                  +234 803 213 1403<br />
                  +234 902 514 5484
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <p className="text-gray-700">erukakpomrepromise99@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary mb-4">
              Educational Background
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent p-3 rounded-full">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{edu.degree}</h3>
                      <p className="text-gray-700 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-600">
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
          <Card className="mb-12 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-3" size={24} />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Professional Affiliations */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="mr-3" size={24} />
                Professional Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {affiliations.map((affiliation, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{affiliation}</span>
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
