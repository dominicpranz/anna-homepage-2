import Head from "next/head";
import styles from "../styles/Home.module.css";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
	let { title, cats } = attributes;
	console.log(attributes);

	return (
		<div>
			<h1 className="text-purple-500">title</h1>
			{cats.map((cat, index) => {
				return (
					<div key={index}>
						<h3>{cat.name}</h3>
						<p>{cat.description}</p>
					</div>
				);
			})}
		</div>
	);
}
