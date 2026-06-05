import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiNodejs,
} from "react-icons/di";

import {
  SiHtml5,
  SiCss3,
  SiLinux,
  SiDocker,
  SiGithub,
  SiCisco,
} from "react-icons/si";

import { FaNetworkWired, FaServer } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <SiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Networking">
        <FaNetworkWired />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Cisco Networking">
        <SiCisco />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Linux Systems">
        <SiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Servers / Infrastructure">
        <FaServer />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Docker (Containers)">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="GitHub (Version Control)">
        <SiGithub />
      </Col>

    </Row>
  );
}

export default Techstack;