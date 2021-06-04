import React from "react";
import "../App.css";
import Header from "../components/Header";

const Home = () => {
	return (
		<>
			<Header />

			<div className="homeDiv">
				<div className="homeContainer">
					<h1 id="hello">Hello,</h1>
					<h1 id="i_am">I am</h1>
					<h1 id="tim">Tim Jackreece</h1>
					<p id="career">Front-End Web Developer</p>
				</div>

				<div className="profilePic">
					<img
						className="profile"
						width="450px"
						src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/196249276_10161736010083868_1240678864114183718_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=NlQ77cz5DaoAX-4_r0l&_nc_ht=scontent-mia3-2.xx&oh=06c36bded366cd64e86d0e522ee21a17&oe=60E005DD"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
