import React from "react";
import Card from "react-bootstrap/Card";
import { GiAchievement } from "react-icons/gi";

function Experiences() {
return (
    <Card className="quote-card-view">
    <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ color: "rgb(155 126 172)" }}>
            Building practical solutions through IT infrastructure, networking,
            and real-world engineering experience.
        </p>

        <div style={{ textAlign: "justify" }}>
            <span className="purple" style={{ fontSize: "30px" }}>
            Experience:
            </span>
        </div>

        <p style={{ textAlign: "justify" }}>
            <br />

            <strong>⦿ Project Engineer</strong> | Hi Tech IT Services Company | Jeddah, Saudi Arabia
            <br />
            2024 - Present
            <br />
            <br />
            • Work on IT infrastructure, networking, cybersecurity, and low-current systems projects  
            <br />
            • Prepare technical solutions, proposals, and BOQs for enterprise clients  
            <br />
            • Support presales activities and client requirement analysis  
            <br />
            • Coordinate project delivery, implementation, and on-site execution  
            <br />
            <br />

            <strong>⦿ Artificial Intelligence & Automation Developer</strong> | Arya.ai | Turkey
            <br />
            2023 - 2024
            <br />
            <br />
            • Developed AI and automation solutions to improve operational efficiency  
            <br />
            • Worked on optimization algorithms for logistics and routing systems  
            <br />
            • Integrated mapping APIs to enhance real-world decision systems  
            <br />
            <br />

            <strong>⦿ Web Developer (Intern)</strong> | Celadonsoft | Remote (USA)
            <br />
            2022
            <br />
            <br />
            • Built and contributed to web applications using React.js and JavaScript  
            <br />
            • Worked with modern frontend and backend technologies including Node.js and Firebase  
            <br />
            <br />

            <strong>⦿ Retail & Business Operations Manager</strong> | Self-Employed | Saudi Arabia
            <br />
            2019 - 2021
            <br />
            <br />
            • Managed an online retail business, handling operations end-to-end  
            <br />
            • Developed marketing strategies and customer acquisition campaigns  
            <br />
            • Managed logistics, imports, and order fulfillment processes  
            <br />
            <br />

            <strong>⦿ Computer Engineering Graduate</strong> | Antalya Bilim University | Turkey
            <br />
            Graduated: 2024
            <br />
            <br />
            • Bachelor’s Degree in Computer Engineering  
            <br />
            • Strong foundation in software engineering, networking, and system design  
            <br />
        </p>

        <div
            className="purple"
            style={{ textAlign: "justify", fontSize: "20px", marginTop: "20px" }}
        >
            <strong>Key Strengths</strong>
        </div>

        <ul>
            <li className="about-activity">
            <GiAchievement /> IT Infrastructure & Networking
            </li>
            <li className="about-activity">
            <GiAchievement /> Cybersecurity Fundamentals
            </li>
            <li className="about-activity">
            <GiAchievement /> Presales & Technical Solutions
            </li>
            <li className="about-activity">
            <GiAchievement /> Project Coordination & Delivery
            </li>
            <li className="about-activity">
            <GiAchievement /> Business & Client Communication
            </li>
        </ul>
        </blockquote>
    </Card.Body>
    </Card>
);
}

export default Experiences;