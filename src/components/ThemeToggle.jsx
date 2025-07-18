import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'react-feather';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{
        backgroundColor: isDark ? '#333' : '#fef3c7',
        color: isDark ? '#fff' : '#451a03'
      }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="icon-container"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </motion.div>
      
      <motion.div
        className="toggle-slider"
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
          backgroundColor: isDark ? '#FFD700' : '#f59e0b'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 