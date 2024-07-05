import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming when I was 15 years
                            old and I am currently in my second year of the
                            engineering program at ESIEA and in my first year of
                            an apprenticeship as a developer at Bouygues
                            Telecom.
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> C</b>,{" "}
                                <b className="purple">Javascript</b>,
                                <b className="purple"> Typescript</b>,
                                <b className="purple"> Python </b>and
                                <b className="purple"> SQL</b>.
                            </i>
                            <br />
                            <br />
                            My field of Interest's are developing
                            <i>
                                <b className="purple">Web</b> and{" "}
                                <b className="purple">AI</b> Technologies.
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing web applications (Javascript, Typescript,
                            SQL) with{" "}
                            <i>
                                <b className="purple">Node.js</b>,{" "}
                            </i>
                            <i>
                                <b className="purple"> React.js</b>,{" "}
                            </i>
                            desktop applications with{" "}
                            <i>
                                <b className="purple">Electron.js</b>,{" "}
                            </i>
                            <i>
                                <b className="purple">supervised</b>
                            </i>{" "}
                            and
                            <i>
                                <b className="purple"> unsupervised</b>
                            </i>{" "}
                            machine learning models with{" "}
                            <i>
                                <b className="purple">SKLearn</b>{" "}
                            </i>
                            &nbsp;and
                            <b className="purple"> DNN</b> models with{" "}
                            <i>
                                {" "}
                                <b className="purple">Keras</b>.
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src="profile-pic.jpg"
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/thomashamamji"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/thomashamamji/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
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
