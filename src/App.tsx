import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <motion.main
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;