/************************************************************************************ */
/* Obejtivo : Realizar a entrada de dois valores e a operação matemática desejada
/* Somar, subtrair, multiplicar e dividir 
/* Data 28/08/2023
Autor Marcel 
Versão 1.0
***************************************************************************************/
// import da biblioteca calculosMatematicos
var calculosMatematicos = require('./modulo/calculosMatematicos.js');

//Import da biblioteca para entrada de dados
var readline = require('readline');

//Entradas de dados pelo usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function(numero1){
    //replace() - permite localizar um caracter e substituir por outro
    let valor1 = numero1.replace(',','.');

    //Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function(numero2){
        let valor2 = numero2.replace(',','.');

        entradaDeDados.question('Escolha uma operação a ser realizada: [SOMAR | SUBTRAIR | DIVIDIR | MULTIPLICAR]', function(opcaoMatematica){

            //toUpperCase() - permite converter uma String em MAIÚSCULO
            //toLowerCase() - permite converter uma String em minusculo
            let operacao = opcaoMatematica.toUpperCase();

            //Validação de entrada de dados vazia
            if (valor1 == '' || valor2 == ''){
                console.log('ERRO: É obrigatório da entrada de valores.');
            } else if (isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: É obrigatório a entrada somente de valores numéricos.')
            } else {
                let resultado;
                valor1 = Number(valor1);
                valor2 = Number(valor2);

                // if(operacao == 'SOMAR')
                //     resultado = valor1 + valor2;
                // else if (operacao == 'SUBTRAIR')              
                //     resultado = valor1 - valor2;
                // else if(operacao == 'MULTIPLICAR')                
                //     resultado = valor1 * valor2;
                // else if (operacao == 'DIVIDIR'){
                //     //Validação da divisão por zero
                //     if (valor2 == 0)
                //     console.log('ERRO: Não é possível dividir um número por 0')  
                // else              
                //     resultado = valor1 / valor2;
                // } else
                // //Validação de uma operação inválida
                // console.log('ERRO: A operação informada não é válida.');

                //Versão 2 - Utilizando o swith
                resultado = calculosMatematicos.calculadora(valor1, valor2, operacao);

                //Validação para exibir o conteúdo caso a variavel não seja undefined
                if (resultado)

                //toFixed() - permite especificar a quantidade de digitos após a casa decimal
                //Number() - converte String para numero
                //String() - converte numero para String
                console.log(String(resultado.toFixed(2)).replace('.',','));
            }

     })
    })
});

//Modelo tradicional de criar uma função
function calculadora(numero1, numero2, tipoCalculo){
    //recebendo os dados de argumentos da funçãio
    let valor1 = numero1;
    let valor2 = numero2;
    let operacao = tipoCalculo;
    let resultado;

    switch (operacao) {
        case "SOMAR":
            case "+": 
            resultado = valor1 + valor2;
            break;
        case "SUBTRAIR":
            case "-":
            resultado = valor1 - valor2;
            break;
            case "MULTIPLICAR":
                case "*":
                resultado = valor1 * valor2;
            break;
            case "DIVIDIR":
                case "/":
                if (valor2 == 0)
                console.log('ERRO: Não é possível dividir um número por 0')
            else              
                 resultado = valor1 / valor2;
            break;
    
        default:
            console.log('ERRO: A operação informada não é válida.');
            break;
    }

    if(resultado != undefined)
        return resultado;
    else
        return false;
}