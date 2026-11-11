import { FiMapPin } from "react-icons/fi";
import "./About.css";
function About() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        {/* <p className="eyebrow">GET TO KNOW ME</p> */}
        <h2>About <span className="gradient-text">Me</span></h2><hr />
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>My Introduction</h3>

          <p>
            Hi, I'm a passionate and aspiring Software Developer! 👋
            <br />

Welcome to my portfolio! I am an enthusiastic and motivated developer with a strong interest in web development and software engineering. I enjoy creating interactive, user-friendly, and visually appealing websites while continuously learning new technologies and improving my technical skills.

I have experience working with technologies such as HTML, CSS, and JavaScript,React.js,Node.js,Expressjs,MongoDb and I enjoy turning creative ideas into functional web applications. 
<br />Through projects like StudentHub , Library Management system, Birthday Suprise Websites, I have explored designing engaging user experiences and building interactive web solutions.

I am eager to learn, solve real-world problems, collaborate with others, and contribute to innovative projects while growing as a software developer.
          </p>

          <p>
            As a fresher, I'm focused on strengthening my
            frontend and backend development skills while
            building practical projects.
          </p>

          <br />
          <br />

          <div className="location">
            <FiMapPin /> India
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <strong>04+</strong>
            <span>Personal Projects</span>
          </div>

          <div className="stat-card">
            <strong>08+</strong>
            <span>Technologies</span>
          </div>
          

          <div className="stat-card">
            <strong>100%</strong>
            <span>Learning Mindset</span>
          </div>

          <div className="stat-card">
            <strong>∞</strong>
            <span>Growth Potential</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;