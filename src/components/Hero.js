import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Maryam Shakiliyeva</span>
            </h1>
            <h2 className="hero-subtitle">Junior Electronics Engineer & Software Developer</h2>
            <p className="hero-description">
              I'm a passionate Junior Electronics Engineer with expertise in both frontend and backend 
              development. I enjoy bridging technical and creative domains, with growing expertise in 
              UI/UX design and hands-on experience in Python, C, and C++.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a
                href="/Maryam Shakiliyeva.pdf"
                className="btn btn-secondary"
                download="Maryam Shakiliyeva.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="hero-social">
              <a 
                href="https://github.com/meryemshekiliyeva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/maryam-shakiliyeva-5321822a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:maryamshakiliyeva@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+994556985310"
                className="social-link"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-image-container">
              <img
                src="/1002177837.jpg"
                alt="Maryam Shakiliyeva"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="profile-circle">
                  <span>MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll" onClick={scrollToNext}>
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
