import React from 'react';
 // Import the CSS for card styling

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.link} className="project-link">View Project</a>
    </div>
  );
};

export default ProjectCard;
