import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "Electronics Engineering student at BEU-INHA DDP & Computer Science foundations at Holberton School"
    },
    {
      icon: <FaCode />,
      title: "Technical Skills",
      description: "Proficient in Python, C, C++, with growing expertise in UI/UX design and full-stack development"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Strong analytical and troubleshooting skills with experience in both hardware and software domains"
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Collaborative team player with excellent communication skills and multilingual abilities"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about bridging the gap between hardware and software
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                I'm Maryam Shakiliyeva, a Junior Electronics Engineer with a strong passion for both 
                frontend and backend development. Currently pursuing my Bachelor's degree in Electronics 
                Engineering at the BEU-INHA DDP program, I've also deepened my programming skills through 
                the Foundations of Computer Science & Software Engineering program at Holberton School.
              </p>
              <p>
                My unique background allows me to bridge technical and creative domains effectively. 
                I enjoy working on projects that combine my engineering knowledge with modern software 
                development practices, creating solutions that are both technically sound and user-friendly.
              </p>
              <p>
                As a certified artist and collaborative team player, I bring a creative mindset to 
                problem-solving and design. I'm always eager to learn, adapt, and take on new challenges 
                that push the boundaries of what's possible.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> Baku, Azerbaijan
              </div>
              <div className="detail-item">
                <strong>Languages:</strong> Azerbaijani, English, Korean, Turkish
              </div>
              <div className="detail-item">
                <strong>Interests:</strong> Electronics, Software Development, UI/UX Design, Art
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="education-title">Education</h3>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-year">2023 - 2027</div>
              <div className="education-content">
                <h4>Bachelor of Electronics Engineering</h4>
                <p>BEU-INHA DDP</p>
                <span className="education-status">Currently a junior</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2024 - 2025</div>
              <div className="education-content">
                <h4>Foundations of Computer Science & Software Engineering</h4>
                <p>Holberton School</p>
                <span className="education-status">Certificate ID: 10090</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
