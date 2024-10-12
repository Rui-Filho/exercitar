let mais = [4,1,2,7,3,6,5]
mais.push(8)
mais.sort()
console.log(`há ${mais.length} elementos`)
console.log(mais)
console.log(mais[7])
console.log(`O segundo valor do vetor é ${mais[1]}`)
let aonde = mais.indexOf(2)

if(aonde == -1){
    console.log(`Não encontrado`)
} else {
    console.log(`O índice que tem o elemento x é o ${aonde}`)

}

for(let valor in mais) {
    console.log(`No índice ${valor} temos o valor ${mais[valor]}`)
}
