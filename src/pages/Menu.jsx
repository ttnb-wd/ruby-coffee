import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Menu.css';

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: "$3.50",
    category: "Hot Coffee",
    description: "Rich and bold single shot of espresso",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$4.50",
    category: "Hot Coffee",
    description: "Espresso with steamed milk and foam",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format"
  },
  {
    id: 3,
    name: "Iced Latte",
    price: "$4.75",
    category: "Cold Coffee",
    description: "Espresso with cold milk and ice",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format"
  },
  {
    id: 4,
    name: "Cold Brew",
    price: "$4.25",
    category: "Cold Coffee",
    description: "Smooth, slow-steeped cold coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format"
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    price: "$5.00",
    category: "Hot Coffee",
    description: "Vanilla-flavored drink marked with espresso and caramel drizzle",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format"
  },
  {
    id: 6,
    name: "Mocha Frappuccino",
    price: "$5.50",
    category: "Cold Coffee",
    description: "Blended coffee with rich mocha and whipped cream",
    image: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?w=500&auto=format"
  },
  {
    id: 7,
    name: "Americano",
    price: "$3.75",
    category: "Hot Coffee",
    description: "Espresso shots topped with hot water",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&auto=format"
  },
  {
    id: 8,
    name: "Chai Tea Latte",
    price: "$4.25",
    category: "Tea",
    description: "Black tea infused with cinnamon, clove, and other spices",
    image: "https://images.unsplash.com/photo-1557006021-b85a221b531c?w=500&auto=format"
  },
  {
    id: 9,
    name: "Green Tea Matcha",
    price: "$4.50",
    category: "Tea",
    description: "Traditional Japanese green tea powder with steamed milk",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&auto=format"
  },
  {
    id: 10,
    name: "Croissant",
    price: "$3.50",
    category: "Pastries",
    description: "Buttery, flaky French pastry",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format"
  },
  {
    id: 11,
    name: "Chocolate Muffin",
    price: "$3.25",
    category: "Pastries",
    description: "Rich chocolate muffin with chocolate chips",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format"
  },
  {
    id: 12,
    name: "Avocado Toast",
    price: "$6.50",
    category: "Food",
    description: "Smashed avocado on artisan bread with sea salt",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&auto=format"
  },
  {
    id: 13,
    name: "Breakfast Sandwich",
    price: "$5.75",
    category: "Food",
    description: "Egg, cheese, and bacon on a toasted bagel",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&auto=format"
  },
  {
    id: 14,
    name: "Vanilla Bean Scone",
    price: "$3.25",
    category: "Pastries",
    description: "Sweet vanilla flavored scone with vanilla bean glaze",
    image: "https://images.unsplash.com/photo-1484278786775-527ac0d0b608?w=500&auto=format"
  },
  {
    id: 15,
    name: "Affogato",
    price: "$5.50",
    category: "Specialty",
    description: "Vanilla ice cream topped with a shot of hot espresso",
    image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=500&auto=format"
  }
];

// Fallback image URL
const fallbackImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const direction = currentScroll > lastScroll ? "down" : "up";
      
      if (direction !== scrollDirection && Math.abs(currentScroll - lastScroll) >= 10) {
        setScrollDirection(direction);
      }
      
      setIsVisible(direction === "up" || currentScroll < 100);
      lastScroll = currentScroll > 0 ? currentScroll : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="menu-container">
      <motion.div 
        className="menu-title-container"
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h1 className="menu-title">Our Menu</h1>
      </motion.div>
      
      <div className="menu-grid">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="menu-item"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="menu-item-image">
              <img 
                src={item.image} 
                alt={item.name}
                onError={handleImageError}
              />
            </div>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="category">{item.category}</p>
            <p className="description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 