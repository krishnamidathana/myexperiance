import React, { useEffect } from "react";
import { VscFolderLibrary } from "react-icons/vsc"; // Import the icon component
import "./intro.css";

import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { useInView } from "react-intersection-observer"; // Import useInView
import dev from "../../assets/dev.png";

// Define text animation variantsF

const Intro = () => {
  const buttonControls = useAnimation(); // Controls for button animation
  const textControls = useAnimation(); // Controls for text animation

  const fullText =
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.";

  const [ref, inView] = useInView({ threshold: 0.6 }); // Use useInView hook to detect when intro section is scrolled into view

  useEffect(() => {
    if (inView) {
      buttonControls.start({ x: 0 }); // Start animation for button coming from left
    }
    if (inView && ref && ref.current && ref.current.offsetTop) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition =
        ref.current.offsetTop + ref.current.offsetHeight * 0.6; // Calculate position at 60% of the intro section
      if (scrollPosition > sectionPosition) {
        textControls.start("visible"); // Trigger text animation when scrolled to 60%
      }
    }
  }, [buttonControls, inView, ref, textControls]);

  return (
    <section id="about" ref={ref}>
      <h2>About Me</h2>
      <div className="container about__container">
        <img src={dev} alt="dev Icon" />
        <motion.div className="about__content">
          <motion.div className="about__cards">
            <motion.article
              className="about__card"
              initial={{ x: 1700 }}
              animate={buttonControls}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Add the badge icon here */}
              {window.innerWidth <= 600 ? (
                ""
              ) : (
                <VscFolderLibrary size={30} color="#4db5ff" />
              )}
              <h5 style={{ marginLeft: "5px" }}>30+ Completed Projects</h5>
            </motion.article>
          </motion.div>
          <p
            style={{
              fontFamily: "Arial",
              fontSize: "20px",
              height: window.innerWidth >= 600 ? "200px" : "330px",
            }} // Apply font and size to p tag
          >
            {fullText}
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary about__button" // Add class for button
            initial={{ x: 1700 }} // Initial position for content
            animate={buttonControls} // Animate button
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
