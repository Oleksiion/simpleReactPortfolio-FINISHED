import "./About.css";
import about_profile from "../../assets/about_profile.svg";

export default function About() {
  return (
    <>
      <section id="about" className="section section__hero">
        <div className="container">
          <div className="about">
            <h2 className="about__title">About me</h2>
            <div className="about__top">
              <img src={about_profile} alt="" className="about__img" />
              <div className="about__top-right">
                <p className="about__desc">
                  I am an experienced Frontend Developer with over a decade of
                  professional expertise in the field. Throughout my career, I
                  have had the privilege of collaborating with prestigious
                  organizations, contributing to their success and growth.
                </p>
                <p className="about__desc">
                  My passion for frontend development is not only reflected in
                  my extensive experience but also in the enthusiasm and
                  dedication I bring to each project.
                </p>
                <div className="about__skills">
                  <div className="skill__item">
                    <p className="skill">HTML & CSS</p>
                    <hr className="h_one" />
                  </div>
                  <div className="skill__item">
                    <p className="skill">React JS</p>
                    <hr className="h_two" />
                  </div>
                  <div className="skill__item">
                    <p className="skill">JavaScript</p>
                    <hr className="h_three" />
                  </div>
                  <div className="skill__item">
                    <p className="skill">Next JS</p>
                    <hr className="h_four" />
                  </div>
                </div>
              </div>
            </div>
            <div className="about__bottom">
              <div className="about__exp">
                <h2 className="about__exp-title">10+</h2>
                <p className="about__exp-p">YEARS OF EXPERIENCE</p>
              </div>
              <div className="about__exp2">
                <h2 className="about__exp-title">90+</h2>
                <p className="about__exp-p">PROJECTS COMPLETED</p>
              </div>
              <div className="about__exp">
                <h2 className="about__exp-title">15+</h2>
                <p className="about__exp-p">HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
