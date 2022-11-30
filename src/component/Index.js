import React from "react";
// import "@lottiefiles/lottie-player";
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import { Player } from "@lottiefiles/react-lottie-player";
import anim1 from "./assets/anim1.json";
import anim2 from "./assets/anim2.json";
import anim3 from "./assets/anim3.json";
import anim4 from "./assets/anim4.json";
import logo from "./assets/logo.png";
import image1 from "./assets/218 copy.png";
import image2 from "./assets/ctofficial-1280x720@2x.png";
import image3 from "./assets/Mas@2x.png";
import image4 from "./assets/Coincrunch_logo_640_416@2x.png";
import image5 from "./assets/Invest-in-Blockchain-web-logo-copy-4@2x.png";
import image6 from "./assets/Mask@2x.png";
import image7 from "./assets/Group 41717@2x.png";
import image8 from "./assets/pic@2x.png";
import image9 from "./assets/Union 4@2x.png";

import {motion} from 'framer-motion'
import "./Index.css";


const Index = () => {
  const player = React.createRef(); // initialize your ref

  return (
    <div>
      <motion.nav
      initial={{opacity : 0.8}}
      animate={{opacity : 1}}
      transition={{duration:2}}
      whileHover={{scale: 1.1}}
       className="navbar navbar-expand-lg py-4 nav1 nav2 ">
        <div className="container">
          <img src={logo} width={189} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navitems">
              <li className="nav-item dropdown">
                <a
                  className="text-white nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Audit Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="text-white dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="text-white dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="text-white dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="text-white nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="text-white nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-2 navbtn1">
                <button
                  type="button text-white"
                  className="btn btn-outline-light"
                >
                  Portfolio
                </button>
              </li>
              <li className="nav-item mx-2 navbtn2">
                <button
                  type="button text-white"
                  className="btn btn-outline-light"
                >
                  Requst an Audit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      {/* Hero start    */}
      <div
    
       className="container-fluid px-md-5 nav1">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5 m-md-5 px-md-5 my-3 mx-md-5">
            <motion.div 
               initial ={{ opacity: 0.5 , y : 60}}
            animate={{opacity: 1 , y: 0}}
            transition={{ duration: 1 }} 
        
              className="hero-heading">
              Emerging Web3 Ventures Trust Our Smart Contract Audits &amp;
              Diligence Services
            </motion.div>
            <h4 className="my-md-4 my-4 hero-subheading">
              QuillAudits, Making web3 a safer place
            </h4>
            <motion.button
               initial ={{  x : -700}}
            animate={{ x: 0}}
            transition={{   bounce: 0.4}}
            whileHover={{scale: 1.1}}
             className="btn btn-primary btn-lg my-4 hero-btn">
              Request Free Quote
            </motion.button>
         
            <motion.button    initial ={{  x : 7000}}
            animate={{ x: 0}}
            transition={{   bounce: 0.4}} 
            whileHover={{scale: 1.1}}
            className="btn btn-outline-light btn-lg hero-btn2 mx-md-4">
              Explore Services
            </motion.button>
          </div>
          <div className="col-12 col-sm-4 col-lg-5 m-md-5 px-md-5 my-md-3 mx-md-5">
            <Player
              ref={player}
              className=" px-md-5 mx-md-5 animation1"
              src={anim1}
              background="transparent"
              speed={1}
              autoPlay="true"
              loop-playback="true"
              style={{}}
            />
          </div>
        </div>
        {/* <div className="text-white d-flex justify-content-center">contennnnnnnnnnnnnnnnn</div> */}
      </div>
      {/* Partners  */}
      <section className="p-md-4" id="services">
        <div className="container py-md-5 py-5">
          <div className="h5 mx-5 client-text1">Clients</div>
          <div className="h3 my-md-3 mx-5 client-text2">Partners</div>
          <div className="client-text3 pt-4 px-5 d-md-flex justify-content-between align-items-center">
            <h3>Pathfund</h3>
            <h3>Pathfund</h3>
            <h3>Pathfund</h3>
            <h3>Pathfund</h3>
            <h3>Pathfund</h3>
          </div>
        </div>
      </section>
      {/* Animations  */}
      <section className="p-md-3" id="about">
        <div className="container py-md-3 mx-md-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 anim-div">
              <Player
            
                ref={player}
                className="animation2"
                src={anim2}
                background="transparent"
                speed={1}
                autoPlay="true"
                loop-playback="true"
                style={{}}
              />
            </div>
            <motion.div 
              initial ={{x : 600}}
              animate={{x: 0}}
              transition={{duration:1}}
              
             className="col-md-4 mx-md-5">
              <div className="client-text1">SERVICE</div>
              <h2 className="animation-text1">Smart Contract Auditing</h2>
              <div className="animation-text2">
                Our Audit Process for smart contract is based on the
                comprehensive approach we follow to investigate the code for
                security flaws and potential vulnerabilities.
              </div>
              <ul className="mt-md-3" style={{ listStyle: "none" }}>
                <li>Ethereum</li>
                <li>Polygon</li>
                <li>BSC</li>
                <li>Solana</li>
                <li>EOS</li>
              </ul>
              <p />
              <div className="mt-md-3 btn btn-primary animation-btn">
                Explore
              </div>
            </motion.div>
          </div>
          <div className="container py-md-3 mx-md-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-4 mx-md-5">
                <div className="client-text1">SERVICE</div>
                <div className="animation-text1">
                  Blockchain Penetration Testing
                </div>
                <div className="animation-text2">
                  QuillAudits proven strategy to tackle vulnerabilities specific
                  to blockchain technology comes with a mix-blend of
                  conventional pentesting approach and dynamic blockchain
                  analysis.
                </div>
                <motion.div       whileHover={{scale: 1.1}} className="mt-md-3 btn btn-primary animation-btn">
                  Explore
                </motion.div>
              </div>
              <div className="col-md-4 mx-md-5 anim-div">
                <Player
                  className="animation3"
                  ref={player}
                  src={anim3}
                  background="transparent"
                  speed={1}
                  autoPlay="true"
                  loop-playback="true"
                  style={{}}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 anim-div ">
              <Player
                ref={player}
                className=" animation2"
                src={anim4}
                background="transparent"
                speed={1}
                autoPlay="true"
                loop-playback="true"
                style={{}}
              />
            </div>
            <motion.div 
                initial ={{x : 600}}
              animate={{x: 0}}
              transition={{duration:1}}
            className="col-md-4 mx-md-1">
              <div className="client-text1">SERVICE</div>
              <div className="animation-text1">Due Diligence</div>
              <div className="animation-text2">
                QuillAudits acknowledges the significant threats involved in
                smart contracts, which can lead to many critical possibilities.
              </div>
              <ul className="mt-md-3" style={{ listStyle: "none" }}>
                <li>DeFi Due Diligence</li>
                <li>NFT Due Diligence</li>
                <li>Rug Pull Due Diligence</li>
              </ul>
              <p />
              <motion.div       whileHover={{scale: 1.1}} className="mt-md-3 btn btn-primary animation-btn">
                Explore
              </motion.div>
            </motion.div>
          </div>
          {/* security  */}
          <div className="mt-5 text-center secure-text1">THE SECURITY</div>
          <div className="mt-3 text-center secure-text2">
            How We Secure Your Web3 Project
          </div>
          <img
            src="/assets/Group 42280@2x.png"
            className="img-fluid p-md-5 p-5"
            alt=""
          />
        </div>
      </section>
      {/* Portfolio  */}
      <section className="p-md-3 nav1">
        <div className="container text-center py-md-1">
          <div className="py-md-3 py-4 secure-text1">PORTFOLIO</div>
          <div className="py-1 portfolio-text2">Latest Work</div>
        </div>
        <div className="text-center py-md-3">
          <div className="portfolio-btn1 btn btn-primary my-1 mx-5 my-md-3">
            Ethereum
          </div>
          <div className="portfolio-btn2 btn text-white my-1 mx-md-3">
            Binance SC
          </div>
          <div className="portfolio-btn2 btn text-white  my-1 mx-5 mx-md-3">
            NFT
          </div>
          <div className="portfolio-btn2 btn btn-outline text-white my-1 mx-md-3">
            Solana
          </div>
        </div>
        <div className="py-5 py-sm-0">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active d-flex justify-content-evenly">
                <img src={image1} className="d-block w-20" alt="..." />
                <img src={image1} className="d-block w-20" alt="..." />
                <img src={image1} className="d-block w-20" alt="..." />
              </div>
            </div>
            <motion.button       whileHover={{scale: 1.1}}
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </motion.button>
            <motion.button       whileHover={{scale: 1.1}}
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </motion.button>
            <div className="py-4 d-flex justify-content-evenly">
              <div className="h5">
                <div className="text-white">StackOS Audit Report</div>
                <motion.button       whileHover={{scale: 1.1}} type="button" className="btn btn-primary mt-4">
                  View
                </motion.button>
                <motion.button       whileHover={{scale: 1.1}}
                  type="button"
                  style={{ marginLeft: "0.5rem" }}
                  className="btn btn-primary mt-4"
                >
                  Download
                </motion.button>
              </div>
              <div className="h5">
                <div className="text-white">StackOS Audit Report</div>
                <motion.button       whileHover={{scale: 1.1}} type="button" className="btn btn-primary mt-4">
                  View
                </motion.button>
                <motion.button       whileHover={{scale: 1.1}}
                  style={{ marginLeft: "0.5rem" }}
                  type="button"
                  className="btn btn-primary mt-4"
                >
                  Download
                </motion.button>
              </div>
              <div className="h5">
                <div className="text-white">StackOS Audit Report</div>
                <motion.button       whileHover={{scale: 1.1}} type="button" className="btn btn-primary mt-4">
                  View
                </motion.button>
                <motion.button       whileHover={{scale: 1.1}}
                  style={{ marginLeft: "0.5rem" }}
                  type="button"
                  className="btn btn-primary mt-4"
                >
                  Download
                </motion.button>
              </div>
            </div>
          </div>
          <div className="px-5 mx-5 d-md-flex justify-content-center">
            <div className=" btn btn-primary">Button</div>
          </div>
        </div>
      </section>
      {/* why are we  */}
      <section className="p-5 bg-light">
        <div className="container py-3">
          <div className="row d-md-flex justify-content-center align-items-center">
            <div className="col-md text-center">
              <div className="secure-text1">WHY ARE WE HERE</div>
              <h3 className="why-text-1 py-4">
                What is the Need of Smart Contract Audit?
              </h3>
              <div className="btn btn-primary">Talk to an Expert</div>
            </div>
           
          
          </div>
        </div>
        <div className="container text-center py-md-5">
          <div className="secure-text1 py-md-3">MENTIONS</div>
          <div className="h3 py-md-4">As Featured In</div>
          <div className="row text-center p-md-5 my-3 mx-md-5 g-md-4 gy-4">
            <div
              className="card text-light me-box mx-md-4"
              style={{ width: "300px" }}
            >
              <img
                src={image2}
                className="card-img-top"
                height={174}
                width={314}
                alt="..."
              />
              <div className="card-body ">
                <a href="#" className="h5 py-5">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="card text-light mx-md-4 me-box "
              style={{ width: "320px" }}
            >
              <img
                src={image2}
                className="card-img-top"
                height={174}
                width={314}
                alt="..."
              />
              <div className="card-body">
                <motion.a       whileHover={{scale: 1.1}}  href="#" className="h5 py-5">
                  Read More
                </motion.a>
              </div>
            </div>
            <div className="card me-box  text-light" style={{ width: "320px" }}>
              <img
                src={image3}
                className="card-img-top"
                height={174}
                width={314}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="h5 py-5">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="card text-light mx-md-4 me-box "
              style={{ width: "300px" }}
            >
              <img
                src={image4}
                className="card-img-top"
                height={174}
                width={314}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="h5 py-5">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="card text-light mx-md-3 me-box "
              style={{ width: "320px" }}
            >
              <img
                src={image2}
                className="card-img-top"
                height={174}
                width={314}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="h5 py-5">
                  Read More
                </a>
              </div>
            </div>
            <div
              className="card text-light mx-md-3 "
              style={{ width: "320px" }}
            >
              <img
                src={image5}
                className="card-img-top"
                height={154}
                width={314}
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="h5 py-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonals  */}
      <section className="p-md-5" id="services">
        <div className="container py-md-4 p-md-5 text-center text-md-start">
          <div className=" mx-md-5 secure-text1">TESTIMONIALS</div>
          <span className="mx-md-5 py-md-5 secure-text2">
            What our Clients are saying
          </span>
          <span className="float-md-end btn btn-outlined me-md-5 text-center">
            Read More
          </span>
          <div className="row text-center m-3 g-4 p-5 d-md-flex">
            <div
              className="card text-center col-md mx-md-3"
              style={{ width: "18rem" }}
            >
              <div className="card-body cc">
                <h5 className="card-title">
                  Stack<strong>OS</strong>
                </h5>
                <div className="card-text textimonal-text1">
                  Very professional and timed delivery. Also very prompt in
                  responses and queries.
                </div>
                <div className="card-text h5">Vishnu Korde</div>
                <div className="card-text h6">CEO, StackOS</div>
              </div>
            </div>
            <div
              className="card text-center col-md mx-md-3 cc"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">StackOS</h5>
                <div className="card-text textimonal-text1">
                  Very professional and timed delivery. Also very prompt in
                  responses and queries.
                </div>
                <div className="card-text h5">Vishnu Korde</div>
                <div className="card-text h6">CEO, StackOS</div>
              </div>
            </div>
            <div
              className="card text-center col-md mx-md-3 cc"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">StackOS</h5>
                <div className="card-text textimonal-text1">
                  Very professional and timed delivery. Also very prompt in
                  responses and queries.
                </div>
                <div className="card-text h5">Vishnu Korde</div>
                <div className="card-text h6">CEO, StackOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ  */}
      <section className="p-5">
        <div className="container p-5 py-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-md">
              <div className="client-text1">FAQ</div>
              <div className="faq1 py-2">Frequently Asked Questions</div>
              <div className="faq2 py-3">
                Visit our help center to clear out any second thoughts that you
                may have regarding our services.
              </div>
              <div className="btn btn-primary my-4">Contact Us</div>
            </div>
            <div className="col-md cc2">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is smart contract security?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body faq2">
                      Smart Contract Security is a set of best practices to
                      identify bugs &amp; vulnerabilities in the code that can
                      lead to security breaches. These loopholes have lead to
                      huge financial losses recently.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are smart contracts vulnerable?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body faq2"></div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is a smart contract audit?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body faq2">
                      he transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Why do smart contracts fail?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog */}
      <section className="p-md-5 mx-md-5" id="services">
        <div className="container my-md-5 py-md-4 p-md-5 mx-md-5">
          <div className="blog-text1 mx-5">OUR BLOG</div>
          <span className="blog-text2 mx-md-5">Catch up on the news</span>
          <div className="float-md-end btn  me-md-5">Read More</div>
          <div className="row ms-md-4 g-md-4">
            <motion.div       whileHover={{scale: 1.1}} className="col-md my-md-5">
              <div className="card text-light" style={{ width: "300px" }}>
                <img src={image6} className="card-img-top" alt="..." />
                <div className="card-body text-black">
                  <div className="blog-text3">
                    Web3 Security: Classification &amp; Analysis of Web3 Hacks
                  </div>
                  <div className="blog-text4 mt-5 mb-3">15 Mar, 2023</div>
                  <div className="blog-text4">
                    At every point in time, the internet keeps changing
                    dimensions to solve the shortcoming of the previous version.
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div       whileHover={{scale: 1.1}} className="col-md my-md-5">
              <div className="card text-light" style={{ width: "300px" }}>
                <img src={image6} className="card-img-top" alt="..." />
                <div className="card-body text-black">
                  <div className="blog-text3">
                    Web3 Security: Classification &amp; Analysis of Web3 Hacks
                  </div>
                  <div className="blog-text4 mt-5 mb-3">15 Mar, 2023</div>
                  <div className="blog-text4">
                    At every point in time, the internet keeps changing
                    dimensions to solve the shortcoming of the previous version.
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div       whileHover={{scale: 1.1}} className="col-md my-md-5">
              <div className="card text-light" style={{ width: "300px" }}>
                <img src={image6} className="card-img-top" alt="..." />
                <div className="card-body text-black">
                  <div className="blog-text3">
                    Web3 Security: Classification &amp; Analysis of Web3 Hacks
                  </div>
                  <div className="blog-text4 mt-5 mb-3">15 Mar, 2023</div>
                  <div className="blog-text4">
                    At every point in time, the internet keeps changing
                    dimensions to solve the shortcoming of the previous version.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* hashingBits  */}
      <section
        className="p-5 text-white"
        style={{ backgroundColor: "#15306f", opacity: "80%" }}
      >
        <div cl>
          <div className="row justify-content-evenly align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="hashlogo" src={image7} width="250px" alt="" />
              <div className="hash1 my-4">
                DeFi &amp; NFT Hacks, CTFs, and Blockchain Security Insights
                Straight to your Inbox.
              </div>
              <div className="hash1 my-4">
                Explore our weekly newsletter: HashingBits. Stay updated on
                everything we’re publishing. Stand a step ahead.
              </div>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="youremail@gmail.com"
                aria-describedby="emailHelp"
              />
              <div className="hash1 mt-5" style={{ fontSize: "16px" }}>
                Your email has been successfully registered, headlines will be
                sent to you soon.
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 my-5 mx-3">
              <img
                src={image9}
                width={270}
                height={234}
                alt=""
                className="float-end"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="p-5 my-5 mx-md-5 text-light hero2">
        <div className="conatainer py-5 d-md-flex justify-content-between">
          <div className="p-md-5">
            <div className="join-text1">
              Join Hands With us to secure Web3 Together
            </div>
            <div className="mt-3 join-text2">
              Help us in our journey to secure web3 by joining our team of
              talented individuals spread across the globe.
            </div>
            <div className="my-5 btn btn-primary join-btn">Apply Now</div>
          </div>
          <img src={image8} className="hero-image2" alt="" />
        </div>
      </div>
      {/* footer  */}
      <motion.footer       whileHover={{scale: 1.1}} className="text-center text-white bg-dark text-lg-start text-muted">
        <section>
          <div className="container text-center text-md-start mt-5 footer-text">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 my-5">
                <h4 className="mb-3">Parent Company</h4>
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="/assets/Final Vertical White 2@2x.png"
                    width={184}
                    height={42}
                    alt=""
                  />
                  <i className="fas fa-gem me-3 text-secondary" />
                </h6>
                <p>
                  Quillhash delivers enterprise grade blockchain technology to
                  leading companies worldwide.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 my-5">
                <h6 className="text-uppercase fw-bold mb-4">Explore</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Courses
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blockchain Security CTF
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    QuillAudits Partner Program
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Referral Program
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 my-5">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Smart Contract Auditing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blockchain Pen Testing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Due Diligence
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 my-5">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near
                  Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" />
                  contact@quillaudits.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center footer-text">
          Join our Journey
          <div className="my-2 mx-4">
            <img src="/assets/Group 5.svg" height={47} width={44} alt="" />
            <img
              className="mx-1.5"
              src="/assets/Group 10.svg"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 28.svg"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 13.svg"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 41321@2x.png"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 41763@2x.png"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 41764@2x.png"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 41765.svg"
              height={47}
              width={44}
              alt=""
            />
            <img
              className="mx-1.5"
              src="/assets/Group 18.svg"
              height={47}
              width={44}
              alt=""
            />
          </div>
          <motion.div       whileHover={{scale: 1.1}} className=" mt-4">
            All Rights Reserved. © Copyright 2022. QuillHash Technologies
            Private Limited
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
