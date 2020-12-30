const API_KEY = "6dc2975f285d84303e2ad63d22be46a7";

// 28 : 'Action',
// 12 : 'Adventure',
// 16 : 'Animatiomn',
// 35 : 'Comedy',
// 80 : 'Crime' ,
// 99 : 'Documentary',
// 18 : 'Drama' ,
// 10751 : 'Family' ,
// 14 : 'Fantasy' ,
// 36 : 'History',
// 10402 : 'Music',
// 9648 : 'Mystery',
// 10749 : 'Romance' ,
// 878 : 'Science Fiction' ,
// 10770 : 'TV Movie' ,
// 53 : 'Thriller' ,
// 10752 : 'War',
// 37 : 'Western'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
