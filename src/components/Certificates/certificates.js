import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import certificatePdf1 from "../../Assets/CertificatonPDFs/Certification1.pdf";
import certificatePdf2 from "../../Assets/CertificatonPDFs/Certification2.pdf";
// import certificatePdf3 from "../../Assets/CertificatonPDFs/Certification3.pdf";
import certificatePdf4 from "../../Assets/CertificatonPDFs/Certification4.pdf";
import certificatePdf5 from "../../Assets/CertificatonPDFs/Certification5.pdf";
import certificatePdf6 from "../../Assets/CertificatonPDFs/Certification6.pdf";
import certificatePdf7 from "../../Assets/CertificatonPDFs/Certification7.pdf";
import certificatePdf8 from "../../Assets/CertificatonPDFs/Certification8.pdf";
import certificatePdf9 from "../../Assets/CertificatonPDFs/Certification9.pdf";
import certificatePdf10 from "../../Assets/CertificatonPDFs/Certification10.pdf";
import certificatePdf11 from "../../Assets/CertificatonPDFs/Certification11.pdf";
import certificatePdf12 from "../../Assets/CertificatonPDFs/Certification12.pdf";
import certificatePdf13 from "../../Assets/CertificatonPDFs/Certification13.pdf";
import certificatePdf14 from "../../Assets/CertificatonPDFs/Certification14.pdf";
import certificatePdf15 from "../../Assets/CertificatonPDFs/Certification15.pdf";


import certificateImage1 from "../../Assets/CertificateImages/Certification1.jpg";
import certificateImage2 from "../../Assets/CertificateImages/Certification2.jpg";
// import certificateImage3 from "../../Assets/CertificateImages/Certification3.jpg";
import certificateImage4 from "../../Assets/CertificateImages/Certification4.JPG";
import certificateImage5 from "../../Assets/CertificateImages/Certification5.jpg";
import certificateImage6 from "../../Assets/CertificateImages/Certification6.jpg";
import certificateImage7 from "../../Assets/CertificateImages/Certification7.jpg";
import certificateImage8 from "../../Assets/CertificateImages/Certification8.jpg";
import certificateImage9 from "../../Assets/CertificateImages/Certification9.jpg";
import certificateImage10 from "../../Assets/CertificateImages/Certification10.jpg";
import certificateImage11 from "../../Assets/CertificateImages/Certification11.jpg";
import certificateImage12 from "../../Assets/CertificateImages/Certification12.jpg";
import certificateImage13 from "../../Assets/CertificateImages/Certification13.jpg";
import certificateImage14 from "../../Assets/CertificateImages/Certification14.jpg";
import certificateImage15 from "../../Assets/CertificateImages/Certification15.jpg";

import RecommendationImage1 from "../../Assets/CertificateImages/Recommendation1.jpg";
import RecommendationImage2 from "../../Assets/CertificateImages/Recommendation2.jpg";
import RecommendationImage3 from "../../Assets/CertificateImages/Recommendation3.jpg";
import RecommendationImage4 from "../../Assets/CertificateImages/Recommendation4.jpg";

import RecommendationPdf1 from "../../Assets/CertificatonPDFs/Recommendation1.pdf";
import RecommendationPdf2 from "../../Assets/CertificatonPDFs/Recommendation2.pdf";
import RecommendationPdf3 from "../../Assets/CertificatonPDFs/Recommendation3.pdf";
import RecommendationPdf4 from "../../Assets/CertificatonPDFs/Recommendation4.pdf";

function Certificates() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Here are my <strong className="purple">Qualifications. </strong>
                </h1>
                <p style={{ color: "white" }}>
                    A collection of certificates achieved through learning and dedication.
                </p>
                
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf1}
                            imageUrl={certificateImage1}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf2}
                            imageUrl={certificateImage2}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf4}
                            imageUrl={certificateImage4}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf8}
                            imageUrl={certificateImage8}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf5}
                            imageUrl={certificateImage5}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf9}
                            imageUrl={certificateImage9}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf6}
                            imageUrl={certificateImage6}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf7}
                            imageUrl={certificateImage7}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf10}
                            imageUrl={certificateImage10}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf11}
                            imageUrl={certificateImage11}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf12}
                            imageUrl={certificateImage12}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf13}
                            imageUrl={certificateImage13}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf14}
                            imageUrl={certificateImage14}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf15}
                            imageUrl={certificateImage15}
                        />
                    </Col>
                    <h1 className="project-heading">
                    Here are my <strong className="purple">Recommendation Letters. </strong>
                </h1>
                <p style={{ color: "white" }}>
                Below are letters showcasing my qualifications and achievements.
                </p>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={RecommendationPdf3}
                            imageUrl={RecommendationImage3}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={RecommendationPdf2}
                            imageUrl={RecommendationImage2}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={RecommendationPdf4}
                            imageUrl={RecommendationImage4}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={RecommendationPdf1}
                            imageUrl={RecommendationImage1}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
    
}

export default Certificates;
