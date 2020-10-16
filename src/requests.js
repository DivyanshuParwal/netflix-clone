const API_KEY = 'ced55fdb61a71801b888b92612787c26';
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = [
	{
		type: 'Netflix Originals',
		fetchUrl: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false`,
		posterPath: true
	},
	{
		type: 'Trending Now',
		fetchUrl: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
	},
	{
		type: 'Top Rated',
		fetchUrl: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
	},
	{
		type: 'Comedy Movies',
		fetchUrl: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`
	},
	{
		type: 'Romance Movies',
		fetchUrl: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`
	},
	{
		type: 'Action Movies',
		fetchUrl: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`
	},
	{
		type: 'Horror Movies',
		fetchUrl: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`
	}
];

export default requests;
