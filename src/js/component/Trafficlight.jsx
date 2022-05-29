import React, { useState } from "react";

//create your first component
const Trafficlight = () => {
	const [color, setColor] = useState("yellow");

	return (
		<div className="container">
			<div className="blackstrip">.</div>

			<div className="traffic-light">
				<div
					onClick={() => setColor("red")}
					className={
						"light red " + (color === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow " + (color === "yellow" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green " + (color === "green" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Trafficlight;
