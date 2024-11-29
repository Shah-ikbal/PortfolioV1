import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led a team of 5 developers in building a cloud-based enterprise solution",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "New York, NY",
    period: "2019 - 2021",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Collaborated with UX team to implement responsive designs",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    location: "Boston, MA",
    period: "2017 - 2019",
    description: [
      "Built interactive web applications using modern JavaScript frameworks",
      "Implemented pixel-perfect designs from Figma mockups",
      "Reduced page load times by 50% through optimization techniques"
    ],
    technologies: ["Angular", "TypeScript", "SASS", "Webpack"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  technologies
}: Experience) => (
  <div className="bg-dark-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-dark-700">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex items-center mt-2 text-dark-300">
          <Briefcase size={18} className="mr-2" />
          <span>{company}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="flex items-center mt-2 md:mt-0 text-dark-300">
        <Calendar size={18} className="mr-2" />
        <span>{period}</span>
      </div>
    </div>
    
    <ul className="list-disc list-inside mb-6 space-y-2 text-dark-300">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default Experience;