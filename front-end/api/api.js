// Fetch ou Axios
import "dotenv/config";
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "localhost:3000/";
const URL = "https://deploy-spotify-4ot1.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

console.log(responseArtists.data);
