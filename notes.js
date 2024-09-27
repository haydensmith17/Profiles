// Quiz
const h = "hayden"
const sum = 1 + 5 + 9
const q = {
    cat: "Blob",
    dog: 7 + 2 + 3 + 4 + 5,
}
const arr1 = [1, 2, 3]

function R() {
    return 15
}

console.log(R())

function T() {
    const d = "donut"
    return d.length
}

console.log(T())

function W(arr) {
    let m = arr.map(x => {
        return x
    })
    return m
}

console.log(W(arr1))

function P(frog) {
    return frog.dog
}

console.log(P(q))

function w(arr) {
    let m = []
    arr.forEach(element => {
        m.push(element)
    });
    return m
}

console.log(w(arr1))

function D(arr1) {
    let d = arr1.reduce((e, i) => {
        return e - i
    })
    return d
}

console.log(D(arr1))


function a(weather) {
    if (weather === "rainy") {
        return `dont forget your umbrella`
    }
    else if (weather === "sunny") {
        return `its a great day for some arsen`
    }
    else if (weather === "cloudy") {
        return `womp womp`
    }
    else {
        return `try again tomorrow`
    }
}

console.log(a("rainy").slice(0, 1))
console.log(a("sunny"))
console.log(a("cloudy"))
console.log(a("snowy"))


function bigWeather(weather) {
    return weather === "rainy" ? "dont forget your umbrella" : 
    weather === "sunny" ? "its a great day for some arsen":
    weather === "cloudy" ? "womp womp":
    "try again tomorrow"
}

console.log(bigWeather("rainy"))
console.log(bigWeather("snowy"))


function add(a, b){
  
	return a+"" === b+"" ? +b : false
}

console.log(add(1, "1"))
console.log(add(1, 1))




const array23 = [1, 2, 3, 4, 5]
const array24 = ["apple", "orange", "banana", "pear"]
function cucumber(array23) {
    let m = []
    array23.forEach(element => {
        m.push(element + 1)
    })
    return m;
}

function zuccini(array23) {
    let m = array23.map(i => {
        return i + 1
    })
    return m;
}

function whatever() {
    return array23.map(i => i + 1)
}

function squash(array23) {
    let m = []
    array23.forEach(e => {
        if(e < 5) {
            m.push(e)
        }
    })
    return m
}

function crap(array23) {
    let m = array23.filter(e => {
        return e < 5
    })
    return m
}

function broccoli() {
    let m = 0
    array23.forEach((e) => {
       m += e
    })
    return m
}

function carrots() {
    let m = array24.map(i => {
        return 'the '+ i
    })
    return m
}

function peas() {
    let m = array24.map(e => {
        return +(e.length) + 5
    })
    return m.reduce((i, o)=> i + o).toString().split("").splice(0, 1).length === 1 ? null : m
}


console.log(cucumber(array23))
console.log(zuccini(array23))
console.log(whatever())
console.log(squash(array23))
console.log(crap(array23))
console.log(broccoli())
console.log(carrots())
console.log(peas())



function firstToLast(str,c){
    let x = str.lastIndexOf(c)-str.indexOf(c)
    return x
  }

  console.log(firstToLast("ababc", "a"))