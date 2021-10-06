import connect from "../images/projectsicon/connect2.PNG";
import covid from "../images/projectsicon/covid.gif";
import news from "../images/projectsicon/news.gif";
import notekeeper from "../images/projectsicon/notekeeper.PNG";
import wedding from "../images/projectsicon/wedding.PNG";
import textutils from "../images/projectsicon/textutils.PNG";

//add project on top for latest

const portfolioData = [
	{
		image: connect,
		link: "https://serene-ptolemy-cf6368.netlify.app/",
		gitlink: "https://github.com/rupesh2120/Connect-Intern",
		desc: "Connect Intern",
		summary: "An app which provide internship",
		tech: "Javascript | HTML | CSS",
	},
	{
		image: covid,
		link: "https://musing-bhaskara-f7aefa.netlify.app/",
		gitlink: "https://github.com/rupesh2120/covid-tracker",
		desc: "Covid Tracker",
		summary: "An app shows the statistics of covid cases",
		tech: "React.js | API | Javascript | HTML | CSS",
	},
	{
		image: news,
		link: "https://dailycurrentnewsapp.herokuapp.com/",
		gitlink: "https://github.com/rupesh2120/Current-News-app",
		desc: "Daily News",
		summary: "This app provides daily short news",
		tech: "React.js | API | JavaScript | CSS | HTML",
	},
	{
		image: notekeeper,
		link: "https://happy-payne-59e370.netlify.app",
		gitlink: "https://github.com/rupesh2120/FrontendNotekeeper",
		desc: "Personal Notekeeper",
		summary: "An app for personal notes saver",
		tech: "React.js | Node.js | MongoDB | HTML | CSS | JavaScript",
	},
	{
		image: wedding,
		link: "https://cocky-montalcini-4d1f7b.netlify.app/",
		gitlink: "https://github.com/rupesh2120/Wedding-invitation-app",
		desc: "Online Wedding Invitation",
		summary: "Send an invitation to attend online wedding",
		tech: "React.js | Node.js | MongoDB | HTML | CSS | JavaScript",
	},
	{
		image: textutils,
		link: "https://rupesh2120.github.io/EditorForSentenceAndText/",
		// gitlink: "https://github.com/rupesh2120/EditorForSentenceAndText",
		desc: "Test/Sentence Editor",
		summary: "Small App to edit text and sentences",
		tech: "React.js | HTML | CSS | JavaScript",
	},
];

export default portfolioData;
