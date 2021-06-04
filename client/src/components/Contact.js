import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact = (props) => {
	return (
		<>
			<Header />

			<div className="contactDiv">
				<h1>Reaching me is easy</h1>
				<a href={props.data.Twitter}>Twitter</a>
				<p>Email: {props.data.email}</p>
				<p>Github: {props.data.github}</p>
				<p>Phone: {props.data.phone}</p>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
