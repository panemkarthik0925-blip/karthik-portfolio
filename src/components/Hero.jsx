import { motion } from "framer-motion";
import "./Hero.css";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero section" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Karthik
          <br />
          <span className="gradient-text">
            Software Developer
          </span>
        </h1>

        <p className="hero-description">
          I am a dedicated and enthusiastic learner who enjoys exploring technology and developing practical projects. I believe in continuous learning, improving my problem-solving abilities, and staying updated with modern development tools. My goal is to build meaningful software solutions and grow into a skilled professional in the technology industry.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <FiArrowUpRight />
          </a>

          <a href="/Panem_Karthik_Resume.pdf" download className="secondary-btn">
            Download Resume <FiDownload />
          </a>
        </div>

        
<div className="social-links">
  <a
    href="https://github.com/panemkarthik0925-blip/"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FiGithub />
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FiLinkedin />
  </a>

  <a
    href="mailto:panemkarthik0925@gmail.com"
    aria-label="Email"
  >
    <FiMail />
  </a>
</div>

      </motion.div>

      <div className="hero-image-wrapper">
        <div className="profile-frame">
          <img src="/profile.jpg" alt="Karthik" />
        </div>
      </div>
    </section>
  );
}

export default Hero;