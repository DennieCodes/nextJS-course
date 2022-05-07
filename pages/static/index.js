import React from 'react';
import fs from 'fs/promises'; // File system module from NodeJS
import path from 'path';

function index(props) {
	const { products } = props;

	return (
		<ul>
			{products.map((id) => {
				return <li key={id.key}>{id.title}</li>;
			})}
		</ul>
	);
}

// When getStaticProps is in your Component.  Next will execute it first before your component function
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); // process.cwd = current working directory
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const formattedData = data.products.map((item) => {
		return { ...item, key: item.id };
	});

	return {
		props: {
			products: formattedData,
		},
		// Incremental Static Generation
		// For every incoming request it should be regenerated unless its less than 10 seconds ago it was last regenerated
		// recreated at most every 10 seconds
		// Note: In development page is re-generated for every request
		revalidate: 10,
	};
}

export default index;
