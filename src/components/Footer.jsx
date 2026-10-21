import { Heart } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t-4 border-background py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary border-2 border-background shadow-hard flex items-center justify-center font-extrabold text-foreground">
                YP
              </div>
              <span className="font-extrabold text-xl">Your Portfolio</span>
            </div>
            <p className="text-background/80 font-medium text-sm">
              Creating amazing digital experiences one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-extrabold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background text-foreground rounded-lg border-2 border-background hover:bg-tertiary hover:text-foreground transition-colors text-lg"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background text-foreground rounded-lg border-2 border-background hover:bg-secondary hover:text-white transition-colors text-lg"
              >
                <FaGithub />
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background text-foreground rounded-lg border-2 border-background hover:bg-quaternary hover:text-foreground transition-colors text-lg"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t-2 border-background/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/80 font-medium">
          <p>
            © 2024 Your Portfolio. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-secondary fill-secondary" /> by You
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
