import React from "react";
import education from "../img/abc.png";
import entertainment from "../img/efg.png";
import games from "../img/klm.png";
import sports from "../img/image 35124.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from "../img/services-header.jpg";

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                Arthasoach is a leading
                <span style={{ color: "#155bd5" }}>
                  {" "}
                  financial company
                </span>{" "}
                specializing in investment management, financial planning, and
                wealth advisory services.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Indirect Taxes </h4>
                  <p className="description">
                    Our wide range of indirect tax services covers a broad
                    spectrum of offerings, including tax advisory, compliance
                    management, tax planning, obtaining export incentives,
                    dispute resolution representation, and litigation support.
                  </p>

                  <p className="description">
                    We provide thorough guidance and consultancy to businesses
                    in navigating complex tax laws such as local tax laws, VAT,
                    customs duty, and GST. With our in-depth knowledge and
                    practical experience in indirect taxation,
                  </p>
                  <p className="description">
                    we provide reliable and practical solutions to complex tax
                    matters.and help businesses optimize their tax liabilities,
                    mitigate risks, and achieve tax efficiency while staying
                    fully compliant with the law. In addition, our experienced
                    lawyers advocate for our clients' interests, working
                    diligently to resolve issues and achieve favorable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi-currency-dollar"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Corporate & International Tax</h4>
                  <p className="description">
                    We offer comprehensive corporate and international taxation
                    services to help businesses navigate the complexities of the
                    domestic & global tax landscape. Our expert team of tax
                    professionals provides strategic guidance and practical
                    solutions tailored to our client's unique needs.
                  </p>
                  <p className="description">
                    We also assist clients in understanding and complying with
                    Base Erosion and Profit Shifting (BEPS) guidelines and
                    General Anti-Avoidance Rules (GAAR) to ensure adherence to
                    international tax standards and mitigate tax risks.Our
                    tailored solutions address income tax, cross-border
                    transactions, permanent establishments, tax treaty
                    interpretation, and more.
                  </p>{" "}
                  <p className="description">
                    We support our clients in tax and regulatory planning,
                    overall tax strategy, tax advisory, litigation support,
                    representations before the tax authorities, compliances and
                    filings.
                  </p>{" "}
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cash" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title"> Funds, REITS & InvITs </h4>
                  <p className="description">
                    We offer comprehensive corporate and international taxation
                    services to help businesses navigate the complexities of the
                    domestic & global tax landscape. Our expert team of tax
                    professionals provides strategic guidance and practical
                    solutions tailored to our client's unique needs.
                  </p>
                  <p className="description">
                    We also assist clients in understanding and complying with
                    Base Erosion and Profit Shifting (BEPS) guidelines and
                    General Anti-Avoidance Rules (GAAR) to ensure adherence to
                    international tax standards and mitigate tax risks.
                  </p>
                  <p className="description">
                    Our tailored solutions address income tax, cross-border
                    transactions, permanent establishments, tax treaty
                    interpretation, and more. We support our clients in tax and
                    regulatory planning, overall tax strategy, tax advisory,
                    litigation support, representations before the tax
                    authorities, compliances and filings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">  Corporate Restructuring </h4>
                  <p className="description">
                  We offer specialized taxation services for Funds, REITs
                  (Real Estate Investment Trusts), and InviTs (Infrastructure
                  Investment Trusts) offer tailored solutions to address the
                  unique tax considerations and complexities faced by these
                  investment vehicles. Our team of tax professionals
                  possesses in-depth knowledge and experience in fund
                  taxation, compliance, and structuring. We provide expert
                  guidance on tax-efficient fund formations, regulatory
                  compliance, tax planning, and reporting.
                  </p> 
                  <p className="description">
                  Additionally, we
                  assist with tax implications related to fund distributions,
                  capital gains, foreign investments, and investor tax
                  considerations. Our services ensure that funds, REITs, and
                  InviTs optimize their tax positions, comply with applicable
                  tax laws, and maximize returns for investors.
                  </p> 
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
