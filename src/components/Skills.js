import React from 'react';
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaDatabase,
  FaHtml5
} from 'react-icons/fa';
import { 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiMongodb, 
  SiExpress,
  SiArduino,
  SiBlender
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "C", icon: <SiC />, level: 80 },
        { name: "C++", icon: <SiCplusplus />, level: 75 },
        { name: "JavaScript", icon: <SiJavascript />, level: 70 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, level: 75 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 85 },
        { name: "UI/UX Design", icon: <FaFigma />, level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 70 },
        { name: "Express.js", icon: <SiExpress />, level: 65 },
        { name: "MongoDB", icon: <SiMongodb />, level: 75 },
        { name: "SQL", icon: <FaDatabase />, level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 80 },
        { name: "Linux", icon: <FaLinux />, level: 75 },
        { name: "Arduino", icon: <SiArduino />, level: 85 },
        { name: "Blender", icon: <SiBlender />, level: 60 }
      ]
    }
  ];

  const expertise = [
    {
      title: "Mechanical & Electrical Aptitude",
      description: "Strong foundation in electronics engineering principles and hands-on experience with hardware systems."
    },
    {
      title: "Problem-Solving & Troubleshooting",
      description: "Analytical approach to identifying and resolving complex technical issues in both hardware and software."
    },
    {
      title: "Technical Documentation & Reporting",
      description: "Experience in creating comprehensive technical documentation and detailed project reports."
    },
    {
      title: "Teamwork & Communication",
      description: "Collaborative team player with excellent communication skills and multilingual capabilities."
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-section">
          <h3 className="expertise-title">Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <h4 className="expertise-card-title">{item.title}</h4>
                <p className="expertise-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
