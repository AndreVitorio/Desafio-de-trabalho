function isFibonacciNumber(num) {
    if (num < 0) return false

    let anterior = 0
    let atual = 1

    if (num === anterior || num === atual) return true

    while (atual < num) {
        let temp = anterior + atual
        anterior = atual
        atual = temp
    }

    return atual === num
}

function checkFibonacci(num) {
    if (isFibonacciNumber(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`)
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`)
    }
}

checkFibonacci(13);  // Deve retornar que pertence
checkFibonacci(10);  // Deve retornar que não pertence
checkFibonacci(Math.floor(Math.random() * 100) + 1) // Teste com número aletório
checkFibonacci(Math.floor(Math.random() * 100) + 1) // Teste com número aletório
checkFibonacci(Math.floor(Math.random() * 100) + 1) // Teste com número aletório