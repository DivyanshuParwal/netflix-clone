import React from 'react';

import './App.css';
import Rows from './Components/Rows/Rows';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Rows />
			<footer
				style={{
					textAlign: 'center',
					padding: '20px 0',
					backgroundColor: '#e6020c',
					fontWeight: 'bolder',
					fontSize: 'larger'
				}}
			>
				Developed by Divyanshu Parwal
			</footer>
		</div>
	);
};

export default App;
