
// Object and related changes==============
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
// array 2: length=5 last=j,o,n,e,s

// Why?
// .reverse() mutates(changes original array) the original array.
// arr1.length → 5
// arr1.slice(-1) → returns an array containing the last element:



// Functon Currying=========
function multiply(a) {

  if(arguments.length > 1){
     return [...arguments].reduce((acc, crr)=>acc*crr)
  }
  function inner(b) {
    if (b === undefined) return a;

    // Otherwise multiply and recurse
    return multiply(a * b);
  }

  return inner;
}


var result = multiply(2)(3)(4)
console.log(result())

var result2 = multiply(2,3,4)

console.log(result2)


// Valid Parathesis Problem===============

// Given a string containing 
// ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’, determine if the input string is valid.
// valid: {()}
// invalid: ({)}


// { -> }
// ( -> )
// [ -> ]

const mappings = {
    '}': '{',
    ')': '(',
    ']': '['
}

const input = '{()}';



function isValidPair(pairs) {
    const stack = []

    for (item of pairs) {

        if (item == '(' || item == '{' || item == '[') {
            stack.push(item)
        } else if (item == ')' || item == '}' || item == ']') {

            if (stack.length == 0 || stack[stack.length - 1] !== mappings[item]) {
                return false
            }
            stack.pop();
        }
    }
    return stack.length == 0;
}

console.log(isValidPair(input))


// faltArr ===================

const inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
//function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]


function faltArr(arr) {
    const result = [];

    function flatSub(subArr) {

        subArr.forEach(item => {
            if (Array.isArray(item)) {
                flatSub(item)
            } else {
                result.push(item)
            }
        })
    }

    flatSub(arr)
    return result;
}

console.log(faltArr(inputArray))




//Convert all keys within an object into snake_case/camelCase
//const inputObject = { "firstName": "John", "lastName": "Doe", "age": 25 }
//function convertKeys(inputObject) => output { "first_name": "John", "last_name": "Doe", "age": 25}

const op = {}

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

Object.keys(inputObject).map(item => {
    newKey = (toSnakeCase(item))
    op[newKey] = inputObject[item]
})
console.log(op)




// Bubble Sort ============
const chars = [16, 8, 1, 2, 3, 4, 6, -10]
const least = chars.reduce((acc, current) => (current < acc ? current : acc), 0)
// console.log(least)

for (let i = 0; i < chars.length; i++) {
    console.log('chars.length - i - 1', chars.length - i - 1)
    for (let j = 0; j < chars.length - i - 1; j++) {
        console.log(chars[j] + " " + chars[j + 1])
        if (chars[j] > chars[j + 1]) {
            [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]]
        }
    }
}

console.log(chars); // [-10,1,2,3,4,6,8,16]


// Count Even Integers =======
const evenIntegers = [1, 2, 3, 4].filter(item => item % 2 == 0);
console.log(evenIntegers.length);



// decodeSecretCode ========

function decodeSecretCode(s) {
    // your solution
    if (!s || !s.length || s.length % 2 !== 0) return '';
    let result = '';

    for (let i = 0; i < s.length; i += 2) {
        const ch = s[i];
        const n = parseInt(s[i + 1]);

        if (ch >= 'a' && ch <= 'z') {
            const newCode = ch.charCodeAt(0) + n;
            console.log('newCode ' + newCode)
            result += String.fromCharCode(newCode)
            console.log('da ::' + result)
        }
    }
    console.log(result)
    return result
}

console.log(decodeSecretCode('a2b3'))


// groupBy given Key ========

function groupBy(arr, key) {
    // Your implementation
    const final = {}
    for (let item of arr) {
        const keyval = item[key]

        if (!final.hasOwnProperty(keyval)) {
            final[keyval] = []
        }
        final[keyval].push(item)

    }

    return final
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
], 'age');




//reverseWords ===========
function reverseWords(sentence) {
    // Your implementation
    let op = ''
    const final = sentence.split(' ').map(item => {
        op += item.split('').reverse().join('') + ' '
    })

    console.log('da', op.trim())
}

//For the purpose of user debugging.
reverseWords("Hello World");


// validatePalindrome   =========
function validatePalindrome(str) {
    // Your implementation
    let f = str.replace(/[^a-zA-Z0-9]/g, '')
    let reversed = f.split('').reverse().join('')
    console.log(f, reversed)
    return f.toLowerCase() == reversed.toLowerCase()
}

//For the purpose of user debugging.
validatePalindrome("A man, a plan, a canal: Panama");

// reverseWords =========
function reverseWords(s) {
    if (!s || !s.length) return false

    const wrd = s.split(' ').reverse().join(' ')
    console.log(wrd)
    return wrd

}

reverseWords("the sky is blue")

// of - array Item
for (const val of [{ name: 'ali' }]) {
    console.log(val)
}

// in - array Index
for (const val in [{ name: 'ali' }]) {
    console.log(val)
}



// Custom Iterator =========

function customIterator(start = 0, end = Infinity, stepSize = 1) {

    let nextStart = start;
    let iteratonCount = 0;

    return {
        next() {
            let result;
            if (iteratonCount < end) {
                result = { value: nextStart, done: false };
                nextStart = nextStart + stepSize;
                iteratonCount++;
                return result
            }

            return { value: iteratonCount, done: true }
        }
    }
}

const myIterator = customIterator(0, 10);
let res = myIterator.next();

while (!res.done) {
    console.log(res.value);
    res = myIterator.next()

}



// flattenObject============
function flattenObject(obj = {}) {
    //write your implementation here

    var final = ""
    function helper(obj, parentKey) {
        Object.keys(obj).map(item => {
            const fullKey = parentKey ? `${parentKey}.${key}` : key
            if (typeof obj[item] == 'object') {
                helper(obj[item], fullKey)
            } else {
                final += `${fullKey} : ${obj[item]} \n`
            }
        })
    }
    helper(obj, "user")

    return final
}
let user = {
    name: "John",
    country: "India",
    address: {
        country: "India",
        state: "India",
        education: {
            school: "APS",
            year: 2021,
        },
    },
};
var final = flattenObject(user, 'user');
console.log(final)



// flatAnArray =========
function flatAnArray(arr) {
    let res = []
    function helper(a) {
        if (Array.isArray(a)) {
            a.map(item => helper(item))
        } else {
            res = [...res, a]
        }
    }

    helper(arr)
    return res;
}

const results = flatAnArray([1, 2, 3, [4, 5, , [5, 6, 7, 7], [8, 9, 9, [0], [1]]]])

console.log(results)




// ========Bubble Sort===========
const arr = [10, 8, 55, 9, 2, 1, 19, 5]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

console.log(arr)




//  ========rateLimiter===========

function rateLimiter(requests, limit, windowSize) {

    if (!requests || !requests.length) {
        return [];
    }

    const allowed = []
    const queue = []

    for (let i = 0; i < requests.length; i++) {
        let currentTime = requests[i];

        while (queue.length > 0 && queue[0] <= currentTime - windowSize) {
            queue.shift();
        }

        if (queue.length < limit) {
            allowed.push(i);
            queue.push(currentTime)
        }
    }
    return allowed
}

//  flattenObject========

function flattenObject(obj, parentKey = '', result = {}) {
    // Your implementation
    for (let key in obj) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key

        if (typeof obj[key] === 'object') {
            flattenObject(obj[key], fullKey, result)
        } else {
            result[fullKey] = obj[key]
        }
    }

    return result
}

const res = flattenObject({ a: { b: { c: 2 } }, d: { e: { f: { i: 7 } } } });
console.log(res)


// deepOmit ===========
function deepOmit(obj, keysToOmit) {
    // Your implementation

    for (let key in obj) {

        if (typeof obj[key] == 'object') {
            deepOmit(obj[key], keysToOmit)
        } else {

            if (key == keysToOmit) {
                delete obj[key];
            }

        }
    }

    return obj
}


const mainOb = { a: 1, b: { c: 2 } }
const res = deepOmit(mainOb, ['c']);
console.log(res)









