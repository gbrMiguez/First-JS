//parâmetros de função

function soma(num1, num2) { 
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(232, 22))
console.log(soma(-232, 452))


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//onsole.log(nomeIdade(22, "Gabriel"))

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(7, 3)))
