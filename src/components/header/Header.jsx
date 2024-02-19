import React, { useRef } from "react";
import CTA from "./CTA";
import "./header.css";
import { motion } from "framer-motion";
import gb from "../../assets/stylized_planet.glb";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import { Canvas } from "react-three-fiber";

const Model = () => {
  const gltf = useLoader(GLTFLoader, gb); // Define gltf here
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed here
    }
  });

  return <primitive object={gltf.scene} scale={[3, 3, 3]} ref={modelRef} />;
};

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <header id="home">
      <div className="container header__container">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from("Hello,").map((letter, index) => (
            <motion.span key={index} variants={textVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from("I'm Krishna ").map((letter, index) => (
            <motion.span key={index} variants={textVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          className="text-light typing-text"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Front-end Developer
        </motion.h2>

        <CTA />
      </div>

      {/* style={{ height: "600px", background: "red" }} */}
      <Canvas style={{ height: window.innerWidth >= 600 ? "600px" : "300px" }}>
        <Model />
      </Canvas>
    </header>
  );
};

export default Header;
