import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Login from "./login";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState(["Andres", "Julio", "Pedrito"])

	const listItems = tasks.map((t, index) =>
		<li key={index}>{t}</li>
	);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<ul>{listItems}</ul>
			<div className="row">
				<div className="col"></div>
				<div className="col">
					<Login></Login>
				</div>
				<div className="col"></div>
			</div>

			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
