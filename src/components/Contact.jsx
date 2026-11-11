import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.css"

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">LET'S CONNECT</p><hr />
        <h2>
          Have a project in <span className="gradient-text">Mind?</span>
        </h2>
      </div>

      <p className="section-description">
        I'm interested in entry-level software development
        opportunities and collaborations. Let's connect!
      </p>
      <br />

      <a
        href="mailto:panemkarthik0925@gmail"
        className="primary-btn"
      >
        Get In Touch <FiMail />
      </a>
      <br />
      <br />

      <div className="contact-socials">
        <a href="https://github.com/panemkarthik0925-blip/" target="_blank" rel="noreferrer">
           GitHub <FiGithub />
        </a>
        <br /><br />
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
           LinkedIn <FiLinkedin/>
        </a>
      </div>
    </section>
  );
}

export default Contact;