import logo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <>
      <section className="section section__header">
        <div className="container">
          <header className="header">
            <img src={logo} alt="" className="header__logo" />
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <a href="#hero" className="header__link">
                    Home
                  </a>
                </li>
                <li className="header__item">
                  <a href="#about" className="header__link">
                    About me
                  </a>
                </li>
                <li className="header__item">
                  <a href="#services" className="header__link">
                    Services
                  </a>
                </li>
                <li className="header__item">
                  <a href="#work" className="header__link">
                    Portfolio
                  </a>
                </li>
                <li className="header__item">
                  <a href="#footer" className="header__link">
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
            <button className="header__button">GO</button>
          </header>
        </div>
      </section>
    </>
  );
}
