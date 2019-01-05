const axios = require('axios');
let key = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';
let location = {}

const getLugar = async(encodedUrlAddress) => {
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrlAddress}&key=${key}`)

    location  = resp.data.results[0].geometry.location;
    
    return location;    
}

module.exports = {
    getLugar
}
