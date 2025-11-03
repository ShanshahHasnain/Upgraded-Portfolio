import React from "react";

function Projects() {
  const projectList = [
    { title: "Weather App", link: "https://github.com/ShanshahHasnain/weather-app" },
    { title: "Ramzan Countdown", link: "https://github.com/ShanshahHasnain/Next-Ramzan-Countdown.git" },
    { title: "Portfolio Website", link: "https://github.com/ShanshahHasnain/My-Portfolio.git" },
    { title: "Islamic Calendar", link: "https://github.com/ShanshahHasnain/Islamic-Calendar-Slider.git" },
    { title: "Calculator App", link: "https://github.com/ShanshahHasnain/Calculator.git" },
    { title: "To-Do App", link: "https://github.com/ShanshahHasnain/To-Do-List.git" },
  ];

  return (
    <section id="projects" className="section projects">
      <h2>My Projects</h2>
      <p className="project-intro">
        Here are some of the projects I’ve worked on — click to explore them on GitHub.
      </p>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
