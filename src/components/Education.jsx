import "./Education.css"
function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <p className="eyebrow">MY BACKGROUND</p>
        <hr />

        <h2>
          Education & <span className="gradient-text">Journey</span>
        </h2>
        <br />
      </div>

      <div className="education-card">
        <p className="project-category">EDUCATION</p>

        <h3>B.Tech / Computer Science And Engineering</h3>

        <p>
          Siddharth Institute Of Engineering & Technology, JNTU, 2025.
        </p>

        <span className="education-tag">
          Bachelor's Degree
        </span>
         <h3>Intermediate / MPC</h3>

        <p>
          Gowtham Junior College, AP, 2021.
        </p>

        <span className="education-tag">
          XII
        </span>
         <h3>SSC</h3>

        <p>
          Sai Chaitanya E.M High School, AP, 2019.
        </p>

        <span className="education-tag">
          X
        </span>
      </div>
    </section>
  );
}

export default Education;