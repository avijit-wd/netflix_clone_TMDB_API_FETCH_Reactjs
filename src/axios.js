import axios from "axios";

// setting the initial url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
