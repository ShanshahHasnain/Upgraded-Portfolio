import React, { useEffect, useState } from "react";// we'll style this in a separate file

function About() {
  // Array of image URLs — replace with your real photo paths
  const images = [
    process.env.PUBLIC_URL + "/images/photo1.png",
    process.env.PUBLIC_URL + "/images/photo2.png",
    process.env.PUBLIC_URL + "/images/photo3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Left side text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer from Pakistan, learning and building projects
            using modern web technologies. I enjoy creating websites that are both
            functional and visually appealing.
          </p>
        </div>

        {/* Right side image slider */}
        <div className="about-image">
          <img src={images[currentImage]} alt="Profile" className="slider-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
