import React from "react";
import "./aboutMe.css";
import person from "../../images/profile.jpeg";

function AboutMe() {
	return (
		<div className="about__container" id="about-me">
			<div>
				<img src={person} alt="person icon" />
			</div>
			<div className="about__text">
				<h1>Detail Introduction</h1>
				<p>
					I did my MTech in Computer Engineering from VJTI, Mumbai. I have been
					working on Javascript, MERN stacks, Django for long time. I did
					internship as a full stack developer in a product based company called
					Stryker. Currently working in Deloitte USI. I have developed various
					web development projects and there links is given below. I mostly
					worked as frontend developer. Learning backend also. I am very curious
					to work for startup where I can get chance to work more and learn
					more.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
