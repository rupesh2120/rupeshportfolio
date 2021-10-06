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
				<h1>ABOUT ME</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
					placeat eos atque veniam voluptatum sapiente ipsum tempore iste, omnis
					cumque velit autem consectetur. Veritatis molestias ullam voluptas
					nostrum? Dolorum.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
