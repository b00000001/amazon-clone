import axios from axios;

const instance = axios.create({
    baseURL: '...' // API URL (Cloud function)
})

export default instance; 