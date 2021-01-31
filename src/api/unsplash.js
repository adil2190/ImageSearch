import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gvABna0tsWSgvtw-7v_GKPtVrpcpoCx-lnhgfvyee6w' 
    }
})