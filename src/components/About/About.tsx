
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src="assets/profile.jpg"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                I'm John Adeniyi, a passionate software developer and entrepreneur 
                dedicated to creating innovative digital solutions. As the founder of Peinjo, 
                I lead a team in developing cutting-edge mobile applications, expert advisors, 
                and system designs. With experience as a full-stack developer at Mzienet Technologies, 
                I specialize in crafting seamless, scalable, and high-performance applications. 
                My expertise spans Python, JavaScript, and MetaQuotes languages, with a keen focus on optimization, 
                security, and user experience.
              </p>
              <p className="about-wrapper__info-text">
                I love to enjoy nature and swim in my free time.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="https://drive.google.com/file/d/104FrYBYuGu3ql_C-TF_bwdQF15eAeiA-/view?usp=drive_link"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
