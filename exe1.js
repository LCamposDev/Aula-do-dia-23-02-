const nomes = require('./vetor-nomes.mjs')

function BS(vetor, valorBusca){ //BS = BuscaSequencial
    for(let i=0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) return i //encontrou o valorBusca
    }
    return -1 // valorBusca não existe
}

/*const frutas = ['laranja ','maça','uva','pera','jabuticaba','limão','mamão']

console.log('Posição de uva', BS(frutas, 'uva'))
console.log('Posição de maça', BS(frutas, 'maça'))
console.log('Posição de pera', BS(frutas, 'pera'))
console.log('Posição de toranja', BS(frutas, 'toranja'))*/


//import {nomes}./vetor-nomes.js de Dados/retomada/aula 2302/vetor-nomes.mjs'

console.log('posição de Luis', BS(nomes, 'LUIS'))
console.log('posição de Rodrigo', BS(nomes, 'RODRIGO'))
console.log('posição de Dudu', BS(nomes, 'DUDU'))