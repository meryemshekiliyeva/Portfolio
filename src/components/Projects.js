import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Grumble - Complaint & Review Platform",
      description: "A full-stack web application designed for user authentication, complaint management, and review systems. Features secure login/signup, password recovery, and efficient frontend-backend communication.",
      image: "/grumble_page.png",
      technologies: ["Node.js", "React", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/meryemshekiliyeva/grumble",
      demo: "https://grumble-platform.netlify.app",
      status: "Completed",
      features: [
        "User authentication system",
        "Complaint categorization with React frontend",
        "Backend API integration",
        "MongoDB database design",
        "Secure password recovery workflows"
      ]
    },
    {
      id: 2,
      title: "Measure Distance - Electronics Circuit Simulator",
      description: "An Arduino-based project combining hardware and software to measure distance using ultrasonic sensors. Demonstrates practical application of electronics engineering principles with real-time data processing.",
      image: "https://raw.githubusercontent.com/meryemshekiliyeva/Measure-Distance/main/1759779884848.jpg",
      technologies: ["Arduino", "C++", "Circuit Design", "Ultrasonic Sensors", "Electronics"],
      category: "hardware",
      github: "https://github.com/meryemshekiliyeva/Measure-Distance",
      demo: "https://github.com/meryemshekiliyeva/Measure-Distance",
      status: "Completed",
      features: [
        "Real-time distance measurement",
        "Ultrasonic sensor integration",
        "Hardware-software interface",
        "Arduino programming",
        "Circuit design and implementation"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React. Features smooth animations, mobile-first design, and optimized performance with contact functionality and project showcase.",
      image: "/portfolio-1000x500-1.jpg",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design", "React Icons"],
      category: "frontend",
      github: "https://github.com/meryemshekiliyeva/Portfolio",
      demo: "https://maryamshakiliyevaportfolio.netlify.app",
      status: "Completed",
      features: [
        "Responsive design",
        "Smooth animations",
        "Modern UI/UX",
        "Contact form integration",
        "Performance optimized"
      ]
    },
    {
      id: 4,
      title: "Binary Trees & Sorting Algorithms",
      description: "Implementation of binary trees, sorting algorithms, and data structures in C. Comprehensive study of computer science fundamentals including tree traversal, search algorithms, and optimization techniques.",
      image: "/cproglang.jpeg",
      technologies: ["C", "Data Structures", "Algorithms", "Binary Trees", "Sorting"],
      category: "programming",
      github: "https://github.com/meryemshekiliyeva/holbertonschool-binary_trees",
      demo: "https://github.com/meryemshekiliyeva/holbertonschool-sorting_algorithms",
      status: "Completed",
      features: [
        "Binary tree implementation and traversal",
        "Sorting algorithms (Quick, Merge, Heap sort)",
        "Tree search and insertion algorithms",
        "Memory management and optimization",
        "Algorithm complexity analysis"
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'hardware', label: 'Hardware' },
    { key: 'programming', label: 'Programming' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my work spanning full-stack development, electronics, and software engineering
          </p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View source code"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <FaCode className="no-projects-icon" />
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
