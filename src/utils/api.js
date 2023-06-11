import axios from 'axios'
const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    method: 'GET',
    
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'api key gelecek',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  //aldığı urli apinin linkine uç nokta olarak ekledik.
  //o linke istek atan yardımcı bir fonksiyon oluşturduk.
  export const fetchDataFromApi = async (URL) => {
    //axios ile birlikte get isteği atıyoruz.
    const {data} = await
    axios.get(`${BASE_URL}/${URL}`, options);
    return data;
  }