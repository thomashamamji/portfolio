import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drone from "../../Assets/Projects/drone.jpg";
import gallery from "../../Assets/Projects/gallery.jpg";
import camera from "../../Assets/Projects/camera.jpg";
import memorygame from "../../Assets/Projects/memorygame.jpeg";
import treasures from "../../Assets/Projects/treasures.jpeg";

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
                            imgPath={drone}
                            isBlog={false}
                            title="Drone line tracking"
                            description="Line following by a drone with OpenCV in Python for real-time image processing from the camera."
                            ghLink="https://github.com/thomashamamji/linedetection"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={camera}
                            isBlog={false}
                            title="TELECAM"
                            description="Development of a WiFi-based media transfer remote control TELECAM. A desktop application allows photographers to transfer photos from their camera to their computer. The application is built using Electron.js as the desktop app framework with React.js and the libgphoto2 C library to connect camera to any Raspberry PI."
                            ghLink="https://github.com/thomashamamji/camera_client"
                            demoLink="https://www.youtube.com/watch?v=vNVjzafxqEc"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gallery}
                            isBlog={false}
                            title="Photo gallery"
                            description="Photo gallery built with React.js, Material-UI, Express.js, and MySQL. The application allows users to upload and view photos. Photo fetching is based on the Pexels API."
                            ghLink="https://github.com/thomashamamji/photo_browser"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={memorygame}
                            isBlog={false}
                            title="Memory Game"
                            description="Pokemon memory game developed in Javascript with HTML and CSS. The game is built with a timer and a score counter."
                            ghLink="https://github.com/thomashamamji/memorygame.git"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={treasures}
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
