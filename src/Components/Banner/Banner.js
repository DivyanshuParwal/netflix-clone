import Axios from 'axios';
import React, { useState, useEffect } from 'react';

import requests from '../../requests';
import './Banner.css';

const Banner = () => {
	const [ movie, setMovie ] = useState({});

	useEffect(() => {
		Axios.get(requests[0].fetchUrl)
			.then((response) => {
				setMovie(response.data.results[Math.floor(Math.random() * (response.data.results.length - 1))]);
			})
			.catch((err) => console.log(err));
	}, []);

	function truncate(str, n) {
		return str.length > n ? str.substr(0, n - 1) + ' ...' : str;
	}

	return (
		<header
			className="Banner"
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'top'
			}}
		>
			<div className="BannerContents">
				<h1 className="BannerTitle">{movie.name || movie.title || movie.original_name}</h1>
				<h1 className="BannerDescription">{movie.overview && truncate(movie.overview, 150)}</h1>
			</div>
			<div className="BannerFadeBottom" />
		</header>
	);
};

export default Banner;
