import axios from 'axios';

export const key = "d31e1abd81d34ae658b71c87841411316e941872";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    'Authorization': `Bearer ${key}`
  }

})

export default api

//d31e1abd81d34ae658b71c87841411316e941872
//https://api-ssl.bitly.com/v4/shorten