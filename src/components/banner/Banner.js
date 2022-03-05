import React from "react";
import styles from "./banner.module.css";
import bannerVid from "../../assets/images/Sequence 01_1.mp4";
import { Link } from "react-router-dom";
const Banner = () => {
  const scrollToAbout = () => {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={styles.banner} id="pt">
      <div className={styles.bannerVid}>
        <video autoPlay muted>
          <source src={bannerVid} type="video/mp4" />
        </video>
        <div className={styles.bannerContent}>
          <h1 className={styles.fontMaxwell}>ROYAL ROOFTOP CLUB</h1>
          <p>
            Royal Rooftop Club is a private members-only club consisting of
            innovative technologists, bringing exclusive NFTs and metaverse
            projects that’s ever been witnessed in Dubai to interested investors
            worldwide.
          </p>
          <div className={styles.arrowDown}>
          
<Link
                        to="/"
                        onClick={scrollToAbout}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
</svg>
                      </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
