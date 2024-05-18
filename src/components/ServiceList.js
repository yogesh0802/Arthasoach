import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What We Do? </h2>
            <p>
              Arthasoach is a leading financial company specializing in
              investment management, financial planning, and wealth advisory
              services. We help clients achieve their financial goals through
              personalized strategies and expert guidance.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Indirect Taxes{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Our wide range of indirect tax services covers a broad
                    spectrum of oofering, including tax advisory , compliance
                    management , tax planning , obtaining export incentives,
                    dispute resolution representation, and litigation support.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi-currency-dollar"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Corporate & International Tax
                    </Link>
                  </h4>
                  <p className="description">
                    Offer comprehensive corporate and international taxation
                    services to help businesses navigate the complexities of the
                    domestic & global tax landscape. Our expert team of tax
                    professionals provides strategic guidance and practical
                    solutions tailored to our client's unique needs.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cash" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Funds, REITS & InvITs{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    We offer specialized taxation services for Funds, REITS
                    (Real Estate Investment Trusts), and InviTs (Infrastructure
                    Investment Trusts) offer tailored solutions to address the
                    unique tax considerations and complexities faced by these
                    investment vehicles. Our team of tax professionals Anonymous
                    possesses in-depth knowledge and experience in fund
                    taxation, compliance, and structuring.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Corporate Restructuring{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    With a deep understanding of tax regulations and
                    implications, our team provides strategic tax planning and
                    compliance services tailored to your unique restructuring
                    needs. We assist in optimizing tax positions, identifying
                    tax-efficient structures, and managing tax risks during
                    mergers, acquisitions, divestitures, and other corporate
                    restructuring activities.{" "}
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
