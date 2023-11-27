import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<br/>
				<div className="row">
					<div className="col">
						<Card titulo = "Husky 1 " imagen="https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjaG9ycm8lMjBodXNreXxlbnwwfHwwfHx8MA%3D%3D"/>
					</div>
					<div className="col">
						<Card titulo = "Husky 2 " imagen="https://www.elmueble.com/medio/2022/10/10/husky-siberiano_64ac203e_900x900.jpg"/>
					</div>
					<div className="col">
						<Card titulo = "Husky 3 " imagen="https://static.wikia.nocookie.net/husky-siberiano/images/8/8a/Husky_blanco.jpg/revision/latest/scale-to-width-down/345?cb=20180321185406&path-prefix=es"/>
					</div>
					<div className="col">
						<Card titulo = "Husky 4 " imagen="https://www.purina.com.ar/sites/default/files/2023-06/HUSKY%20SIBERIANO%20480X684.png"/>
					</div>
				</div>
				<Footer/>
			</div>


		</div>
	);
};

export default Home;
