import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCopy
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a properly formatted email for Gmail
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact from ' + formData.name);
      const emailBody = `Hello Maryam,

I'm reaching out through your portfolio website.

${formData.message}

Best regards,
${formData.name}
${formData.email}`;

      const body = encodeURIComponent(emailBody);

      // Gmail web interface URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=maryamshakiliyeva@gmail.com&su=${subject}&body=${body}`;

      // Open Gmail in new tab
      window.open(gmailUrl, '_blank');

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Error opening Gmail:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('maryamshakiliyeva@gmail.com').then(() => {
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus(''), 2000);
    }).catch(() => {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus(''), 2000);
    });
  };



  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "maryamshakiliyeva@gmail.com",
      link: "mailto:maryamshakiliyeva@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+994 55 698 5310",
      link: "tel:+994556985310"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Baku, Azerbaijan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/meryemshekiliyeva",
      color: "#333"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maryam-shakiliyeva-5321822a9/",
      color: "#0077b5"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect!</h3>
              <p>
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                    {info.title === 'Email' && (
                      <button
                        onClick={copyEmail}
                        className="copy-email-btn"
                        title="Copy email address"
                      >
                        <FaCopy />
                        {copyStatus === 'copied' ? 'Copied!' : copyStatus === 'error' ? 'Error' : 'Copy'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaComment className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <FaComment className="input-icon textarea-icon" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    SEND MESSAGE
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  ✅ Gmail opened in new tab! Your message is pre-filled and ready to send.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-error">
                  ❌ Couldn't open Gmail. Please email me directly at: maryamshakiliyeva@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
