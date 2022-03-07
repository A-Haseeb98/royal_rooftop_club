import React from "react";
import styles from "./team.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import teamTwo from '../../assets/images/team/george.png';
import teamThree from '../../assets/images/team/Mohamed.png';
import teamOne from '../../assets/images/team/Rome E.png';
import teamFour from '../../assets/images/team/SPPR.png';
const Team = () => {
  return (
    <>
      <div className={styles.team} id="tt">
        <div className="container">
          <h2>TEAM</h2>
          <p>
            The Royal rooftop private club team includes; experts on blockchain
            projects, developers with avid experience in NFTs and Metaverse,
            Graphic designers, NFTs analysts, and various types of expertise
            needed for the success of our projects.
          </p>
        </div>
      </div>
      <section className={styles.teamSection}>
        <Container>
          <Row>

            <Col md={3}>
              <div className={styles.teamImages}>
                <img src={teamOne} alt='team' />
                <div className={styles.footerIconContainer} >
                  <a target={'_blank'} href="https://www.instagram.com/shaytooonn/"
                    className={styles.footerIcon}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.teamImages}>
                <img src={teamTwo} alt='team' />
                <div className={styles.footerIconContainer} >

                  <a target={'_blank'} href="https://www.instagram.com/ramsengeorge/"
                    className={styles.footerIcon}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.teamImages}>
                <img src={teamThree} alt='team' />
                <div className={styles.footerIconContainer} >
                  <a target={'_blank'} href="https://www.instagram.com/strategicshah/"
                    className={styles.footerIcon}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.teamImages}>
                <img src={teamFour} alt='team' />
                <div className={styles.footerIconContainer} >
                  <a
                  target={'_blank'}
                    href="https://twitter.com/SPPR_BLOCKCHAIN"
                    className={styles.footerIcon}>
                    <i className="fab fa-twitter">
                    </i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
