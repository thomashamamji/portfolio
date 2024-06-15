import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Drone line following"
                            description="Line following by a drone with OpenCV in Python for real-time image processing from the camera."
                            ghLink="https://github.com/thomashamamji/linedetection"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="TELECAM"
                            description="Development of a WiFi-based media transfer remote control TELECAM. A desktop application allows photographers to transfer photos from their camera to their computer. The application is built using Electron.js as the desktop app framework with React.js and the libgphoto2 C library to connect camera to any Raspberry PI."
                            ghLink="https://github.com/thomashamamji/camera_client"
                            demoLink="https://www.youtube.com/watch?v=vNVjzafxqEc"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Photo gallery"
                            description="Photo gallery built with React.js, Material-UI, Express.js, and MySQL. The application allows users to upload and view photos. Photo fetching is based on the Pexels API."
                            ghLink="https://github.com/thomashamamji/photo_browser"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Memory Game"
                            description="Pokemon memory game developed in Javascript with HTML and CSS. The game is built with a timer and a score counter."
                            ghLink="https://github.com/thomashamamji/memorygame.git"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Treasures hunt game"
                            description="Treasures hunt game developed in C. Users can either specify these locations themselves or have them randomly generated. Good luck finding the treasures."
                            ghLink="https://github.com/thomashamamji/treasures_hunt"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
