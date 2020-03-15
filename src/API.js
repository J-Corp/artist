import axios from 'axios'; 

const API_URL = 'https://rest.bandsintown.com/artists/'; 
const APP_ID  = 'j'; 

export default {

  async artist(q) {
    const url = `${API_URL}${q}?app_id=${APP_ID}`;
    const response = await axios.get(url);
    return response.data;
},
  async events(n) {
    const url = `${API_URL}${n}/events?app_id=${APP_ID}&date=upcoming`; 
    const response = await axios.get(url);
    return response.data; 
} 
};