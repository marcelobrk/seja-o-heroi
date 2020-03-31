import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:port',
})

export default api;