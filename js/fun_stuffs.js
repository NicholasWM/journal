const person = {}

const examples = {
    'ex1': [true, 1, 'É um numero'],
    'ex2': [true, 0, 'É um número, mesmo que 0'],
    'ex3': [true, '', 'String Vazia'],
    'ex4': [true, 'abc', ''],
    'ex5': [false, null, ''],
    'ex6': [false, undefined, ''],
    'ex7': [false, NaN, ''],
    'ex8': [true, 1.0, ''],
    'ex9': [true, true, ''],
    'ex10': [true, false, 'É booleano mesmo que false'],
}
console.log(Object.keys(examples))
const verifyFunction = (callback) => {
        Object.keys(examples).forEach(exStr => {
            const [expected, value, commentary] = examples[exStr]
            console.log(`${exStr}: ${value} | ${commentary}`)
            // person.age = value

            const isTrue = callback('age', person)

            console.log(`Result: É ${isTrue ? 'true' : 'false'}!, Expected: ${expected}\n\n`)
    })
}

const notTrustable = (prop, obj) => {
    // não confiavel
    if (obj[prop]) {
        return true
    }
    return false
}

const trustableFunc = (prop, obj) => {
    return prop in obj
}
console.log('Not Trusted')
verifyFunction(notTrustable)
console.log('\n\n\nTrusted with in')
verifyFunction(trustableFunc)