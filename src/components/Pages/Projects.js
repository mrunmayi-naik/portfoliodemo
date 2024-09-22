import React from 'react';
import ProjectCard from './ProjectCards';
import './Projects.css'; // Import the CSS for the projects grid

const Projects = ({ projects }) => {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
