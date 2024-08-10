// AnimatedText.js
import React from "react";
import { motion } from "framer-motion";
import "../AnimateText.css"; // Add some basic styling if needed

const AnimatedText = () => {
  return (
    <div className="animated-text">
      <motion.h1
        animate={{ y: [0, -10, 0], color: ["#007bff", "#ff4081", "#007bff"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Day Care Advertisement
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
