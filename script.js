const isBigNumber = (num) => {
    if (num > 100){
        return true;
    }
    else {
        return false;
    }
}

console.log(isBigNumber(101));
console.log(isBigNumber(100));
console.log(isBigNumber(65));


const brenda = (maxPeople, currentPeople, age) => {
    if (age<21){
        return "this is a club for adults"
    }
    if (maxPeople > currentPeople){
        return "come in"
    }
    return "it's too busy now, come back later"
}

console.log(brenda(100, 95, 18));
console.log(brenda(100, 100, 26));
console.log(brenda(100, 65, 26));

const calcAverage = (num1, num2, num3, num4, num5) => {
    const average = (num1 + num2 + num3 + num4 + num5) / 5;
    return Math.round(average);
}

console.log(calcAverage(1,2,3,4,5));
console.log(calcAverage(1,1,1,1,1));
console.log(calcAverage(2,4,6,8,10));
console.log(calcAverage(1,3,5,7,9));