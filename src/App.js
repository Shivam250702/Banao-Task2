import React, { useEffect, useState } from "react";
import "./App.css";
import img1 from "./images/l1_fh_img.png";
import img2 from "./images/l1_sh_img1.png";
import img3 from "./images/l1_sh_img2.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import l2shimg1 from "./images/l2shimg1.png";
import l2shimg2 from "./images/l2shimg2.png";
import l3shimg1 from "./images/l3shimg1.png";
import l3shimg2 from "./images/l3shimg2.png";
import l4shimg1 from "./images/l4shimg1.png";
import l4shimg2 from "./images/l4shimg2.png";
import l4shimgpizza from "./images/l4shimgpizza.png";
import l4shimgroll from "./images/l4shimgroll.png";
import l4shimgbun from "./images/l4shimgbun.png";
import l5shimg1 from "./images/l5shimg1.png";
import l5shimg2 from "./images/l5shimg2.png";
import l5shimg3 from "./images/l5shimg3.png";
import l5shimg4 from "./images/l5shimg4.png";
import l5shimg5 from "./images/l5shimg5.png";
import l6shimg from "./images/l6shimg.png";
import l7fhimg from "./images/l7fhimg.png";
import l7shimg1 from "./images/l7shimg1.png";
import l7shimg2 from "./images/l7shimg2.png";
import img7 from './images/nasa-mobile-app.png'
import { useMediaQuery } from "react-responsive";
import ReactTextTransition from "react-text-transition";

const App = () => {
  const [f2, setf2] = useState("fhl1");
  const [l2, setl2] = useState("shl1");
  const [sup, setsup] = useState(0);
  const [tdir, settdir] = useState("up");
  const [tptex, settptex] = useState([
    "",
    "25M+ Downloads",
    "on appstore & playstore",
    "ABC 123",
    "We are the best web development",
    "company in the word",
    "",
    "view case study ➡",
    1,
  ]);
  const [intg, setintg] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = window.scrollY;
      if (scrolled < sup) {
        settdir("down");
      } else {
        settdir("up");
      }
      setsup(scrolled);
      if (scrolled <= 362) {
        settptex([
          "",
          "25M+ Downloads",
          "on appstore & playstore",
          "ABC 123",
          "We are the best web development",
          "company in the word",
          "",
          "view case study ➡",
          1,
        ]);
        setf2("fhl1");
        setl2("shl1");
      } else if (scrolled <= 724) {
        settptex([
          "The Next Big",
          "Blockchain",
          "Revolution",
          "ABC 234",
          "We are the best web development ",
          "company in the word ",
          " ",
          "Coming Soon",
          2,
        ]);
        setf2("fhl2");
        setl2("shl2");
      } else if (scrolled <= 1086) {
        settptex([
          "Powered by advance",
          "NASA",
          "algorithms",
          "ABC 345",
          "We are the best",
          "web development company",
          "in the world",
          "Coming Soon ",
          3,
        ]);
        setf2("fhl3");
        setl2("shl3");
      } else if (scrolled <= 1448) {
        settptex([
          "Redefining",
          "UX Strategy",
          "and UI design",
          "ABC 456",
          "We are the best ",
          "web development company ",
          "in the world ",
          "view case study ➡",
          4,
        ]);
        setf2("fhl4");
        setl2("shl4");
      } else if (scrolled <= 1810) {
        settptex([
          "Text Headline",
          "Text Headline",
          "Footer headline",
          "ABC 567",
          "We are the best AR",
          "development company",
          "in the world",
          "view case study ➡ ",
          5,
        ]);
        setf2("fhl5");
        setl2("shl5");
      } else if (scrolled <= 2172) {
        settptex([
          "Developing ERP Solution for",
          "Text Headline ",
          "in furniture industry",
          "ABC 678",
          "Best Since 2017",
          "We offer wide range of",
          "web development and app development.",
          "view case study ➡",
          6,
        ]);
        setf2("fhl6");
        setl2("shl6");
      } else {
        settptex([
          "Biggest Classifieds",
          "East Asia",
          "Countries",
          "ABC 23478",
          "We are the best",
          "web development company",
          "in the world",
          "Coming Soon",
          7,
        ]);
        setf2("fhl7");
        setl2("shl7");
      }
    });
  }, [sup]);
  const breaking_point_desktop = useMediaQuery({ query: "(min-width: 800px)" });
  if (intg) {
    setTimeout(() => {
      setintg(false);
    }, 1000);
  }

  return (
    <>
      {breaking_point_desktop ? (
        <div className="screen">
          {intg && (
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                zIndex: "1",
              }}
            ></div>
          )}
          <div id={f2} className="firsthalf">
            <div
              className="svgpos"
              id={f2}
              style={{
                position: "absolute",
                width: "450px",
                height: "450px",
                borderRadius: "300px",
              }}
            >
              <svg
                version="1.1"
                id="transring"
                xmlns="http://www.w3.org/2000/svg"
                xlinkXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 414 414"
                style={{
                  enableBackground: "new 0 0 414 414",
                  width: "430px",
                  height: "430px",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
                xmlSpace="preserve"
              >
                <path
                  id="Transparent_Ring"
                  class="transrg"
                  style={{
                    opacity: "0.4",
                    fill: "none",
                    stroke: "#FFFFFF",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    enableBackground: "new",
                  }}
                  d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                  c-47.8,0-91-19.4-122.3-50.7"
                ></path>
                <path
                  id="Opaque_Ring"
                  class="transrgwht"
                  className="progress"
                  stroke-dasharray="0,1000"
                  style={{
                    fill: "none",
                    stroke: "rgb(255, 255, 255)",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeDasharray:
                      tptex[8] > 6
                        ? "820, 1500"
                        : tptex[8] > 5
                        ? "680, 1500"
                        : tptex[8] > 4
                        ? "555, 1500"
                        : tptex[8] > 3
                        ? "400, 1500"
                        : tptex[8] > 2
                        ? "260, 1500"
                        : tptex[8] > 1
                        ? "140, 1500"
                        : "10, 1500",
                  }}
                  d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                  c-47.8,0-91-19.4-122.3-50.7"
                ></path>
                <g id="Dots" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill"
                      style={{ fill: "rgb(0, 146, 255)", opacity: "1" }}
                      d="M88.8,75c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S88.1,75,88.8,75z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro"
                      style={{
                        opacity: "1",
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M88.8,75c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S90.9,75,88.2,75z"
                    ></path>
                  </g>
                </g>
                <g id="Dots1" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill1"
                      className={tptex[8] > 1 ? "progressdelay" : "normaldots"}
                      d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro1"
                      className={
                        tptex[8] > 1 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z"
                    ></path>
                  </g>
                </g>
                <g id="Dots2" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill2"
                      className={tptex[8] > 2 ? "progressdelay" : "normaldots"}
                      d="M325.8,75c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S328,75,325.8,75z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro2"
                      className={
                        tptex[8] > 2 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M325.8,75c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S327.9,74,325.9,75z"
                    ></path>
                  </g>
                </g>
                <g id="Dots3" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill3"
                      className={tptex[8] > 3 ? "progressdelay" : "normaldots"}
                      d="M380.8,200c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S385.1,200,380.8,200z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro3"
                      className={
                        tptex[8] > 3 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M380.8,200c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S380.9,199,380.8,200z"
                    ></path>
                  </g>
                </g>
                <g id="Dots4" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill4"
                      className={tptex[8] > 4 ? "progressdelay" : "normaldots"}
                      d="M325.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S328.1,325,325.8,325z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro4"
                      className={
                        tptex[8] > 4 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M325.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S325.1,324,327.8,326z"
                    ></path>
                  </g>
                </g>
                <g id="Dots5" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill5"
                      className={tptex[8] > 5 ? "progressdelay" : "normaldots"}
                      d="M206.8,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,375,206.8,375z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro5"
                      className={
                        tptex[8] > 5 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M206.8,375c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,375,206.8,375z"
                    ></path>
                  </g>
                </g>
                <g id="Dots6" class="dots-nav">
                  <g>
                    <path
                      class="dotsst dotsfill6"
                      className={tptex[8] > 6 ? "progressdelay" : "normaldots"}
                      d="M88.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S88.1,325,88.8,325z"
                    ></path>
                  </g>
                  <g>
                    <path
                      class="dotsstro6"
                      className={
                        tptex[8] > 6 ? "progressdelay2" : "normaldots2"
                      }
                      style={{
                        fill: "none",
                        stroke: "rgb(255, 255, 255)",
                        strokeWidth: "2",
                        strokeMiterlimit: "10",
                      }}
                      d="M88.8,325c-4.3,1-7,3.7-7,7s3.7,7,7,7s7-3.7,7-7S90.1,324,88.9,325z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                width: "auto",
                color: "white",
                marginTop: "27vh",
                right: "-50px",
              }}
            >
              <ReactTextTransition
                style={{
                  fontWeight: "500",
                  fontSize: "22px",
                  whiteSpace: "nowrap",
                }}
                text={tptex[0]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
              <ReactTextTransition
                style={{ fontWeight: "1000", fontSize: "60px" }}
                text={tptex[1]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
              <ReactTextTransition
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  position: "absolute",
                  right: "0px",
                }}
                text={tptex[2]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
            </div>
            <img
              className={tptex[3] === "ABC 123" ? "fadein" : "fadeout"}
              style={{ width: "300px", marginLeft: "10%", marginTop: "50vh" }}
              alt="img"
              src={img1}
            />
            <img
              className={tptex[3] === "ABC 23478" ? "fadein" : "fadeout"}
              style={{ width: "300px", marginLeft: "-40%", marginTop: "50vh" }}
              alt="img"
              src={l7fhimg}
            />
            <div
              style={{
                width: "275px",
                color: "white",
                marginLeft: "10%",
                marginTop: "2vh",
                height: "280px",
              }}
            >
              <ReactTextTransition
                style={{ fontWeight: "1000", fontSize: "60px" }}
                text={tptex[3]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
              <ReactTextTransition
                text={tptex[4]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
              <ReactTextTransition
                text={tptex[5]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
              <ReactTextTransition
                text={tptex[6]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
            </div>
            <div
              style={{
                width: "275px",
                color: "white",
                marginLeft: "10%",
                marginTop: "2vh",
              }}
            >
              <ReactTextTransition
                className="soon"
                text={tptex[7]}
                direction={tdir}
                springConfig={{ stiffness: 50, damping: 20 }}
                noOverflow
              />
            </div>
            <p style={{ marginLeft: "80%", marginTop: "-6vh", color: "white" }}>
              S K I P
            </p>
          </div>
          <div id={l2} className="secondhalf">
            <img
              className={
                tptex[3] === "ABC 123" ? "l1sheffectin" : "l1sheffectout"
              }
              style={{ marginLeft: "100px", position: "absolute" }}
              alt="mobile img 1"
              src={img2}
            />
            <img
              className={
                tptex[3] === "ABC 123" ? "l1sheffectin" : "l1sheffectout"
              }
              style={{ marginLeft: "500px", position: "absolute" }}
              alt="mobile img 2"
              src={img3}
            />
            <img
              className={
                tptex[3] === "ABC 234"
                  ? "l2shimg1effectin"
                  : "l2shimg1effectout"
              }
              style={{ marginLeft: "200px", position: "absolute" }}
              alt="mobile img 1"
              src={l2shimg1}
            />
            <img
              className={
                tptex[3] === "ABC 234"
                  ? "l2shimg2effectin"
                  : "l2shimg2effectout"
              }
              style={{ marginLeft: "700px", position: "absolute" }}
              alt="mobile img 2"
              src={l2shimg2}
            />
            <img
              className={
                tptex[3] === "ABC 345"
                  ? "l3shimg1effectin"
                  : "l3shimg1effectout"
              }
              style={{ marginLeft: "150px", position: "absolute" }}
              alt="mobile img 1"
              src={l3shimg1}
            />
            <img
              className={
                tptex[3] === "ABC 345"
                  ? "l3shimg2effectin"
                  : "l3shimg2effectout"
              }
              style={{ marginLeft: "700px", position: "absolute" }}
              alt="mobile img 2"
              src={l3shimg2}
            />
            <img
              className={
                tptex[3] === "ABC 456"
                  ? "l4shimg1effectin"
                  : "l4shimg1effectout"
              }
              style={{ marginLeft: "100px", position: "absolute" }}
              alt="mobile img 1"
              src={l4shimg1}
            />
            <img
              className={
                tptex[3] === "ABC 456"
                  ? "l4shimg2effectin"
                  : "l4shimg2effectout"
              }
              style={{ marginLeft: "550px", position: "absolute" }}
              alt="mobile img 2"
              src={l4shimg2}
            />
            <img
              className={
                tptex[3] === "ABC 456"
                  ? "l4shimgbuneffectin"
                  : "l4shimgbuneffectout"
              }
              style={{
                right: "80px",
                position: "absolute",
                width: "250px",
                height: "auto",
              }}
              alt="mobile img 3"
              src={l4shimgbun}
            />
            <img
              className={
                tptex[3] === "ABC 456"
                  ? "l4shimgrolleffectin"
                  : "l4shimgrolleffectout"
              }
              style={{
                bottom: "-125px",
                position: "absolute",
                width: "500px",
                height: "auto",
              }}
              alt="mobile img 4"
              src={l4shimgroll}
            />
            <img
              className={
                tptex[3] === "ABC 456"
                  ? "l4shimgpizzaeffectin"
                  : "l4shimgpizzaeffectout"
              }
              style={{
                position: "absolute",
                width: "600px",
                marginTop: "-115px",
              }}
              alt="mobile img 5"
              src={l4shimgpizza}
            />
            <img
              className={
                tptex[3] === "ABC 567"
                  ? "l5shimg1effectin"
                  : "l5shimg1effectout"
              }
              style={{ marginLeft: "150px", position: "absolute" }}
              alt="mobile img 1"
              src={l5shimg1}
            />
            <img
              className={
                tptex[3] === "ABC 567"
                  ? "l5shimg2effectin"
                  : "l5shimg2effectout"
              }
              style={{ marginLeft: "485px", position: "absolute" }}
              alt="mobile img 2"
              src={l5shimg2}
            />
            <img
              className={
                tptex[3] === "ABC 567"
                  ? "l5shimg3effectin"
                  : "l5shimg3effectout"
              }
              style={{ top: "22vh", position: "absolute" }}
              alt="mobile img 3"
              src={l5shimg3}
            />
            <img
              className={
                tptex[3] === "ABC 567"
                  ? "l5shimg4effectin"
                  : "l5shimg4effectout"
              }
              style={{ marginLeft: "485px", position: "absolute" }}
              alt="mobile img 4"
              src={l5shimg4}
            />
            <img
              className={
                tptex[3] === "ABC 567"
                  ? "l5shimg5effectin"
                  : "l5shimg5effectout"
              }
              style={{ marginLeft: "150px", position: "absolute" }}
              alt="mobile img 5"
              src={l5shimg5}
            />
            <img
              className={
                tptex[3] === "ABC 678" ? "l6shimgeffectin" : "l6shimgeffectout"
              }
              style={{ position: "absolute", width: "100%" }}
              alt="mobile img 1"
              src={l6shimg}
            />
            <img
              className={
                tptex[3] === "ABC 23478"
                  ? "l7shimg2effectin"
                  : "l7shimg2effectout"
              }
              style={{ marginLeft: "650px", position: "absolute" }}
              alt="mobile img 1"
              src={l7shimg2}
            />
            <img
              className={
                tptex[3] === "ABC 23478"
                  ? "l7shimg1effectin"
                  : "l7shimg1effectout"
              }
              style={{ marginLeft: "225px", position: "absolute" }}
              alt="mobile img 2"
              src={l7shimg1}
            />
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          <OwlCarousel
            items={1}
            loop
            autoplay
            autoplayTimeout={3000}
            autoplaySpeed={1000}
            dots
          >
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#c8c7cb",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "225px",
                    position: "absolute",
                    left: "-10px",
                    top: "7vh",
                  }}
                  alt="img 1"
                  src={img2}
                />
                <img
                  style={{
                    width: "225px",
                    position: "absolute",
                    right: "-25px",
                    top: "7vh",
                  }}
                  alt="img 2"
                  src={img3}
                />
              </div>
              <div
                style={{
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  backgroundColor: "#6343a2",
                  position: "absolute",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <img
                    style={{
                      marginTop: "-15px",
                      width: "70%",
                      backgroundColor: "white",
                      border: "3px solid #6343a2",
                      borderRadius: "15px",
                    }}
                    alt="img 1"
                    src={img1}
                  />
                  <h1>ABC 123</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <p style={{ fontWeight: "500" }}>view case study ➡</p>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#202462",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "175px",
                    position: "absolute",
                    left: "10px",
                    bottom: "50vh",
                  }}
                  alt="img 1"
                  src={l2shimg1}
                />
                <img
                  style={{
                    width: "175px",
                    position: "absolute",
                    right: "10px",
                    top: "0vh",
                  }}
                  alt="img 2"
                  src={l2shimg2}
                />
              </div>
              <div
                style={{
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  background:
                    "linear-gradient(141deg, rgba(201,74,141,1) 0%, rgba(201,74,141,1) 0%, rgba(80,59,146,1) 100%)",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <h1>ABC 1</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <div style={{ display: "flex" }}>
                    <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
                    <p
                      style={{
                        width: "125px",
                        height: "35px",
                        textAlign: "center",
                        backgroundColor: "#c94a8d",
                        borderRadius: "25px",
                        paddingTop: "15px",
                        fontWeight: "500",
                        marginTop: "1px",
                      }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#15194a",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "200px",
                    position: "absolute",
                    left: "5px",
                    bottom: "-18vh",
                  }}
                  alt="img 1"
                  src={l3shimg1}
                />
                <img
                  style={{
                    width: "165px",
                    position: "absolute",
                    right: "10px",
                    top: "-10vh",
                  }}
                  alt="img 2"
                  src={l3shimg2}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  background: "#0e1138",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <h1>ABC 2</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <div style={{ display: "flex" }}>
                    <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
                    <p
                      style={{
                        width: "125px",
                        height: "35px",
                        textAlign: "center",
                        backgroundColor: "lightgray",
                        color: "black",
                        borderRadius: "25px",
                        paddingTop: "15px",
                        fontWeight: "500",
                        marginTop: "1px",
                      }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#0d121b",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "165px",
                    position: "absolute",
                    left: "30px",
                    bottom: "-10vh",
                  }}
                  alt="img 1"
                  src={l4shimg1}
                />
                <img
                  style={{
                    width: "165px",
                    position: "absolute",
                    right: "10px",
                    top: "-7vh",
                  }}
                  alt="img 2"
                  src={l4shimg2}
                />
                <img
                  style={{
                    width: "165px",
                    position: "absolute",
                    left: "0px",
                    top: "-4vh",
                  }}
                  alt="img 3"
                  src={l4shimgpizza}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  background: "#152339",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <h1>ABC 3</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <p style={{ fontWeight: "500" }}>view case study ➡</p>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#32cfeb",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    left: "5px",
                    top: "-15vh",
                  }}
                  alt="img 1"
                  src={l5shimg1}
                />
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    left: "150px",
                    top: "-2vh",
                  }}
                  alt="img 2"
                  src={l5shimg2}
                />
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    right: "-75px",
                    bottom: "-7vh",
                  }}
                  alt="img 3"
                  src={l5shimg3}
                />
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    left: "150px",
                    bottom: "-31vh",
                  }}
                  alt="img 4"
                  src={l5shimg4}
                />
                <img
                  style={{
                    width: "150px",
                    position: "absolute",
                    left: "5px",
                    bottom: "-18vh",
                  }}
                  alt="img 5"
                  src={l5shimg5}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  background: "#1563e8",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <h1>ABC 4</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <p style={{ fontWeight: "500" }}>view case study ➡</p>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{ position: "absolute", bottom: "0vh" }}
                  alt="img 1"
                  src={l6shimg}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  background: "#0b368f",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <h1>ABC 4</h1>
                  <p>
                    This is sample text for ABC 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <p style={{ fontWeight: "500" }}>view case study ➡</p>
                </div>
              </div>
            </div>
            <div class="item" style={{ width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#4bb76a",
                  width: "100%",
                  height: "50vh",
                }}
              >
                <img
                  style={{
                    width: "275px",
                    zIndex: "1",
                    position: "absolute",
                    left: "0px",
                    top: "6vh",
                  }}
                  alt="img 1"
                  src={l7shimg1}
                />
                <img
                  style={{
                    width: "225px",
                    position: "absolute",
                    right: "0px",
                    top: "10vh",
                  }}
                  alt="img 2"
                  src={l7shimg2}
                />
              </div>
              <div
                style={{
                  zIndex: "2",
                  color: "white",
                  width: "100%",
                  height: "50vh",
                  backgroundColor: "#33834d",
                  position: "absolute",
                }}
              >
                <div style={{ left: "5%", position: "absolute", right: "5%" }}>
                  <img
                    style={{
                      marginTop: "-15px",
                      width: "70%",
                      backgroundColor: "white",
                      border: "3px solid #33834d",
                      borderRadius: "15px",
                    }}
                    alt="img 1"
                    src={l7fhimg}
                  />
                  <h1>XYZ 123</h1>
                  <p>
                    This is sample text for XYZ 123. This is sample text for ABC
                    123.
                  </p>
                  <br />
                  <div style={{ display: "flex" }}>
                    <p style={{ fontWeight: "500" }}>CASE STUDY - &nbsp;</p>
                    <p
                      style={{
                        width: "125px",
                        height: "35px",
                        textAlign: "center",
                        fontWeight: "500",
                        backgroundColor: "lightgray",
                        color: "#33834d",
                        borderRadius: "25px",
                        paddingTop: "15px",
                        marginTop: "1px",
                      }}
                    >
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      )}
    </>
  );
};
export default App;
