const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
let addressFomatted = "";


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

addressFomatted = argv.direccion;


let getInfo = async (address) => {
    try {
         let coors = await lugar.getLugar(encodeURI(address));
         let temp = await clima.getClima(coors.lat, coors.lng);
         return `La temperatura en ${address} es de ${temp}`;
    }catch(e){
        return `No se pudo adquirir los datos de ${addresssFomatted}`;
    }
}


getInfo(addressFomatted)
.then(mensaje => console.log(mensaje))
.catch(e=> console.log(e))