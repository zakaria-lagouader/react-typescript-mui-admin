import axios from "axios";
const API_URL = "https://random-data-api.com/api";

axios.defaults.baseURL = API_URL;

export default axios;