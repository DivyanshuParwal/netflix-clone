import React, { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
	const [ show, setShow ] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 100 ? setShow(true) : setShow(false);
		});
		return () => window.removeEventListener('scroll');
	}, []);

	return (
		<nav className={`Nav ${show && 'NavBlack'}`}>
			<img
				className="NavbarLogo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt="Netflix-Logo"
			/>

			<img
				className="NavbarAvatar"
				src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				alt="Navbar-Avatar"
			/>
		</nav>
	);
};

export default Navbar;
