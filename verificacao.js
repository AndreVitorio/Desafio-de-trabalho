function countLetterA(str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === 'a' || char === 'A') {
            count++
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' apareceu ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não apareceu na string.")
    }
}

countLetterA("banana") // Deve retornar: "A letra 'a' apareceu 3 vez(es) na string."
countLetterA("Hello World!") // Deve retornar: "A letra 'a' não apareceu na string."
countLetterA("123a45!A#@$%") // Deve retornar: "A letra 'a' apareceu 2 vez(es) na string."