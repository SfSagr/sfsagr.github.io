import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Sagar,   I&apos;m a Frontend Developer based in India who is passionate about delivering value to businesses through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.
          </p>
       
          <p className="about-grid-info-text">
          I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients.
          </p>
       
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients.
            {/* and exceed their expectations at{" "} */}
            <Link href="#" className="link" target="_blank">
              {/* company_name */}
            </Link>
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
          </ul>
        </div>
        {/* <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Sagar.jpg" alt="profile" fill />
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}

export default About;
