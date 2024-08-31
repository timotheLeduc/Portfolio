import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import hiking from "../../Assets/Projects/hiking.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate human striving to make a <span className="purple">positive impact on the world </span>by enhancing how we interact with each other through technology. I spent <span className="purple">5 months traveling</span> across Southeast Asia, immersing myself in <span className="purple">Muay Thai</span>, motorbike adventures, and surfing. During this journey, I developed an app that <span className="purple">connects travelers with locals</span> based on <span className="purple">shared interests</span>, creating authentic experiences tailored to what you both love doing.
              <br />
              <br />
              Back in college, I created an app to help young people discover <span className="purple">clubs and events</span> in their area, making it easier to <span className="purple">connect with like-minded individuals</span> on campus or nearby. The isolation of the last few years due to COVID made me realize how much our social rhythms have shifted, and I believe my projects have the potential to bring that spark back.
              <br />
              <br />
              I’m now looking for a team that shares the same goals—<span className="purple">humans who want to help other humans</span>—so that we can potentially make this work together.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={hiking} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/timotheleduc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/leductimothe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:Timo0806@outlook.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;