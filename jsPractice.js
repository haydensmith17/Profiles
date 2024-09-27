const string = "hayden"
const string1 = 'hayden'
const string2 = `hayden ${string}`
const number = 12345678910 + ""
const array = [1, 2, 3, 4, 5]
const array2 = ["apple", "banana", "orange"]
const bool = true
const object = {
    firstName: "hayden",
    lastName: "smith",
    age: 27,
    array2: ["apple", "banana", "orange"]

}

console.log(string)
console.log(string1)
console.log(string2)
console.log(number)
console.log(array[4])
// console.log(array2[0].length)
console.log(bool)
console.log(object.array2[1])




const hayden = {
    firstName: "hayden",
    lastName: "smith",
    age: 27,
    position: "oldest",
    food: ["subs", "fried chicken", "fries", "diet mt. dew"]
}
const cassidy = {
    firstName: "cassidy",
    lastName: "smith",
    age: 27,
    position: "oldest",
    food: ["steak", "jell-o", "gold fish", "coke zero"]
}
const elsie = {
    firstName: "elsie",
    lastName: "smith",
    age: 0.5,
    position: "oldest",
    food: ["milk", "sweet potatoes", "bananas", "milk"]
}
const brian = {
    firstName: "brian",
    lastName: "smith",
    age: 54,
    position: "second oldest",
    food: ["hamburgers", "pickles", "black liquorice", "diet coke"]
}
const jamey = {
    firstName: "jamey",
    lastName: "smith",
    age: 51,
    position: "second oldest",
    food: ["fish", "salad", "tomatoes", "coke zero"]
}


console.log(hayden.firstName)
console.log(hayden.food[2])

console.log(cassidy.firstName)
console.log(cassidy.food[2])

console.log(elsie.firstName)
console.log(elsie.food[2])

console.log(brian.firstName)
console.log(brian.food[2])

console.log(jamey.firstName)
console.log(jamey.food[2])


function mathCounter() {
    let num = 5
    return num / 5 + (10 + 12)
}

console.log(mathCounter())


function getMax1() {
    return {
        name: 'Max Headroom'
    }

}

function getMax2() {
    return { name: 'Max Headroom' }
}

console.log(getMax1())
console.log(getMax2())




// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// function Warrior(n){
//     Warrior = n;  
//     this.name = function(n){
//       if( n ) Warrior=n;
//       return Warrior;
//     }
//   }

//   Warrior.prototype.toString = function(n){
//       return "Hi! my name's "+this.name();
//   }

//  console.log(albert.toString())





const a = [1, 2, 3, 4, 5]
const b = a.map(e => e)
// const c = array2.filter(e => e === "banana")
const d = array2.reduce((a, b) => a + b, 0)
const e = a.map(e => {
    return e;
})

console.log(b)
// console.log(c)
console.log(d)
console.log(e)


// function practice(crappyPants) {
//     let a = []
//     crappyPants.forEach(element => {
//         a.push(element)
//     });
//     return a.filter(e => e === "fried chicken")
// }

// console.log(practice(hayden.food))




var ArrowFunc = (arr) => {
    return arr.map(e => String.fromCharCode(e)).join('');
}

console.log(ArrowFunc([84, 101, 115, 116]))



var people = [['bob', 'john'], ['bob', 'john', 'dave'], [], ['bob', 'john', 'dave', 'matt', 'alex']]

var Person = function (f) {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) { }
    }
    return person;
}


function fillFriends(params) {
    return params
}
console.log(Person(people))
console.log(fillFriends(people))



function yourFutureCareer() {
    var career = Math.random()
    if (career <= 0.32) {
        return "FrontEnd Developer"
    }
    else if (career <= 0.65) {
        return "BackEnd Developer"
    }
    else {
        return 'Full-Stack Developer'
    }
}


console.log(yourFutureCareer());


function findStrangeValue() {
    var x = NaN;
    x === x;
    return x;
}

console.log(findStrangeValue())



Math.roundTo = function (number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

let num = 3.14159;
let rounded = Math.roundTo(num, 2)

console.log(rounded)



var rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient',
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water',
        }
    }
}


let bob = {
    drinks: {
        ounces: 128,
        abv: .05,
    },
    weight: 205,
    sex: "Male",
    time: 2,
}

function bloodAlcoholContent(drinks, weight, sex, time) {

    if (sex == "female") {
        r = 0.66;
    } else {
        r = 0.73;
    }
    bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * r) - 0.015 * time;
    return Number(bac.toFixed(4));
}

console.log(bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, 'male', 1))

function countWords(str) {
    // Check if the string is empty or contains only whitespace
    if (str.trim() === '') {
        return 0;
    }
    return str.trim().split(/\s+/).length;
}

console.log(countWords(""))


function crap() {
    let w = []
    let a = [1, 2, 3, 4]
    const work = a.filter(b => b > 3)
    w.push(work)
    return w
}

console.log(crap())


//    function pushElement(arr){
//     var el=1;
//     //push el to arr

//     return arr.push(el)
//   }
//   function popElement(arr){
//     //pop an element from arr
//     var el=1;
//     return arr.pop(el)
//   }

//   console.log(pushElement([1,2,3]).length)
//   console.log(popElement())


var albert = new Warrior("Al")
var boris = new Warrior("Boris")

function Warrior(n) {
    this.name = n;
}

function newWarrior() {
    return "Hi! my name's " + this.name;
}

console.log(newWarrior(albert))


function greaterThanLessThan(a, b, c) {
    if (b + c > a) {
        return true
    }
    else {
        return false;
    }
}

console.log(greaterThanLessThan(3, 2, 1))


function whatNumberIsIt(n){
    switch(n){
        case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
        case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
        case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
        case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
        case Number(n) : return "Input number is " + n;
      default: return "Input number is Number.NaN";
    }
  }

console.log(whatNumberIsIt(1 / 0))
console.log(whatNumberIsIt(27))
console.log(whatNumberIsIt(1.7976931348623157e+308))
console.log(whatNumberIsIt(5e-324))
console.log(1 / 0)



function colorOf(r,g,b){
    let num1 = r.toString(16);
    let num2 = g.toString(16);
    let num3 = b.toString(16);
    return "#" + num1 + num2 + num3
  }

  console.log(colorOf(112, 205, 56))

  function colorOF(r,g,b) {
    let m = []
    let hexNum = [r, g, b];
    hexNum.forEach(e => {
        let hex = e.toString(16)
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        m.push(hex)
    })
    return "#" + m.join('');
  }

  console.log(colorOF(255,0,0))


  function howManySmaller(arr,n){
    let m = []
    arr.forEach(e => {
        let a = e.toFixed(2)
        if(a < n) {
            m.push(a)
        }
    })
    return m.length
  }

  console.log(howManySmaller([1.234,1.235,1.228],1.24))


  function cutIt(arr) {
    const shortest = arr.reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    }, arr[0]);
  
    return arr.map(str => str.substr(0, shortest.length));
  }
  

  console.log(cutIt(["ab","cde","fgh"]))
  


  function firstToLast(str,c){
    str.indexOf("o",5)
    return str.indexOf("a")
    
  }

  console.log(firstToLast("ababc","a"))
  console.log(firstToLast(str.indexOf("o",5)))