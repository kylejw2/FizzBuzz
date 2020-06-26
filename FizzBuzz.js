for (let i = 1; i < 100; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (str !== "") console.log(str);
}

let i = 1;
while (i < 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
    i++;
}


const printFizzBuzz = input => {
    let str = "";
    if (input % 3 === 0) str += "Fizz";
    if (input % 5 === 0) str += "Buzz";
    return str !== "" ? console.log(str) : false;
}

let j = 1;
do {
    printFizzBuzz(j);
    j++;
} while (j < 100);