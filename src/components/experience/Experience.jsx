import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./experience.css";

// Import SVG icons
import Html5Icon from "../../assets/html5.svg";
import Css3Icon from "../../assets/css3.svg";
import JsIcon from "../../assets/js.svg";
import ReactIcon from "../../assets/react.svg";
import BootstrapIcon from "../../assets/bootstrap.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ScssIcon from "../../assets/sass.svg";
import FirebaseIcon from "../../assets/firebase.svg";
import GitIcon from "../../assets/git.svg";
import ReduxIcon from "../../assets/redux.svg"; // Add import for Redux icon
import MongodbIcon from "../../assets/mongodb.svg"; // Add import for MongoDB icon
import PostmanIcon from "../../assets/postman.svg"; // Add import for Postman icon

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="experience">
      <h2>Skills</h2>
      <div className="container experience__container">
        <motion.div
          className="experience__content"
          initial={{ transform: "translateX(130%)" }} // Initial position (off-screen to the right)
          animate={
            scrollProgress >= (isMobileView ? 19 : 30)
              ? { transform: "translateX(0)" }
              : { transform: "translateX(130%)" }
          } // Animation to move from right to left
          transition={{ type: "spring", duration: 0.2 }} // Spring animation with default duration
        >
          {/* Articles for first experience__content */}
          <ArticleDetails
            icon={JsIcon}
            alt="JavaScript Icon"
            title="JavaScript"
          />
          <ArticleDetails icon={ReactIcon} alt="React Icon" title="ReactJs" />
          <ArticleDetails icon={ReduxIcon} alt="Redux Icon" title="Redux" />
          <ArticleDetails icon={Html5Icon} alt="HTML5 Icon" title="HTML" />
          <ArticleDetails icon={Css3Icon} alt="CSS3 Icon" title="CSS" />
          <ArticleDetails
            icon={BootstrapIcon}
            alt="Bootstrap Icon"
            title="Bootstrap"
          />
        </motion.div>

        <motion.div
          className="experience__content"
          initial={{ transform: "translateX(-130%)" }} // Initial position (off-screen to the left)
          animate={
            scrollProgress >= (isMobileView ? 23 : 35)
              ? { transform: "translateX(0)" }
              : { transform: "translateX(-130%)" }
          } // Animation to move from left to right
          transition={{ type: "spring", duration: 0.2 }} // Spring animation with duration of 1 second
        >
          {/* Articles for second experience__content */}
          <ArticleDetails icon={ScssIcon} alt="SCSS Icon" title="Sass" />
          <ArticleDetails
            icon={TailwindIcon}
            alt="Tailwind Icon"
            title="Tailwind"
          />
          <ArticleDetails
            icon={FirebaseIcon}
            alt="Firebase Icon"
            title="Firebase"
          />
          <ArticleDetails
            icon={MongodbIcon}
            alt="MongoDB Icon"
            title="MongoDB"
          />
          <ArticleDetails
            icon={PostmanIcon}
            alt="Postman Icon"
            title="Postman"
          />
          <ArticleDetails icon={GitIcon} alt="Git Icon" title="Git" />
        </motion.div>
      </div>
    </section>
  );
};

const ArticleDetails = ({ icon, alt, title }) => (
  <article className="experience__details">
    <img src={icon} className="experience__details-icon" alt={alt} />
    <h4>{title}</h4>
  </article>
);

export default Experience;
