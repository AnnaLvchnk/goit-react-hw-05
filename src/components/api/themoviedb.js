import axios from "axios";

const theMovieDbInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTkxNGYxMGM0NGIwM2U4NTBmOTAwZjhmM2U2YWNlMSIsInN1YiI6IjY2MzhjY2YxZTkyZDgzMDEyYWQ0MjRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oPCuFi_m6G0fdM5F4eTY2pCQ4ytHJhD3fQkqZnVXcxU',
    accept: 'application/json',
  }
});

export default theMovieDbInstance;