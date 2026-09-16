// 1. Criar uma função que exibe "Olá, mundo!" no console.

function verificarMundo(){
    console.log('Olá mundo.');
}

verificarMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function ReceberNome(nome ='Guilherme'){
    console.log(`Olá, ${nome}`)
}

ReceberNome();

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.


function DobrarNumero(numero = 4){
    return (numero *2);
}

console.log(DobrarNumero());

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

let soma;
let divisao;

function SomarMedia(numero1 = 1, numero2 = 5, numero3 = 10){
    soma = (numero1 + numero2 + numero3);
    divisao = soma /3;
    return(divisao);
}

console.log(SomarMedia());


// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornarMaiorNumero(num1 = 2, num2 = 3){
    if (num1 > num2){
        return(num1);
    }else{
        return(num2);
    }

}

console.log(retornarMaiorNumero());

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function elevarAoQuadrado(numeracao = 2){
    return (numeracao * numeracao);

}

console.log(elevarAoQuadrado());