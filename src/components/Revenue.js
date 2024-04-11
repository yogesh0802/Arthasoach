import React from "react";
// import { Link } from 'react-router-dom'

// import dashboard from "../img/revenue-dashboard.png";

// const Revenue = () => {
//   return (
//     <>
//         <section id="features" className="features">
//         <div className="details">
//           <div className="container" data-aos="fade-up" data-aos-delay="300">
//             <div className="row">
//               <div className="col-md-7">
//                 <h4>Drive revenue and optimise your Business</h4>
//                 <p>We have fortified our services with almost two decades of being a VAS major, with our unified experience, coupled with latest product line that interests consumers with their diversified needs of meaningful and engaging content.</p>
//                 <p> Our abreast technology trends and unabating innovation has always enhanced the business impact for our clients resulting in happy faces seeing the revenue graph.</p>
//                 <p> We are always focused on unfolding new revenue streams for our operators with our innovative service line and as well meeting clients specific requirements. </p>
//                 <Link to="/about" className="btn-get-started">Read More</Link>
//               </div>
//               <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
//                 <div className="phone-wrap">
//                   <img src={dashboard} alt="" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Revenue
const Revenue = () => {
  return (
    <section id="revenue" className="revenue">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>How We Help You</h2>
        </div>

        <div className="row gy-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item-r">
              <h3>All-in-One Financial Support</h3>
              <p>
                We believe in taking care of everything - from keeping your
                books straight to helping you plan for taxes, guiding your
                investments, and understanding the stock market. It's like
                having a financial buddy who's got your back.
              </p>
            </div>

            <div className="service-item-r">
              <h3>Friendly Financial Advice</h3>
              <p>
                Our team is made up of experts in money matters. We chat with
                you regularly to share useful tips, let you know about changes
                in money rules, and show you ways to make your money work better
                for you.
              </p>
            </div>

            <div className="service-item-r">
              <h3>Learning Together</h3>
              <p>
                We know money can be confusing. That's why we're on a mission to
                help you understand it better, whether it's about taxes,
                investments, or the stock market. We want you to feel confident
                and in control of your finances.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item-r">
              <h3>Smart Tech to Make Things Easy</h3>
              <p>
                Filing taxes can be a headache. But with our online tools, it
                becomes a breeze. We make sure you're following all the tax
                rules without any stress.
              </p>
            </div>

            <div className="service-item-r">
              <h3>Making Smart Money Moves</h3>
              <p>
                We figure out how much risk you're comfortable with, not just in
                regular investments but also in the stock market. Your
                investments should be like a comfy pair of shoes - just the
                right fit. It's all about making you feel good about your money
                moves.
              </p>
            </div>
            <div className="service-item-r">
              <h3>Your Personal Financial Plan</h3>
              <p>
                Your financial journey is like no one else's. That's why we
                create plans just for you. Your goals, your comfort - it's all
                taken into account. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
