import "./App.css";
import ParticleAnimation from "react-particle-animation";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import ContactMe from "./screens/contactMe/ContactMe";
import Portfolio from "./screens/portfolio/Portfolio";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Header />
			<ParticleAnimation
				style={{ height: "96vh" }}
				background={{ r: 21, g: 22, b: 23, a: 1 }}
				particleSpeed={0.1}
				particleRadius={1.5}
				color={{ r: 158, g: 217, b: 249, a: 255 }}
			/>
			<AboutMe />
			<Portfolio />
			<Technologies />
			<ContactMe />
		</div>
	);
}

export default App;
