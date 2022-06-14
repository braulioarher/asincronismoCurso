//XLM HTTP Request es un objeto que esta dentro de JavaScript que permite hacer peticiones a algun servicio

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //requerimos nuestro objeto para hacer peticiones
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {         //funcion que recibe nuestra api y un callback  
    let xhttp = new XMLHttpRequest();           //instanceamos implementado por Microsoft
    xhttp.open('GET', url_api, true);           //se abre y envia una peticion GET, A un URL donde se encuentra mi API, y activamos el asincronismo con TRUE
    xhttp.onreadystatechange = function (event) {   //escucha que hace esta operacion si este cambio sucede se ejecuta la funcion
        if(xhttp.readyState === 4)   {               //nos asegura que ha sido completado eveluando el estado
            if(xhttp.status === 200) {               //evaluamos el estatus de la conexion
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})