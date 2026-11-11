import { FiGithub, FiCode, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Birthday Surprise Website",
    category: "Frontend Development",
    description:
      "A creative and interactive birthday surprise website developed to make birthday celebrations more special and memorable. The website features personalized birthday wishes, attractive designs, animations, and interactive elements to create a delightful user experience. This project demonstrates my frontend development skills and creativity in building engaging web applications.",
    technologies: ["React", "Vite", "CSS", "JavaScript"],
    github: "https://github.com/panemkarthik0925-blip/suprise",
  },
  
  {
    number: "02",
    title: "StudentHub",
    category: "Full Stack Development",
    description:
      "Developed and deployed a full-stack student management application with admin login and complete CRUD functionality. Integrated MongoDB for persistent data storage and connected the React frontend with a Node.js and Express.js backend.",
    technologies: ["MongoDB","Express", "React", "Node.js","Vite"],
    github: "https://panemkarthik0925-blip.github.io/StudentHub/",
  },
  {
    number: "03",
    title: "Library Management Sysytem",
    category: "Full Stack Development",
    description:
      "Developed a Library Management System to manage and organize library books and records.Implemented book management features, including adding, updating, deleting, and searching for books.Designed functionality to track book issuing and returning.Created a simple, user-friendly interface for efficient library management.Improved the organization and accessibility of library records.",
    technologies: ["React.js","HTML", "CSS", "JavaScript","Vite","JSON"],
    github: "https://panemkarthik0925-blip.github.io/library_management/",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h2>
          <hr />
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>
      <br />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              {/* <FiCode className="project-icon" /> */}
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech) => (
                
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <br />

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FiGithub /> GitHub <FiArrowUpRight />
              </a>
            ) : (
              <span className="coming-soon">Coming soon</span>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;