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
console.log(multiplesOfThreeOrFive());