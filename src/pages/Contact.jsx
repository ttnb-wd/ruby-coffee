import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Coffee } from 'react-feather';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Visit Us",
      content: "123 Coffee Street, Brew City, BC 12345",
      delay: 0.2
    },
    {
      icon: <Phone />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      delay: 0.3
    },
    {
      icon: <Mail />,
      title: "Email Us",
      content: "hello@rubycoffee.com",
      delay: 0.4
    },
    {
      icon: <Clock />,
      title: "Opening Hours",
      content: "Mon-Sun: 7:00 AM - 8:00 PM",
      delay: 0.5
    }
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="highlight">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          We'd Love to Hear From You
        </motion.p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div 
              key={info.title}
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: info.delay }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="info-icon">
                {info.icon}
              </div>
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-header">
            <Coffee className="coffee-icon" />
            <h2>Send Us a Message</h2>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </motion.div>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
          {isSubmitted && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div 
        className="map-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="map-placeholder">
          <h3>Find Us On The Map</h3>
          <p>Interactive map coming soon!</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 