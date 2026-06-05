import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>There are no Limits, Only Possibilities.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2026   Jameel Abdulmalek - All Rights Reserved.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Jameel-ezz"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:jameel.abdulmalek@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IoMdMailUnread />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jameel-abdulmalek/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+966507360274"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                < PiPhoneCallFill />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
