// =====================================JOURNAL=======================================
// ===================================================================================
// ===================================================================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log('Initial ', arr)

// function filterOdd(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// console.log('filterOdd >> ' ,filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]

// ===================================================================================
// ===================================================================================
// ===================================================================================

// function filterEven(arr) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// console.log('filterEven', filterEven(arr));

// Output:
// [ 2, 4, 6, 8, 10 ]

// ===================================================================================
// ===================================================================================
// ===================================================================================

function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    console.log(callback, filteredArr)
    return filteredArr;
}

// ===================================================================================
// ===================================================================================
// ===================================================================================

// Function containing logic for filtering out odd numbers

function isOdd(x) {
    return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
    return x % 2 === 0;
}

function isGreaterThanFive(x) {
    return x > 5;
}

// ===================================================================================
// ===================================================================================
// EXAMPLE TO EXECUTE
// ===================================================================================

// filterFunction(arr, (x) => x > 5)

// Output of console.log(filterFunction(arr, (x) => x > 5)):
// [ 6, 7, 8, 9, 10, 11 ]

// ===================================================================================
// For filtering out odd numbers

// filterFunction(arr, isOdd)

// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// ===================================================================================
// For filtering out even numbers

// filterFunction(arr, isEven)

// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]

// ===================================================================================
// ===================================================================================
// ===================================================================================
// Polyfills and Prototype
// Built-in functions map, filter, reduce... let's build one?

Array.prototype.filterFunction = function (callback) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        callback(this[i]) ? filteredArr.push(this[i]) : null;
    }
    console.log('filterFunction', filteredArr)
    return filteredArr;
};

// EXECUTE
// const arr = [1, 2, 3, 4, 5]
// arr.filterFunction(callbackFn)

// EXECUTE AND COMPARE
// console.time('ourFilter')
// arr.filterFunction(isEven) // Our function
// console.timeEnd('ourFilter')

// console.time('builtInFilter')
// defaultFilterF = arr.filter(isEven)
// console.timeEnd('builtInFilter')
// console.log(
//     'Built-in Filter',
//     defaultFilterF
// ) // Built-in

// AND MORE....

// arr.filterFunction((x) => x % 2 != 0)
// arr.filter((x) => x % 2 != 0)
// both give the same output on console.log: [ 1, 3, 5, 7, 9, 11 ]

// arr.filterFunction((x) => x > 5)
// arr.filter((x) => x > 5)
// both give the same output on console.log: [ 6, 7, 8, 9, 10, 11 ]

// ===================================================================================

// Function Chaining

// Using our own filterFunction() prototype implementation
// arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0)

//Using the inbuilt filter() implementation
// const builtIn = arr.filter((x) => x > 5).filter((x) => x % 2 === 0)
// console.log('bultIn', builtIn)
// both give the same output on console.log: [ 6, 8, 10 ]

// ===================================================================================
// ===================================================================================
// ===================================================================================
// Return a Function from Another Function

function calculate(operation) {
    switch (operation) {
        case "ADD":
            return function (a, b) {
                console.log(`${a} + ${b} = ${a + b}`);
            };
        case "SUBTRACT":
            return function (a, b) {
                console.log(`${a} - ${b} = ${a - b}`);
            };
    }
}

// EXECUTE
// const calculateAdd = calculate("ADD");
// console.log(calculateAdd);

// Output: 
// [Function (anonymous)]

// EXECUTE
// const calculateAdd = calculate("ADD");
// calculateAdd(2, 3);
// Output: 2 + 3 = 5

// EXECUTE
// const calculateSubtract = calculate("SUBTRACT");
// calculateSubtract(2, 3);
// Output: 2 - 3 = -1

// Call the returned function using double parentheses

// calculate("ADD")(2, 3);
// Output: 2 + 3 = 5

// calculate("SUBTRACT")(2, 3);
// Output: 2 - 3 = -1

