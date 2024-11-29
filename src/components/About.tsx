import React from 'react';
import { Code, Server, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Developer"
              className="rounded-lg shadow-lg border border-dark-600"
            />
          </div>
          
          <div>
            <p className="text-lg text-dark-200 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience building web applications.
              I love creating elegant solutions to complex problems and learning new technologies.
            </p>
            
            <div className="space-y-6">
              <Skill
                icon={<Code />}
                title="Frontend Development"
                description="React, TypeScript, Tailwind CSS"
              />
              <Skill
                icon={<Server />}
                title="Backend Development"
                description="Node.js, Express, PostgreSQL"
              />
              <Skill
                icon={<Palette />}
                title="UI/UX Design"
                description="Figma, Adobe XD, Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start">
    <div className="p-2 bg-primary/10 rounded-lg text-primary">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </div>
  </div>
);

export default About;