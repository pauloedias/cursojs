let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
num[5] = 6
num.push(7)
console.log(num)
console.log(num.length) //mostra o tamanho da array(vetor)
num.sort() //coloca os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`)

/*
for(var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(7))// retorna a chave onde se encontra o valor 7
console.log(num.indexOf(1))// caso retorne -1 quer dizer que o valor não existe na array