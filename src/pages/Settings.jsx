import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Eye, Monitor, Sun, Moon } from 'react-feather';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/Settings.css';

const Settings = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const themeOptions = [
    {
      id: 'light',
      name: 'Light Mode',
      description: 'Clean and bright interface',
      icon: Sun,
      active: theme === 'light'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Easy on the eyes',
      icon: Moon,
      active: theme === 'dark'
    }
  ];

  return (
    <motion.div
      className="settings-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="settings-header" variants={itemVariants}>
        <div className="header-content">
          <SettingsIcon size={32} className="header-icon" />
          <div>
            <h1>Settings</h1>
            <p>Customize your Ruby Coffee experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="settings-content" variants={itemVariants}>
        {/* Theme Section */}
        <div className="settings-section">
          <div className="section-header">
            <Eye size={24} />
            <h2>Appearance</h2>
          </div>
          
          <div className="theme-controls">
            <div className="theme-toggle-section">
              <div className="toggle-info">
                <h3>Theme Mode</h3>
                <p>Switch between light and dark themes</p>
              </div>
              <ThemeToggle />
            </div>

            <div className="theme-options">
              {themeOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <motion.div
                    key={option.id}
                    className={`theme-option ${option.active ? 'active' : ''}`}
                    onClick={() => {
                      if (option.id !== theme) {
                        toggleTheme();
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemVariants}
                  >
                    <div className="option-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="option-content">
                      <h4>{option.name}</h4>
                      <p>{option.description}</p>
                    </div>
                    <div className={`option-indicator ${option.active ? 'active' : ''}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Settings Sections */}
        <motion.div className="settings-section" variants={itemVariants}>
          <div className="section-header">
            <Monitor size={24} />
            <h2>Display</h2>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>System Theme Detection</h3>
              <p>Automatically match your system's theme preference</p>
            </div>
            <div className="setting-control">
              <span className="status-badge">
                {window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Coffee Preferences */}
        <motion.div className="settings-section" variants={itemVariants}>
          <div className="section-header">
            <div className="coffee-icon">☕</div>
            <h2>Coffee Preferences</h2>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Default Coffee Size</h3>
              <p>Your preferred coffee size for quick orders</p>
            </div>
            <div className="setting-control">
              <select className="preference-select">
                <option value="small">Small</option>
                <option value="medium" defaultValue>Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Milk Preference</h3>
              <p>Your default milk choice</p>
            </div>
            <div className="setting-control">
              <select className="preference-select">
                <option value="whole">Whole Milk</option>
                <option value="skim">Skim Milk</option>
                <option value="almond">Almond Milk</option>
                <option value="oat">Oat Milk</option>
                <option value="soy">Soy Milk</option>
              </select>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Settings; 