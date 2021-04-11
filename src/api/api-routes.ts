import axios from "./index";

export const getData = () => {
    return axios.get('/users/random_user?size=30');
}