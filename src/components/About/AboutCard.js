import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jameel Abdulmalek </span>
            from <span className="purple"> Palestine, Jaffa.</span>
            <br />
            I am a <span className="purple">Project Engineer</span> with a
            background in Computer Engineering and hands-on experience in IT
            infrastructure, networking, cybersecurity, and low-current systems.
            <br />
            Currently, I work at Hi Tech IT Services Company, where I manage
            technical projects, prepare solutions and proposals, support business
            development activities, and work closely with clients to deliver
            reliable IT and security solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness & Gym Training
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
