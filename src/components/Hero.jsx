import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './Hero.css';

const coffeeFeatures = [
  { 
    icon: "☕", 
    title: "Premium Beans", 
    desc: "Single-origin beans from Ethiopia, Colombia, and Brazil",
    badge: "100% Arabica",
    details: ["Light to Dark Roasts", "Specialty Grade", "Ethically Sourced"]
  },
  { 
    icon: "🌱", 
    title: "Fresh Daily", 
    desc: "Roasted in small batches throughout the day",
    badge: "Daily Roasted",
    details: ["Small Batch Roasting", "Peak Freshness", "Artisan Process"]
  },
  { 
    icon: "🏆", 
    title: "Award Winning", 
    desc: "Recognized for excellence in coffee craftsmanship",
    badge: "Best in Town",
    details: ["Master Baristas", "Perfect Extraction", "Latte Art"]
  }
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(null);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-container">
      <motion.div 
        className="hero-background"
        style={{ 
          y,
          backgroundPositionX: mousePosition.x,
          backgroundPositionY: mousePosition.y
        }}
      >
        <div className="coffee-beans">
          {[...Array(8)].map((_, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: index * 2,
                ease: "linear"
              }}
              className="floating-bean"
              style={{
                x: mousePosition.x * (index * 0.2),
                y: mousePosition.y * (index * 0.2),
              }}
            />
          ))}
        </div>
        <div className="steam-container">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={`steam-${index}`}
              className="steam"
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -30,
                x: [0, index % 2 === 0 ? 10 : -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
      >
        <motion.div 
          className="animated-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="coffee-animation">
            <motion.div className="coffee-cup">
              <div className="cup-steam" />
              <div className="cup-body">
                <div className="coffee-liquid" />
                <div className="coffee-foam" />
              </div>
            </motion.div>
            <div className="coffee-drops">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="coffee-drop"
                  animate={{
                    y: [0, 20],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="highlight">Ruby</span> Coffee Shop
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the finest coffee in town
          </motion.p>

          <div className="coffee-tags">
            {["Specialty Coffee", "Artisan Roasting", "Expert Baristas", "Cozy Atmosphere"].map((tag, index) => (
              <motion.span
                key={tag}
                className="coffee-tag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="features-grid">
            {coffeeFeatures.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                <motion.div 
                  className="feature-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <motion.div 
                  className="feature-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.badge}
                </motion.div>
                <motion.div
                  className="feature-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0,
                    height: activeFeature === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {feature.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="coffee-stats">
            {[
              { number: "5+", label: "Coffee Origins" },
              { number: "50+", label: "Unique Drinks" },
              { number: "1000+", label: "Happy Customers" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.2) }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.span 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {["Order Now", "View Menu"].map((text, index) => (
              <motion.button
                key={text}
                className={`cta-button ${index === 1 ? 'secondary' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {text}
                <motion.span 
                  className="button-highlight"
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-overlay"
        style={{
          opacity: useTransform(scrollY, [0, 300], [0.4, 0.6])
        }}
      />
      
      <motion.div 
        className="scroll-indicator"
        animate={{ 
          y: [0, 10, 0],
          opacity: useTransform(scrollY, [0, 100], [1, 0])
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Scroll for More ↓
      </motion.div>
    </div>
  );
};

export default Hero; 