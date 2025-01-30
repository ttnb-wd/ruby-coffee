import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const storyContent = [
    {
      title: "Our Story",
      content: "Founded in 2020, Ruby Coffee Shop began with a simple mission: to serve exceptional coffee in a warm, welcoming environment. Our journey started with a passion for quality beans and artisanal brewing methods.",
      icon: "📖"
    },
    {
      title: "Our Coffee",
      content: "We source our beans directly from sustainable farms in Ethiopia, Colombia, and Brazil. Each batch is carefully roasted in-house to bring out the unique flavor profiles of every origin.",
      icon: "☕"
    },
    {
      title: "Our Community",
      content: "More than just a coffee shop, we're a gathering place for coffee lovers, remote workers, and friends. We believe great coffee has the power to bring people together.",
      icon: "🤝"
    }
  ];

  const values = [
    { title: "Quality", icon: "⭐", desc: "Premium beans & expert brewing" },
    { title: "Sustainability", icon: "🌱", desc: "Eco-friendly practices" },
    { title: "Community", icon: "💫", desc: "Creating connections" },
    { title: "Innovation", icon: "🚀", desc: "Crafting new experiences" }
  ];

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ marginTop: '80px' }} // Add top margin to account for fixed navbar
    >
      <div className="about-hero">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="highlight">Ruby</span> Coffee
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          Crafting Perfect Moments, One Cup at a Time
        </motion.p>
      </div>

      <div className="story-grid">
        {storyContent.map((item, index) => (
          <motion.div
            key={item.title}
            className="story-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="story-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="coffee-process"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Our Coffee Journey</h2>
        <div className="process-steps">
          {[
            { step: "1", title: "Sourcing", icon: "🌍" },
            { step: "2", title: "Roasting", icon: "🔥" },
            { step: "3", title: "Brewing", icon: "☕" },
            { step: "4", title: "Serving", icon: "🤝" }
          ].map((step, index) => (
            <motion.div
              key={step.step}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (index * 0.2) }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="join-us"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2>Join Our Coffee Community</h2>
        <p>Visit us and experience the perfect blend of tradition and innovation.</p>
        <Link to="/contact">
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Us
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default About; 