console.log('O console funciona corretamente')
var vel = 80
console.log(`A velocidade do seu carro é ${vel}Km/h`)
////////////////////////////////////////////////////////////////////



var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

/////////////////////////////////////////////////////////////////////



// O COMANDO **SWITCH É MUITO BOM PARA TESTAR DADOS DE CONDIÇÕES PONTUAIS, EM CASO DE CONDIÇÕES
// COM INTERVALOS, É MELHOR USAR O **IF


var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)


switch(diaSem){ 
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    

    default:
        console.log('[ERRO] Dia inválido!')
}
