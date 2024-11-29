import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  liveUrl 
}: Project) => (
  <div className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-dark-700">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-dark-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          className="flex items-center text-dark-300 hover:text-primary transition-colors"
        >
          <Github size={20} className="mr-2" />
          Code
        </a>
        <a
          href={liveUrl}
          className="flex items-center text-dark-300 hover:text-primary transition-colors"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["TypeScript", "Redux", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with detailed forecasts and interactive maps",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["React", "OpenWeather API", "Charts.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export default Projects;