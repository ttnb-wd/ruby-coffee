import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, ShoppingBag, Menu as MenuIcon, Phone, Clock, MapPin } from 'react-feather';
import '../styles/Home.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { 
      title: "Premium Beans",
      icon: "☕",
      description: "Sourced from the finest coffee regions worldwide"
    },
    { 
      title: "Fresh Roasted",
      icon: "🔥",
      description: "Roasted daily for maximum freshness and flavor"
    },
    { 
      title: "Expert Baristas",
      icon: "👨‍🍳",
      description: "Crafted by passionate coffee artisans"
    },
    { 
      title: "Cozy Ambiance",
      icon: "✨",
      description: "Perfect environment for every coffee moment"
    }
  ];

  const quickInfo = [
    { icon: <Clock />, text: "Open 7AM - 8PM" },
    { icon: <Phone />, text: "123-456-7890" },
    { icon: <MapPin />, text: "123 Coffee Street" }
  ];

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className={`quick-info-bar ${isScrolled ? 'hidden' : ''}`}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {quickInfo.map((info, index) => (
          <motion.div 
            key={index}
            className="quick-info-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {info.icon}
            <span>{info.text}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="hero-section">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="highlight">Ruby</span> Coffee
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          Experience the Perfect Blend of Artisanal Coffee
        </motion.p>
        
        <motion.div 
          className="cta-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/menu">
            <motion.button 
              className="menu-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MenuIcon className="button-icon" />
              View Menu
            </motion.button>
          </Link>
          <motion.button 
            className="order-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#order-section'}
          >
            <ShoppingBag className="button-icon" />
            Order Now
          </motion.button>
        </motion.div>

        <motion.div 
          className="floating-coffee"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Coffee size={48} />
        </motion.div>
      </div>

      <motion.div 
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`feature-card ${activeFeature === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <AnimatePresence>
              {activeFeature === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="feature-description"
                >
                  {feature.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mobile-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <span>Scroll for more</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>

      <div id="order-section" className="order-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Ready to Order?
        </motion.h2>
        <motion.div 
          className="order-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link to="/menu">
            <motion.button 
              className="order-option"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Menu
            </motion.button>
          </Link>
          <a href="tel:+1234567890">
            <motion.button 
              className="order-option phone-order"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call to Order
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 