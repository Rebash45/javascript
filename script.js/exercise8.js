//FizzBuzz challenge
let fizzBuzz = function (n) {

    const array = []
    for (i = 1; i <= n; i++) {
        if (i % 15 === 0) arr.push("FizzBuzz")
        else if (i % 3 === 0) array.push("Fizz")
        else if (i % 5 === 0) array.push("Buzz")
        else array.push(i.toString())
    }
    return array

};
console.log(fizzBuzz(15))