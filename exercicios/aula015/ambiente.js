let num = [5, 8, 2, 9, 3]

/*num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor da posição é ${num[0]}`)*/

var pos = num.indexOf(9)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}


