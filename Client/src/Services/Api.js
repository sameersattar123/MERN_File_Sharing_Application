import axios from "axios"

const API_URL = "http://localhost:8080"

export const uploadFile = async(data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.log(error.message)
    }
}