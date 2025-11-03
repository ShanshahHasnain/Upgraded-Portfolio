import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills & Education</h2>
      <div className="skills-section">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-box">
            <video src="../videos/html.mp4" autoPlay loop muted />
            <p>HTML 5</p>
          </div>
          <div className="skill-box">
            <video src="../videos/css.mp4" autoPlay loop muted />
            <p>CSS 3</p>
          </div>
          <div className="skill-box">
            <video src="../videos/js.mp4" autoPlay loop muted />
            <p>JavaScript</p>
          </div>
          <div className="skill-box">
            <video src="../videos/c.mp4" autoPlay loop muted />
            <p>C</p>
          </div>
          <div className="skill-box">
            <video src="../videos/cpp.mp4" autoPlay loop muted />
            <p>C++</p>
          </div>
          <div className="skill-box">
            <video src="../videos/py.mp4" autoPlay loop muted />
            <p>Python</p>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h3>Frameworks & Libraries</h3>
        <div className="skills-grid">
          <div className="skill-box">
            <video src="../videos/react.mp4" autoPlay loop muted />
            <p>React</p>
          </div>
          <div className="skill-box">
            <video src="../videos/node.mp4" autoPlay loop muted />
            <p>Node.js</p>
          </div>
          <div className="skill-box">
            <img src="/videos/express-js.png" alt="Express.js" />
            <p>Express.js</p>
          </div>
          <div className="skill-box">
            <img src="/videos/mongodb.png" alt="mongodb" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
      <div className="education-section">
        <h3>Education</h3>
        <ul>
          <li>Completed 9th grade in 2022 with 73.45%</li>
          <li>Passed 10th grade in 2023 with 75.68%</li>
          <li>Completed 1st Year in 2024 with 66%</li>
          <li>Passed 12th grade in 2025 with 66.18%</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
