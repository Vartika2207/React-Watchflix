import axios from 'axios';

// baseURL to make req to the movie DB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;