import axios from 'axios';

const api = axios.create({
    baseURL: 'http://39fa9a4a8cd5.ngrok.io',
});

export default api;