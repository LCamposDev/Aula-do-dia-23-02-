const objNomes = require('./vetor-obj-nomes.mjs')

function BS(vetor,fnComp, Bus){
    for(let i=0; i < vetor.length; i++){
        if(fnComp(vetor[i], Bus)) return i
    }
    return -1
}

function comparaNome1(obj, Bus) {
    return obj.first_name === Bus
}


console.log('Posição do ZYON', BS(objNomes, comparaNome1, 'ZYON' ))
console.log('Posição do LUIS', BS(objNomes, comparaNome1, 'LUIS' ))
console.log('Posição do RONALDINHOSOCCER', BS(objNomes, comparaNome1, 'RONALDINHOSOCCER' ))
