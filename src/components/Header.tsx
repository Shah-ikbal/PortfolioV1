import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-dark/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks handleNavClick={handleNavClick} />
            <SocialLinks />
          </div>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavLinks mobile handleNavClick={handleNavClick} />
            <div className="mt-4 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NavLinks = ({ mobile, handleNavClick }: NavLinksProps) => {
  const baseClasses = mobile
    ? "flex flex-col space-y-4 items-center"
    : "flex space-x-8";

  const links = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <div className={baseClasses}>
      {links.map(({ href, text }) => (
        <a
          key={text}
          href={href}
          onClick={(e) => handleNavClick(e, href.slice(1))}
          className="text-white hover:text-primary transition-colors"
        >
          {text}
        </a>
      ))}
    </div>
  );
};

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com" className="text-white hover:text-primary transition-colors">
      <Github size={20} />
    </a>
    <a href="https://linkedin.com" className="text-white hover:text-primary transition-colors">
      <Linkedin size={20} />
    </a>
    <a href="mailto:your.email@example.com" className="text-white hover:text-primary transition-colors">
      <Mail size={20} />
    </a>
  </div>
);

export default Header;