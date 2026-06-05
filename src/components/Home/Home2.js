import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

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
              I am a <b className="purple">Project Engineer</b> with a Computer
              Engineering background, working in the field of IT infrastructure,
              networking, cybersecurity, and low-current systems.
              <br />
              <br />
              I currently work in a role that combines both{" "}
              <i>
                <b className="purple">technical engineering</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">business development</b>
              </i>
              , where I handle project delivery, client requirements, and solution
              design.
              <br />
              <br />
              My main areas of interest include{" "}
              <b className="purple">networking, cybersecurity, and IT systems design</b>.
              I enjoy working on real-world infrastructure projects and delivering
              reliable solutions for clients.
              <br />
              <br />
              I am continuously improving my skills in engineering, project
              management, and enterprise IT solutions while working with a variety
              of technologies and vendors.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/Jameel-ezz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:Jameel.abdulmalek@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <IoMdMailUnread />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jameel-abdulmalek/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+966507360274"
                  className="icon-colour home-social-icons"
                >
                  <PiPhoneCallFill />
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