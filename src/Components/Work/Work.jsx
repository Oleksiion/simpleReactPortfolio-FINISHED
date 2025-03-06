import "./Work.css";
import mywork_data from "../../assets/mywork_data";

export default function Work() {
  return (
    <>
      <section id="work" className="section section__work">
        <div className="container">
          <div className="work">
            <h2 className="work__title">My Services</h2>
            <div className="work__grid">
              {mywork_data.map((item, index) => {
                return (
                  <div className="work__item" key={index}>
                    <img src={item.w_img} alt="" className="work__img" />
                  </div>
                );
              })}
            </div>
            <button>Read more</button>
          </div>
        </div>
      </section>
    </>
  );
}
