import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import about_img from "../img/about-image.jpg";
import manag_photo2 from "../img/team/somnath.jpeg";
import manag_photo1 from "../img/team/shyam.jpeg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import abtHeader from "../img/about-header.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                At Arthsoach, We're here to make your financial journey
                smoother!
              </h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img
                  src={about_img}
                  className="img-fluid"
                  alt="Helping Clients achieve their Vision"
                  title="Helping Clients achieve their Vision"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  {" "}
                  We started Arthasoach in 2005. When we started our company, we
                  knew we would be working together with our mobile carrier
                  clients to help increase their top-line revenue.
                </p>
                <p>
                  {" "}
                  We came up with the name Symbiotic because the definition of a
                  symbiotic relationship is one in which organisms, people, or
                  things exist together in a way that benefits them all. As our
                  stated mission suggest, we exist to benefit our mobile carrier
                  clients by increasing their top line revenue.
                </p>
                <p>
                  {" "}
                  Since then, Symbiotic has seen unprecedented growth and is one
                  of the largest and fastest growing VAS companies in India. We
                  have generated multi-million dollars in revenue for our
                  clients.
                </p>
                <p>
                  {" "}
                  Our determination to help our clients succeed is only one
                  facet of Symbiotic. When we started Symbiotic, we wanted to
                  create a company that not only succeeded financially, we
                  strive to take care of our employees, and to give back to our
                  community. That is why Symbiotic donates a portion of every
                  dollar we earn to make a difference in this world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="vision"
          className="vision aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Vision</h4>
                        <p>
                          To become world's leading telecom company for value
                          added services and create an outstanding value for
                          customers and stake holders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Mission</h4>
                        <p>
                          To anticipate the need of telecom consumers and
                          deliver outstanding products those are value for
                          money.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Our Values</h4>
                        <p>
                          {" "}
                          Our business is driven by our consumer focus,
                          creativity, resourcefulness, and entrepreneurial
                          spirit. We are an inspired diverse team, we respect
                          and value everyone's contribution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="management"
          className="management light-bg aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
              <p>
                Leveraging their vast experience within the Telecom value added
                services industry, Symbiotic's leadership team is dedicated to
                meet and exceed customer expectations with innovative and
                cost-effective solutions, industry know-how and unmatched
                services.
              </p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>CA Shyam Sarda</h4>
                  <span> B.Com, FCA, DISA, DIRM, DipIFRS(UK)</span>
                  <p>
                    Mr. Shyam is a Fellow member of the Institute of Chartered
                    Accountants of India. He is in practice since 2005. He has
                    extensive experience in the field of international taxation,
                    FEMA compliances.
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/cachandrashekharsarda/?originalSubdomain=in">
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
              <div className="col-md-2">
                <div className="pic">
                  <img src={manag_photo2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>SOMNATH SWAMI</h4>
                  <span>M.Com, FCA, CISA, DISA, DIRM</span>
                  <p>
                    Mr. Somnath is a Fellow member of the Institute of Chartered
                    Accountants of India . He is in practice since 2004. He has
                    extensive experience in the field of direct tax, audit,
                    valuation and certification.{" "}
                  </p>

                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/casomnathswami/?originalSubdomain=in">
                      {" "}
                      <i className="bi bi-linkedin" target="_blank"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
