/*
Carlos Andres Torres E. - 201815476

Punto 1*/
function encrypt(message, key){
    for(let i = 0; i < message.lenght; i++){
        message[i] = numeros[i] + key;
    }
    return message;
}

function decrypt(message, key){
    for(let i = 0; i < message.lenght; i++){
        message[i] = numeros[i] - key;
    }
    return message;
}

function secret(message, choice, key){
    let result = choice(message, key);
    console.log(result);
    return result;
}

/*Punto 2*/
f=n => n<=1? n: f(n-2) + f(n-1)


