import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

export default function Hero() {
  return (
    <>
      <section id="hero" className="section section__hero">
        <div className="container">
          <div className="hero">
            <img src={profile_img} alt="" className="hero__img" />
            <h1 className="hero__title">
              <span className="hero__span"> I'm Alex </span>, frontend developer
              based in Ukraine.
            </h1>
            <p className="hero__desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi illo pariatur omnis, quis nostrum possimus explicabo
              temporibus. Soluta sed modi voluptate aliquam, vero exercitationem
              laudantium deserunt atque ab. Nostrum, quae!
            </p>
            <div className="hero__wrapper">
              <button className="hero__button-left">Connect with me</button>
              <button className="hero__button-right">My resume</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
