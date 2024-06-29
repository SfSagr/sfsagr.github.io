import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Expense-tracker",
      projectLink: "https://sfsagr.github.io/expense-tacker/",
      projectDescription:
        "Developed and deployed a user-friendly expense tracker web application using React.js. Implemented features for expense tracking, budget management, and data visualization. Ensured data security through encryption and secure authentication protocols.",
      projectTech: ["React", "Redux Toolkit", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/SfSagr/expense-tacker",
        externalLink: "https://sfsagr.github.io/expense-tacker/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Speech-To-Text",
      projectLink: "https://sfsagr.github.io/Speech-To-Text/",
      projectDescription:
        "Built with React.js, our Speech-to-Text Converter seamlessly transforms spoken words into written text. Harnessing cutting-edge web technologies, this tool offers real-time transcription with accuracy and efficiency, empowering users to effortlessly convert verbal communication into digital text.",
      projectTech: ["React", "Redux Toolkit", "CSS"],
      projectExternalLinks: {
        github: "https://github.com/SfSagr/Speech-To-Text",
        externalLink: "https://sfsagr.github.io/Speech-To-Text/",
      },
    },
    {
      image: "/project3.png",
      projectName: "Temprature-converter",
      projectLink: "https://sfsagr.github.io/temprature-converter/",
      projectDescription:
        "The Temperature Converter web app is a simple, user-friendly application designed to convert temperatures between Celsius, Fahrenheit, and Kelvin. It provides an intuitive interface where users can input a temperature in one unit and instantly see the converted values in the other units.",
      projectTech: ["Html", "CSS", "JavaScript"],
      projectExternalLinks: {
        github: "https://github.com/SfSagr/temprature-converter",
        externalLink: "https://sfsagr.github.io/temprature-converter/",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">
                    <Link href={projectLink} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        {projectName}
                      </a>
                    </Link>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link href={projectExternalLinks.github} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          <FiGithub />
                        </a>
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link href={projectExternalLinks.externalLink} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          <FiExternalLink />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
