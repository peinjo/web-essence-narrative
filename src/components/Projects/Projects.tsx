
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Tax Management Platform",
      description: "Built a tax management platform with transfer pricing, tax calculators, audit & reporting, compliance tracking, and an AI advisor.",
      imageUrl: "assets/taxpal-dashboard.jpg",
      liveLink: "#!",
      sourceLink: "https://taxstreamline-ai.vercel.app/"
    },
    // Add your other projects here
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
