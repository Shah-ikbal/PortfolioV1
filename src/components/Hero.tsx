import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn, slideIn } from './animations';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            variants={slideIn}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <motion.div 
              className="flex space-x-4"
              variants={fadeIn}
            >
              <a
                href="#projects"
                onClick={(e) => handleClick(e, 'projects')}
                className="px-6 py-3 bg-primary text-dark-900 rounded-lg hover:bg-primary-600 transition-colors flex items-center"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-dark-900 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=600"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl border-2 border-primary/20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;