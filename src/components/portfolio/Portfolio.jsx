import React, { useEffect, useState, useMemo } from "react";

import quiz from "../../assets/quiz.png";
import videolecture from "../../assets/videolecture.png";
import reactbasic from "../../assets/reactbasic.png";
import simpleinterest from "../../assets/simpleinterest.png";
import todoreact from "../../assets/todoreact.png";
import ukart from "../../assets/ukart.png";
import usepopcorn from "../../assets/usepopcorn.png";
import workouttimer from "../../assets/workouttimer.png";
import atomicblog from "../../assets/atomicblog.png";
import bmicalc from "../../assets/bmicalc.png";
import classyweather from "../../assets/classyweather.png";
import faraway from "../../assets/faraway.png";
import fireCrewApp from "../../assets/fireCrewApp.jpeg";
import movieguide from "../../assets/movieguide.png";
import tempconvertor from "../../assets/tempconvertor.png";
import crossgrid from "../../assets/crossgrid.png";
import countryguide from "../../assets/countryguide.png";
import coinflip from "../../assets/coinflip.png";
import agecalc from "../../assets/agecalc.png";
import weight from "../../assets/weight.png";
import crud from "../../assets/crud.png";
import multichecklist from "../../assets/multichecklist.png";
import dictionary from "../../assets/dictionary.png";
import randomjoke from "../../assets/randomjoke.png";
import pizzamenu from "../../assets/pizzamenu.png";
import responsivemenu from "../../assets/responsivemenu.png";
import review from "../../assets/review.png";
import background from "../../assets/background.png";
import counter from "../../assets/counter.png";
import quizapp from "../../assets/quizapp.png";
import alarmclock from "../../assets/alarmclock.png";
import slider from "../../assets/slider.png";
import weather from "../../assets/weather.png";
import calculater from "../../assets/calculater.png";

import screenshotapp from "../../assets/screenshotapp.png";
import flaslightapp from "../../assets/flaslightapp.png";

import "./portfolio.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("reactJs");
  const [projectsToShow, setProjectsToShow] = useState(6);
  const [allProjects, setAllProjects] = useState([]);

  const reactNativeProjects = useMemo(
    () => [
      // ... (Your existing HTML projects)
      {
        id: 1,
        title: "Fire Crew App (Full-stack)",
        img: fireCrewApp,
        description:
          "Implemented a payment gateway for subscriptions and real-time data synchronization. Enabled QR code generation for extinguisher management. Allowed team creation and collaboration. Developed PDF and Excel report generation features.",
        technologies: "React Native | NodeJs,MongoDB,ExpressJs",
        link: "https://www.firecrew.in/",
        github: "https://indusapp.store/g4s0og5v",
      },
    ],
    []
  );

  const reactJsProjects = useMemo(
    () => [
      // ... (Your existing JavaScript projects)

      {
        id: 1,
        title: "Ukart",
        img: ukart,
        description:
          "e-commerce project with sophisticated cart actions, extensive product filtering, dynamic updates, and efficient search, showcasing frontend mastery.",
        technologies: "React | Css | Context",
        link: "https://krishnamidathana.github.io/ukart/",
        github: "https://github.com/krishnamidathana/ukart/",
      },
      {
        id: 2,
        title: "Use Popcorn",
        img: usepopcorn,
        description:
          "Movie search app leverages external API integration for seamless movie searches, complemented by intuitive local rating and watchlist  features in a visually appealing UI.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/usepopcorn/",
        github: "https://github.com/krishnamidathana/usepopcorn",
      },
      {
        id: 3,
        title: "Quiz App",
        img: quiz,
        description:
          "Developed an interactive quiz app in React using Context and useReducer for robust state management. Integrated a timer and score comparison in the scoreboard for assessing past performance.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/react-quiz/",
        github: "https://github.com/krishnamidathana/react-quiz",
      },

      {
        id: 5,
        title: "Classy Weather",
        img: classyweather,
        description:
          "Weather app intelligently fetches the forecast from external API, utilizing local storage for efficiency when the current location matches the previous one.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/classy-weather/",
        github: "https://github.com/krishnamidathana/classy-weather",
      },

      {
        id: 6,
        title: "workout timer",
        img: workouttimer,
        description:
          "Designed a dynamic React workout timer calculating total exercise time based on customizable workouts, sets,duration and breaktime settings for an efficient fitness experience.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/workouttimer/",
        github: "https://github.com/krishnamidathana/workouttimer",
      },
      {
        id: 7,
        title: "Video Lectures App",
        img: videolecture,
        description:
          "Responsive video lectures app using ReactJS and Chakra UI. Optimized for user experience, it features a clean design and dark mode for enhanced flexibility.",
        technologies: "React | Chakra Ul ",
        link: "https://krishnamidathana.github.io/tutorialsapp/",
        github: "https://github.com/krishnamidathana/tutorialsapp",
      },

      {
        id: 8,
        title: "Atomic Blog",
        img: atomicblog,
        description:
          "Built an interactive blog site with random posts, search functionality, light/dark modes, and the capability to add new posts seamlessly.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/atomicblog/",
        github: "https://github.com/krishnamidathana/atomicblog",
      },

      {
        id: 9,
        title: "Far Away",
        img: faraway,
        description:
          "Travel list app: Track, check, and sort items with real-time updates. Effortless packing made efficient, organized, and convenient for your journey.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/travel-list/",
        github: "https://github.com/krishnamidathana/travel-list",
      },
      {
        id: 10,
        title: "React-basic-website",
        img: reactbasic,
        description:
          "Built a dynamic single-page-scroll React website featuring responsive design, smooth navigation, and engaging components, showcasing my proficiency in front-end development.",
        technologies: "React | Scss ",
        link: "https://krishnamidathana.github.io/React-basic-website/",
        github: "https://github.com/krishnamidathana/React-basic-website",
      },
      {
        id: 11,
        title: "BMI Calculater",
        img: bmicalc,
        description:
          "Created a React app, 'BMI Calculator,' allowing users to compute Body Mass Index effortlessly. Features a straightforward interface for quick and accurate BMI calculations.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/Bmi-calculator/",
        github: "https://github.com/krishnamidathana/Bmi-calculator",
      },
      {
        id: 12,
        title: "Simple-interest Calculater",
        img: simpleinterest,
        description:
          "Designed a React app named 'Simple Interest Calculator' for quick interest computations. Offers a clean interface, ease of use, and accurate results for financial planning.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/simple-interest-calc/",
        github: "https://github.com/krishnamidathana/simple-interest-calc",
      },
      {
        id: 13,
        title: "Todo list app",
        img: todoreact,
        description:
          "React-powered Todo List app for efficient task management, highlighting proficiency in React development and clean user interface design.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/Todo-list-react/",
        github: "https://github.com/krishnamidathana/Todo-list-react",
      },
    ],
    []
  );

  const javascriptProjects = useMemo(
    () => [
      // ... (Your existing JavaScript projects)
      {
        id: 1,
        title: "Movie-Guide-App",
        img: movieguide,
        description:
          "Movie Guide app featuring external API integration. Explore films effortlessly with detailed information and ratings. Enhance your movie exploration experience seamlessly.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/Movie-Guide-App/",
        github: "https://github.com/krishnamidathana/Movie-Guide-App",
      },
      {
        id: 2,
        title: "Alarm Clock",
        img: alarmclock,
        description:
          "Crafted an alarm clock app with an intuitive UI, blending aesthetics and functionality for a delightful user experience. Offers a visually pleasing design and seamless usability.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/alarm-clock/",
        github: "https://github.com/krishnamidathana/alarm-clock",
      },
      {
        id: 3,
        title: "Coin flip Game",
        img: coinflip,
        description:
          "Coinflip game with a user-friendly interface for an engaging experience. Includes accurate tracking of heads and tails count for a seamless gameplay.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/coin-flip-game/",
        github: "https://github.com/krishnamidathana/coin-flip-game",
      },
      {
        id: 4,
        title: "Country Guide App",
        img: countryguide,
        description:
          "Integrates an external API, enhancing user experience by dynamically fetching and presenting real-time country information, including flags, currencies, capitals, and populations.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/country-guide-app/",
        github: "https://github.com/krishnamidathana/country-guide-app",
      },

      {
        id: 5,
        title: "Age Calculater",
        img: agecalc,
        description:
          "Crafted an intuitive age calculator that seamlessly computes years, months, and days , prioritizing accessibility and simplicity for an enhanced user experience.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/age-calculator/",
        github: "https://github.com/krishnamidathana/age-calculator",
      },
      {
        id: 6,
        title: "weather App",
        img: weather,
        description:
          "Featuring real-time temperature, humidity, and wind speed details via external APIs, delivering a visually appealing and user-centric interface.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/weather-app/",
        github: "https://github.com/krishnamidathana/weather-app",
      },
      {
        id: 7,
        title: "Weight Converter",
        img: weight,
        description:
          "Developed a user-friendly weight converter app enabling swift and accurate transformations between kilograms, ounces, and pounds for a seamless and efficient user experience.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/Weight-Converter/",
        github: "https://github.com/krishnamidathana/Weight-Converter",
      },

      {
        id: 8,
        title: "Dictionary App",
        img: dictionary,
        description:
          "Created a user-friendly dictionary app, using external APIs for quick access to definitions and synonyms.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/Dictionary/",
        github: "https://github.com/krishnamidathana/Dictionary",
      },
      {
        id: 9,
        title: "Random Joke Generator",
        img: randomjoke,
        description:
          "Designed a dynamic joke generator with external API integration, providing a seamless and humorous user experience through random joke delivery.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/Random-joke-generator/",
        github: "https://github.com/krishnamidathana/Random-joke-generator",
      },
      {
        id: 10,
        title: "Quiz App",
        img: quizapp,
        description:
          "Dynamic quiz app showcasing a countdown timer, interactive UI, and personalized scoring for a rewarding user experience.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/quiz-app/",
        github: "https://github.com/krishnamidathana/quiz-app",
      },
      {
        id: 11,
        title: "pizza Menu",
        img: pizzamenu,
        description:
          "Straight forward restaurant menu featuring a user-friendly filter system for easy item exploration and enhanced accessibility.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/filterable-menu/",
        github: "https://github.com/krishnamidathana/filterable-menu",
      },
      {
        id: 12,
        title: "Calculator",
        img: calculater,
        description:
          "Calculator with an elegant UI, featuring both dark and light modes for a modern and user-friendly design.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/calculator/",
        github: "https://github.com/krishnamidathana/calculator/tree/master",
      },

      {
        id: 13,
        title: "Temperature Converter App",
        img: tempconvertor,
        description:
          "Temperature Converter app for instant Fahrenheit, Celsius, and Kelvin conversions. Simplify temperature transformations seamlessly, providing efficient and versatile functionality for users.",
        technologies: "React | Css ",
        link: "https://krishnamidathana.github.io/temperature-converter/",
        github: "https://github.com/krishnamidathana/temperature-converter",
      },
      {
        id: 14,
        title: "Cross Grid App",
        img: crossgrid,
        description:
          "Cross-grid app using HTML Canvas. Create custom grids with specified dimensions, download grid images, clear 'X' markings in boxes. Innovative design for dynamic user interaction.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/Cross-Switch-App/",
        github: "https://github.com/krishnamidathana/Cross-Switch-App",
      },
      {
        id: 15,
        title: "Review-carousel",
        img: review,
        description:
          "Created a dynamic review carousel by integrating an external API, showcasing user testimonials in an engaging and visually appealing format.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/review-carousel/",
        github: "https://github.com/krishnamidathana/review-carousel",
      },
      {
        id: 16,
        title: "Counter App",
        img: counter,
        description:
          "Versatile counting app allowing users to increase, decrease, and reset counts with a simple and intuitive user interface.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/counter/",
        github: "https://github.com/krishnamidathana/counter",
      },

      {
        id: 17,
        title: "Responsive-sidebar",
        img: responsivemenu,
        description:
          "Converted webpage header into a responsive sidebar for improved mobile usability and a visually appealing user experience.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/responsive-sidebar/",
        github: "https://github.com/krishnamidathana/responsive-sidebar",
      },

      {
        id: 18,
        title: "Background  Change",
        img: background,
        description:
          "Enhanced user experience with dynamic background color change on click using JavaScript events.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/background-color-changer/",
        github: "https://github.com/krishnamidathana/background-color-changer",
      },

      {
        id: 19,
        title: "CRUD App",
        img: crud,
        description:
          "Developed a stylish CRUD app with a sleek UI, offering a smooth user experience. The application allows users to seamlessly interact with data.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/crud-app/",
        github: "https://github.com/krishnamidathana/crud-app",
      },

      {
        id: 20,
        title: "Vertical Slider",
        img: slider,
        description:
          "Implemented a smooth vertical slider with auto-closing feature for enhanced user experience, ensuring only one section is open at a time.",

        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/vertical-slider/",
        github: "https://github.com/krishnamidathana/vertical-slider",
      },

      {
        id: 21,
        title: "Multi Checklist",
        img: multichecklist,
        description:
          "Enabling one-click generation of multiple checklists with CRUD functionality. Streamlined task management, enhancing efficiency with a user-friendly interface for seamless checklist creation.",
        technologies: "Javascript | Css ",
        link: "https://krishnamidathana.github.io/customizable-checklists/",
        github: "https://github.com/krishnamidathana/customizable-checklists",
      },
    ],
    []
  );

  const htmlProjects = useMemo(
    () => [
      // ... (Your existing HTML projects)
      {
        id: 1,
        title: "Screenshot App",
        img: screenshotapp,
        description:
          "Utilizes html2canvas for seamless screenshot capture of data and images within container tags. Preserves user experience, allowing easy downloads.",
        technologies: "Html | Css ",
        link: "https://krishnamidathana.github.io/screenshot-with-js/",
        github: "https://github.com/krishnamidathana/screenshot-with-js",
      },
      {
        id: 2,
        title: "Flashlight",
        img: flaslightapp,
        description:
          "Crafted a sleek HTML page featuring an elegant flashlight effect, enhancing user experience with dynamic illumination.",
        technologies: "Html | Css ",
        link: "https://krishnamidathana.github.io/flashlight-effect/",
        github: "https://github.com/krishnamidathana/flashlight-effect",
      },
    ],
    []
  );

  useEffect(() => {
    // Combine all project arrays based on the activeTab
    let combinedProjects = [];
    switch (activeTab) {
      case "reactNative":
        combinedProjects = reactNativeProjects;
        break;
      case "reactJs":
        combinedProjects = reactJsProjects;
        break;
      case "javascript":
        combinedProjects = javascriptProjects;
        break;
      case "html":
        combinedProjects = htmlProjects;
        break;
      default:
        combinedProjects = reactJsProjects;
    }

    // Set all projects and initial projects to show
    setAllProjects(combinedProjects);
    setProjectsToShow(6); // Initial number of projects to show
  }, [
    activeTab,
    htmlProjects,
    javascriptProjects,
    reactJsProjects,
    reactNativeProjects,
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoadMore = () => {
    // Increase the number of projects to show
    setProjectsToShow((prev) => prev + 6);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* Tab Navigation */}
      <div className="portfolio__tabs">
        <button
          className={activeTab === "reactNative" ? "active" : ""}
          onClick={() => handleTabChange("reactNative")}
        >
          React Native
        </button>
        <button
          className={activeTab === "reactJs" ? "active" : ""}
          onClick={() => handleTabChange("reactJs")}
        >
          React.js
        </button>
        <button
          className={activeTab === "javascript" ? "active" : ""}
          onClick={() => handleTabChange("javascript")}
        >
          JavaScript
        </button>
        <button
          className={activeTab === "html" ? "active" : ""}
          onClick={() => handleTabChange("html")}
        >
          HTML
        </button>
      </div>

      <div className="container portfolio__container">
        {allProjects.slice(0, projectsToShow).map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p className="portfolio__item-description">{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                {activeTab === "reactNative" ? "App Link" : "GitHub"}
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}

        {projectsToShow < allProjects.length && (
          <div className="portfolio__load-more">
            <button onClick={handleLoadMore}>Load More</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
