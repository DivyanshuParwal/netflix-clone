import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import './Row.css';

const Row = ({ fetchUrl, title, largeRow }) => {
	const [ movies, setMovies ] = useState([]);
	const [ trailerId, setTrailerId ] = useState('');
	const [ selectedMovie, setSelectedMovie ] = useState({});

	useEffect(
		() => {
			Axios.get(fetchUrl).then((response) => {
				setMovies(response.data.results);
			});
		},
		[ fetchUrl ]
	);

	const moviePoster = movies.map((movie) => {
		return (
			<img
				key={movie.id}
				onClick={() => youTubeTrailerHandler(movie)}
				className={` MoviePoster ${largeRow && 'MoviePosterLarge'} `}
				src={`https://image.tmdb.org/t/p/original${largeRow ? movie.poster_path : movie.backdrop_path}`}
				alt={movie.name}
			/>
		);
	});

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1
		}
	};

	const youTubeTrailerHandler = (movie) => {
		if (trailerId && selectedMovie.id === movie.id) {
			setTrailerId('');
		} else {
			movieTrailer(movie.original_name || movie.name || '', { id: true, multi: true })
				.then((response) => {
					setTrailerId(response[0]);
					setSelectedMovie(movie);
				})
				.catch((err) => {
					setSelectedMovie(movie);
				});
		}
	};

	return (
		<div className="Row">
			<h2>{title}</h2>
			<div className="MoviePosters">{moviePoster}</div>
			{trailerId && <YouTube videoId={trailerId} opts={opts} />}
		</div>
	);
};

export default Row;
