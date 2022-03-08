import React, { useEffect } from "react";
import styles from "./giveawayAndfaq.module.css";
import oculus from "../../assets/images/oculus giveaway.png";
import gWagon from "../../assets/images/g wagon 3of3 (1).mp4";
import tDubai from "../../assets/images/trip to dubai.mp4";



import './Move.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Accordion from "react-bootstrap/Accordion";


const GiveawayAndfaq = () => {
  const options = {
    items: 3,
    nav: true,
    navText: [`<div class='nav-button owl-prev'><svg xmlns="http://www.w3.org/2000/svg" class="gg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
  </svg></div>`, `<div class='nav-button owl-next'><svg xmlns="http://www.w3.org/2000/svg" class="gg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
  </svg ></div > `],
    autoplay: true,
    loop: true,
    dots: false,
    dotsEach: false,
    dotData: false,
    margin: 10,
    center: true
  };

  

  return (
    <>

      <div className={styles.giveawayAndfaq} id="gh">
        <div className={styles.giveaway}>
          <div className="container">
            <div className={styles.giveawayInner}>
              <h2>ROYAL ROOFTOP CLUB NFTS <br /> AND METAVERSE PROJECT</h2>
              <p>
                Artists and individuals that hold our NFTs are permitted to submit
                their NFTs project idea to our team for deliberation; music
                artists can hold musical concerts in our rooftop clubs while
                selling their tickets as NFTs to other Royal rooftop private club
                members. In addition, with the world’s first double rarity NFTs
                ranking you will be granted access to a wide array of utilities in
                our metaverse such as; attending a musical concert, parties in any
                of our rooftop clubs, participating in a car auction, access to
                buy penthouses in our skyscrapers, and various benefits that will
                be announced in the future. Your portal to the metaverse is here.
                As an NFT holder, your utility awaits.
              </p>
              <h2>GIVING BACK TO THE COMMUNITY</h2>
              <p>
                Part of our mission is to connect and help those in need that are
                going through a struggle. To support this, we are pledging 100
                percent of our auctions to NOOR DUBAI FOUNDATION & INTERNATIONAL
                ANIMAL RESCUE, with full transparency.
              </p>
              <h2>GIVING BACK TO THE MEMBERS</h2>
              <p>
                Supporting the entrepreneurial spirit is our best chance for
                economic progress. Therefore, 3 major giveaways below, are being
                pledged to our members post mint cycle with full transparancy.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq} >
          <div className="container">



            <div className={styles.faqInner}>

              <OwlCarousel className='owl-theme owl-carousel' {...options}>
                <div class='item'>
                  <img src={oculus} alt="" className={styles.img} />
                </div>
                <div class='item'>
                  <video autoPlay muted className={styles.img1}>
                    <source src={gWagon} type="video/mp4" />
                  </video>
                </div>
                <div class='item'>
                  <video autoPlay muted className={styles.img1}>
                    <source src={tDubai} type="video/mp4" />
                  </video>
                </div>
                <div class='item'>
                  <img src={oculus} alt="" className={styles.img} />
                </div>
                <div class='item'>
                  <video autoPlay muted className={styles.img1}>
                    <source src={gWagon} type="video/mp4" />
                  </video>
                </div>
                <div class='item'>
                  <video autoPlay muted className={styles.img1}>
                    <source src={tDubai} type="video/mp4" />
                  </video>
                </div>
              </OwlCarousel>

            </div>


            <div id="faq" className={styles.faqAccordian}>
              <h2 className={styles.faqHeader}>FAQ</h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I ask for help?</Accordion.Header>
                  <Accordion.Body>
                    Discord help Open Ticket
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How many Dubai Rich NFTs are there?

                  </Accordion.Header>
                  <Accordion.Body>
                    2775 NFT's are there and 10 will be held back from sale

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What is the mint price?
                  </Accordion.Header>
                  <Accordion.Body>
                    Whitelisted price: TBA
                    <br />
                    Public price: TBA
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Where can i buy a Dubai Rich NFT?
                  </Accordion.Header>
                  <Accordion.Body>
                    You will be able to mint a Dubai Rich NFT on our website when minting goes live. Using the link http://royalrooftopclub.com
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Why should i join the Dubai Rich Club whitelist?
                  </Accordion.Header>
                  <Accordion.Body>
                    Getting on the whitelist will give you the possibility to
                    mint up to (2) Dubai rich NFT's before the public mint. In addition, you
                    will be paying lower mint fees if you are whitelisted as compared to
                    public minting
                    s</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    How do i get whitelisted for early access?
                  </Accordion.Header>
                  <Accordion.Body>
                    Whitelist spots will be given away in the discord, followed by some stipulated conditions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>

                    How do i enter the giveaways?

                  </Accordion.Header>
                  <Accordion.Body>
                    Potential holders who will be minting from our collection will be directed via Discord to submit their wallet address(s) prior to mint. A snapshot of original holders will be archived after mint. collectors must hold and not sell if they want to participate in all 3 major Giveaways.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How do i know i won a giveaway?

                  </Accordion.Header>
                  <Accordion.Body>
                    Giveaways will be held in a Live format for transparency reasons. All Holders will be notified to tune in live for each giveaway.
                    <br />
                    <br />
                    Winners will go through a verification process using their wallet address(s) submitted via Discord and snapshot followed by item activity check on Open Open Sea.
                    <br />
                    <br />
                    Winners will then be contacted via discord to finalize details. NFT's of the winners will also be uniquely displayed on our website.
                    <br />
                    (NOTE) Each wallet address can only win 1 Giveaway.
                  </Accordion.Body>
                </Accordion.Item>


              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveawayAndfaq;
