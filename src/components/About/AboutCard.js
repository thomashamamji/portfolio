import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thomas Hamamji </span>
            from <span className="purple"> Paris, France.</span>
            <br />
            I am currently in a 2-year work-study program in software
            development at Bouygues Telecom.
            <br />
            I am a second-year engineering student specializing in artificial
            intelligence at ESIEA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports (Tennis, Gym, Badminton)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series and Films
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
