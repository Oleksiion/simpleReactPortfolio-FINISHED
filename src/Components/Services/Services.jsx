import "./Services.css";
// import about_profile from "../../assets/about_profile.svg";
import data from "../../assets/services_data";

export default function Services() {
  return (
    <>
      <section id="services" className="section section__services">
        <div className="container">
          <div className="services">
            <h2 className="services__title">My Services</h2>
            <div className="services__grid">
              {data.map((item, index) => {
                return (
                  <div className="services__item" key={index}>
                    <h2 className="services__num">{item.s_no}</h2>
                    <h3 className="services__name">{item.s_name}</h3>
                    <p className="services__desc">{item.s_desc}</p>
                    <button>Read more</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
