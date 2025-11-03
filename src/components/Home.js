import React from "react";
import profileImg from "../assets/Photo.png"; 

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>
            I'm <span>Shanshah Muhammad Hasnain</span>
          </h1>
          <h3>Frontend Developer | Programmer</h3>
          <p>
            I specialize in creating clean, interactive, and fully responsive web
            applications using modern technologies like HTML, CSS, JavaScript,
            and React. I’m passionate about design and development — bringing
            ideas to life on the web.
          </p>

          <div className="home-buttons">
            <a href="/CV.pdf" download className="btn-main">
              Download CV
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
