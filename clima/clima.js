const axios = require('axios');

const appid = 'ef1385f57188a545675e7424a5b690ca';
const units = 'metric';
let temperature = "";



const getClima = async(lat,lng) => {

        let resp = await  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=${units}&appid=${appid}`);
        temperature = resp.data.list[0].main.temp; 
        return temperature; 
}


module.exports = {
    getClima
}
