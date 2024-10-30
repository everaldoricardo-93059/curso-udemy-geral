

var num1 = prompt('Digite um número: ')
var oper = prompt('Deseja fazer uma soma ou uma subtração? ')
var num2 = prompt('Digite outro número: ')


function soma(numero1, operacao, numero2) {
    if (oper == 'soma') {
        var adicao = parseInt(num1) + parseInt(num2)
        return adicao
    }
    else {
        var subt = parseInt(num1) - parseInt(num2)
        return subt
    }
    
}

let  resultado = soma(oper)
document.write('O resultado é: ' + resultado)