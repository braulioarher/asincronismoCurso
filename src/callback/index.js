function sum (num1, num2) {                 //funcion que regresa una suma
    return num1 + num2;
}

function calc (num1, num2, callback) {      //funcion que recibe dos parametros y ejecuta otra funcion
    return callback (num1, num2);           //regresa la ejecucion de funcion que se ejecuta con los parametros declarados
}

console.log(calc(6, 2, sum));

function date(callback) {                   //funcion que hace manda a llamar callback  
    console.log(new Date);                  //imprime la hora
    setTimeout( function() {                //espera para ejecutar la funcion que llamo
        let date = new Date;                //se declara una nueva fecha
        callback(date)                      //se ejecuta la funcion que fue llamada con el parametro de la nueva fecha
    }, 3000)
}

function printDate(dateNow) {               //Funcion que solo imprime la fecha
    console.log(dateNow);
}

date(printDate);