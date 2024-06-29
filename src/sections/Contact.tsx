import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin,} from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";

function Contact() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/SfSagr"
    },

    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/sagarxkumar/",
    },
    {
      name: "G-mail",
      icon: <IoIosMail />,
      link: "mailto:sagerkumar200018@gmail.com",
    },
    {
      name: "cv",
      icon: <FaRegNewspaper />,
      link: "https://drive.google.com/file/d/173rS3D6AtjZ2oytIzfXSqkLZaxS6AfPu/view?usp=drivesdk",
    }
  ];
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        &quot;Although actively seeking new opportunities, I&apos;m here to connect. Whether it&apos;s a question, a greeting, or just a chat, my inbox is open. Your messages are valued, and I&apos;ll do my best to respond promptly. Let&apos;s stay connected!&quot;
      </p>
      <div className="contact-cta">
        {/* <Button link="mailto:sagerkumar200018@gmail.com" text="Say hi👋" /> */}
      </div>
      <ul className="link-of-social">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-items">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Contact;
