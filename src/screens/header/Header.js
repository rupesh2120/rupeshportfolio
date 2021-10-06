import React from "react";
import "./header.css";
import Typed from "react-typed";

function Header() {
	return (
		<div className="main-info">
			<h1>Here I am in nutshell</h1>
			<Typed
				strings={[
					" ",
					"A Software Engineer",
					"Front-end developer",
					"React.js developer",
					"Back-end developer",
				]}
				typeSpeed={40}
				backSpeed={50}
				loop
			/>
		</div>
	);
}

export default Header;
