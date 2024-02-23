import React from 'react';
import { motion } from "framer-motion";
import CV from "../../assets/krishnamohan.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={CV}
        download
        className="btn"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "just",
          stiffness: 100,
        }}
      >
        Download CV
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ x: 500, opacity: 0 }} // Corrected initial value
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "keyframes", stiffness: 100 }}
      >
        Let's talk
      </motion.a>
    </div>
  );
};
export default CTA;
