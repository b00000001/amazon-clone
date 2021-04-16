import axios from axios;

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-a5751/us-central1/api' // API URL (Cloud function)
})


export default instance; 