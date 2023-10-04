//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i >= 5 && i <= 100;i++) {
        console.log(i);
    }
}



const multiplesOfThree = () => {
    for (i = 3; i <=100; i ++){
        if (i % 3 === 0){
            console.log(i)
        }
    }
}

const multiplesOfThreeOrFive = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThreeOrFive();

const untilNum = (num) => {
    for (let i = 1; i <= num; i++ ){
        console.log(i)
    }
}
untilNum(5);

const multiply = (multi1, multi2) => {
    return multi1 * multi2;
}

console.log(multiply(2,3));


const add = (add1, add2) => {
    if (add1 != add2){
        return add1 + add2
    }
    else {
        return (add1 + add2) * 3
    }
}
console.log(add(3,2))

const isNegative = (testNum) => {
    if (testNum < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(27));

const triangleArea = (base, height) => {
    return (base * height) / 2
}
console.log(triangleArea(8,6))

const betweenTwentyAndFourty = (between) => {
    if (between >= 20 && between <= 40) {
        return true;
    } else {
        return false;
    }
}

console.log(betweenTwentyAndFourty(25))

const largest = (int, int2, int3) => {
    if (int > int2 && int > int3){
        return int
      }
      else if (int2 > int && int2 > int3){
        return int2
      }
      else if (int3 > int && int3 > int2){
        return int3
      }
      else {
        return int4
      }
    }
    console.log(largest(12,2,3))
    
