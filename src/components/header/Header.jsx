import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import CTA from "./CTA";
import "./header.css";
import RocketBoy from "../../assets/rocketboy.png";

const Header = () => {
  const [showRocketBoy] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm Krishna
        </motion.h1>
        <motion.h2
          className="text-light typing-text"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          MERN Stack Developer
        </motion.h2>

        <CTA />
      </div>

      {/* Show RocketBoy until 3D model loads */}
      {showRocketBoy && (
        <motion.img
          src={RocketBoy}
          alt="RocketBoy"
          style={{
            // Apply transform to move the RocketBoy image to the right based on the scroll position
            x: scrollY, // Animate the x position
            height: window.innerWidth >= 600 ? "600px" : "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center horizontally
          }}
          animate={{
            y: [20, -40, 20],
            rotate: [0, 0, 0],
            transition: { repeat: Infinity, duration: 5 },
          }}
        />
      )}
    </header>
  );
};

export default Header;
