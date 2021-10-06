import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
	return navigationLinks.map((e, idx) => (
		<p key={idx}>
			<a href={e.ref}>{e.name}</a>
		</p>
	));
}

function ContactMe() {
	return (
		<div className="contactMe__container" id="contact">
			<div className="contactMe__data__links">
				<div>
					<p>Mumbai, India</p>
					<p>Rupesh Sharma</p>
					<p>sharmarupesh2120@gmail.com</p>
				</div>
				<div class="social">
					<a href="https://github.com/rupesh2120" target="_blank">
						<i class="fab fa-github fa-2x"></i>
					</a>
					<a href="https://www.linkedin.com/in/rupesh-sharma" target="_blank">
						<i class="fab fa-linkedin fa-2x"></i>
					</a>
					<a href="https://www.instagram.com/rupesh_sharma21/" target="_blank">
						<i class="fab fa-instagram fa-2x"></i>
					</a>
					<a href="https://twitter.com/sharmarupesh21" target="_blank">
						<i class="fab fa-twitter fa-2x"></i>
					</a>
				</div>
			</div>

			<div style={{ textAlign: "center" }}>
				Copyright&copy; {new Date().getFullYear()} All rights reserved
			</div>
		</div>
	);
}

export default ContactMe;
