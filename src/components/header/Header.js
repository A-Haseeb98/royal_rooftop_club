import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Group 1@2x.png";
import pdfFile from "../../assets/pdf/RBC.pdf";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollState, setScrollState] = useState();
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  const scrolls = () => {
    const anchor = document.querySelector("#pt");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToAbout = () => {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToUtility = () => {
    const anchor = document.querySelector("#rd");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToRarity = () => {
    const anchor = document.querySelector("#cl");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToTeam = () => {
    const anchor = document.querySelector("#faq");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollUsage = () => {
    const anchor = document.querySelector("#gh");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollT = () => {
    const anchor = document.querySelector("#tt");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let listener = null;

      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        setScrollState(scrolled);
      });
    });
  }, [scrollState]);
  return (
    <div>
      <div
        className={styles.header}
        style={
          scrollState > 100
            ? { backgroundColor: "#171734ba", boxShadow: "rgb(2 2 2) 0px 0px 7px 1px" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="container">
          <nav className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className={styles.navbar}>
              <ul className={styles.navbarUl}>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/" onClick={scrolls}>
                    Partnership
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToAbout}
                  >
                    About
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToUtility}
                  >
                    Roadmap
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToRarity}
                  >
                    Collections/Mint
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollToTeam}
                  >
                    FAQ
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link
                    className={styles.navbarLink}
                    to="/"
                    onClick={scrollUsage}
                  >
                    Giveaways
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/" onClick={scrollT}>
                    Team
                  </Link>
                </li>
              </ul>
              <ul className={styles.hamUl}>
                <li>
                  <label
                    className={
                      hamburger === "false"
                        ? `${styles.humbergButton}`
                        : `${styles.humbergButton}`
                    }
                    onClick={clickHandler}
                  >
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.topbar}`
                          : `${styles.topbarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.middlebar}`
                          : `${styles.middlebarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.bottombar}`
                          : `${styles.bottombarab}`
                      }
                    ></span>
                  </label>
                </li>
              </ul>
              {hamburger === "true" ? (
                <div className={styles.wrapper}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrolls}
                      >
                        Partnership
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToAbout}
                      >
                        About
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToUtility}
                      >
                        Roadmap
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToRarity}
                      >
                        Collections/Mint
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollToTeam}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollUsage}
                      >
                        Giveaways
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link
                        className={styles.navbarLink}
                        to="/"
                        onClick={scrollT}
                      >
                        Team
                      </Link>
                    </li>
                    {/* <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.twitch.com/ICPNETWORK"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-discord"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.facebook.com/INSANECLOWNPOSSE"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>

                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.instagram.com/therealicp/?hl=en"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ"
                            style={{ color: "#fff" }}
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </li> */}
                    <li style={{ textAlign: "center" }}>
                      <button className={styles.connectWalBtn1}>
                        <a href={pdfFile} target={"_blank"} rel="noreferrer">
                          WHITEPAPER
                        </a>
                      </button>
                      <br />
                      <br />
                      <button className={styles.connectWalBtn2}>
                        CONNECT WALLET
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.wrapperab}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        Partnership
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        About
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        Roadmap
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        Collections/Mint
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        Giveaways
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        Team
                      </Link>
                    </li>
                    {/* <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.twitch.com/ICPNETWORK"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-discord"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.facebook.com/INSANECLOWNPOSSE"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.instagram.com/therealicp/?hl=en"
                            style={{ color: "#fff" }}
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "11px" }}
                        >
                          <a
                            href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ"
                            style={{ color: "#fff" }}
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </li> */}
                    <li style={{ textAlign: "center" }}>
                      <button className={styles.connectWalBtn1}>
                        <a
                          href={pdfFile} target={"_blank"} rel="noreferrer"

                        >
                          WHITEPAPER
                        </a>
                      </button>

                      <br />
                      <br />
                      <button className={styles.connectWalBtn2}>
                        CONNECT WALLET
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.connectWalBtnWrapper}>
              <button className={styles.connectWalBtn1}>
                <a href={pdfFile} target={"_blank"} rel="noreferrer">WHITEPAPER</a>
              </button>
              <button className={styles.connectWalBtn2}>CONNECT WALLET</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
