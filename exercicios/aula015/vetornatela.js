let num = [8, 1, 7, 4, 2, 9]
num.sort()

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}