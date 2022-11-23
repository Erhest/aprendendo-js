const body = document.body
// NUMEROS

const x = 2
const y = 4
const pi = 3.141592

console.log("Potência")
console.log(Math.pow(x, y))
//body.innerHTML =`   <p>
//                        A Potêncioa é excutada utilizando o método Math.sqrt(x) 
//                        : ${x} <sup>${y}<sup/>  = ${Math.pow(x, y)}
//                   <p/> 
//              `
body.innerHTML = returnTextEdit("potência", "Math.pow(x)")
body.innerHTML += returnTextEdit(`${x} <sup>${y}<sup/>  = ${Math.pow(x, y)}`)


console.log("Raiz Quadrada")
console.log(Math.sqrt(y))

body.innerHTML += returnTextEdit("Raiz Quadrada", "Math.sqrt(y)")
body.innerHTML += returnTextEdit(`V${y} = ` , Math.sqrt(y))

console.log('PI')
console.log(Math.PI)

body.innerHTML += returnTextEdit("PI", "Math.PI)")
body.innerHTML += returnTextEdit(`PI = ` , Math.PI)

console.log('Arredondamento')
console.log(Math.ceil(pi))  // Arredonda para cima
console.log(Math.floor(pi)) // Arredonda para baixo
console.log(Math.round(pi)) // // Arredonda para o inteiro mais próximo
console.log(Math.trunc(pi)) // // Exclui casas decimais

body.innerHTML += returnTextEdit("", "Arredondamento")
body.innerHTML += returnTextEdit("Arredonda para cima " , "Math.ceil(pi)")
body.innerHTML += returnTextEdit(`${pi} = ` , Math.ceil(pi))
body.innerHTML += returnTextEdit("Arredonda para baixo " , "Math.floor(pi)")
body.innerHTML += returnTextEdit(`${pi} = ` , Math.floor(pi))
body.innerHTML += returnTextEdit("Arredonda para inteiro próx. " , "Math.round(pi)")
body.innerHTML += returnTextEdit(`${pi} = ` , Math.round(pi))
body.innerHTML += returnTextEdit("Exclui casa decimais " , "Math.trunc(pi)")
body.innerHTML += returnTextEdit(`${pi} = ` , Math.trunc(pi))

console.log("Aleatório")
console.log(Math.random())
console.log(Math.floor(Math.random() * 10))
console.log(getRandomInt(50, 100))

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

// Strings

body.innerHTML += "<h1> String <h1/>"
const curso = "Quattro Edtech"
console.log(curso)
console.log(curso.length)


body.innerHTML += returnTextEdit("Verificar Tamanho", "str.length")
body.innerHTML += returnTextEdit("Quattro Fintech", curso.length)


console.log("Upper Case")
console.log(curso.toUpperCase())
console.log(curso.toLowerCase())
console.log(curso.charAt(10))
console.log(curso.charAt(15))
console.log(curso.indexOf('e'))
console.log(curso.charCodeAt(0))

console.log(curso.substring(10))
console.log(curso.substring(1, 5))

console.log(curso.slice(-7))

console.log(curso.replace("t", "X"))
console.log(curso.replaceAll("t", "X"))

const alunos = "Akio;Sayumi;Kenji;Emerson;Mateus;Davi;Igor;Felipe;Eric"


console.log(alunos)
const list_alunos = alunos.split(";")
console.log(list_alunos)

console.log(curso)


// BOOLEANS
let continuar = true
console.log(continuar)
continuar = false
console.log(continuar)
console.log(typeof continuar)

continuar = 0
console.log(typeof continuar)
console.log(continuar)

console.log("Teste de Boolean")
continuar = true
console.log(!!continuar)

console.log("verdadeiros")
console.log(!!15)
console.log(!!" ")
console.log(!!"Texto teste")
console.log(!![])
console.log(!!{})

console.log("falsas")
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)





function returnTextEdit(texto, strong){
    return `<p>${texto} <strong>${strong}<strong/><p/>`
}