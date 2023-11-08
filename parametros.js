// declaração de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 4))

// parâmetros X argumentos

function multiplica(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), 2))

// expressão de função

const somaJ = function(num1, num2) {return num1 + num2}
console.log(somaJ(1, 1))


// Assim, ele primeiro iniciará todas as declarações e todas as var, e depois vai executar o código. Portanto, não temos esse perigo. Esse trabalho é chamado de hoisting (levantar).
