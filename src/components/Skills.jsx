import { motion } from "framer-motion";
import "./Skills.css";
const skills = [
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "HTML5", icon: "🌐", level: "Advanced" },
  { name: "CSS3", icon: "🎨", level: "Advanced" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "SQL", icon: "📊", level: "Advanced" },
  { name: "React.js", icon: "⚛️", level: "Intermediate" },
  { name: "Node.js", icon: "🟢", level: "Intermediate" },
  { name: "Express.js", icon: "🚀", level: "Intermediate" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate" },
  { name: "Git & GitHub", icon: "🐙", level: "Familiar" },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">MY TECHNICAL SKILLS</p>
        <hr />
        <h2>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <br />
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <span className="skill-level">{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;