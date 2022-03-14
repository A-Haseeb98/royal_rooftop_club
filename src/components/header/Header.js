import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Group 1@2x.png";
import pdfFile from "../../assets/pdf/pdf.pdf";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
                  <HashLink to='/#pt'>
                    Partnership
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#about'>
                    About
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#cl'>
                    Collections/Mint
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#rd'>
                    Roadmap
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#gh'>
                    Giveaways
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#faq'>
                    FAQ
                  </HashLink>
                </li>
                <li className={styles.navbarItems}>
                  <HashLink to='/#tt'>
                    Team
                  </HashLink>
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
                    <li className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <HashLink to='/#pt'>
                        Partnership
                      </HashLink>
                    </li>
                    <li
                      className={styles.navbarItemsAg}
                    >
                      <HashLink to='/#about'>
                        About
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#cl'>
                        Collections/Mint
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#rd'>
                        Roadmap
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#gh'>
                        Giveaways
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#faq'>
                        FAQ
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#tt'>
                        Team
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#pt'>
                        Partnership
                      </HashLink>
                    </li>
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
                      <HashLink to='/#pt'>
                        Partnership
                      </HashLink>
                    </li>

                    <li
                      className={styles.navbarItemsAg}
                    >
                      <HashLink to='/#about'>
                        About
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#cl'>
                        Collections/Mint
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#rd'>
                        Roadmap
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>

                      <HashLink to='/#gh'>
                        Giveaways
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#faq'>
                        FAQ
                      </HashLink>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <HashLink to='/#tt'>
                        Team
                      </HashLink>
                    </li>

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
