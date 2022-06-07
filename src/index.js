function sum (num1, num2) {                 //funcion que regresa una suma
    return num1 + num2;
}

function calc (num1, num2, callback) {      //funcion que recibe dos parametros y ejecuta otra funcion
    return callback (num1, num2);           //regresa la ejecucion de funcion que se ejecuta con los parametros declarados
}

console.log(calc(2, 2, sum));