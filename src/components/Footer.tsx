
import { Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@epo-entertainment?si=yZZDZsM_ENXgXn3M",
      icon: Youtube,
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/epocomedian?igsh=MXNtM3psa3U3dzVubQ%3D%3D&utm_source=qr",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erukakpomre-promise-261038226",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d1d24aab-ac04-4c10-b133-02adedb74c0c.png" 
                alt="EPOCOMEDIAN Logo" 
                className="h-12 w-12 rounded-full"
              />
              <span className="ml-3 text-xl font-playfair font-bold">
                EPOCOMEDIAN
              </span>
            </div>
            <p className="text-accent text-sm">
              Professional filmmaker, production designer, and creative director 
              specializing in feature films, series, and creative content production.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p>Phone: +234 803 213 1403</p>
              <p>Email: erukakpomrepromise99@gmail.com</p>
              <p>Ochima Close, Even Estate, Badore, Ajah, Lagos-Nigeria</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-gold hover:text-primary p-2 rounded-full transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8 text-center text-sm text-accent">
          <p>&copy; {currentYear} EPOCOMEDIAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
