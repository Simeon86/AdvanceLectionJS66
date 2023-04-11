const calSumByLegs = (chickens, cows, pigs) => {
    let totalLegCount = chickens * 2 + cows * 4 + pigs * 4;
    return totalLegCount * 5000;
}

console.log(calSumByLegs(1, 1, 1))

console.log('///////////////////////////////////////////////////////////////////////////////////')

const arrayOne = [1,2,3,4,5,6,7,8];
const arrayTwo = [1,4,7,4,5,7,9,1];

const uniqueNumbersFromArray = (primaryArray, secondaryArray) => {
    return primaryArray.filter(number => !secondaryArray.includes(number))
}

console.log(uniqueNumbersFromArray(arrayOne, arrayTwo))

console.log('/////////////////////////////////TWO nested loops//////////////////////////////////////////////////')

const uniqueNumbersFromArray1 = (primaryArray, secondaryArray) => {
    const uniqueNumbers = [];

    for(let i = 0; i < primaryArray.length; i++){
        let flag = false;
        
        for(let j = 0; j < secondaryArray.length; j++){
            if(primaryArray[i] === secondaryArray[j]){
                flag = true;
            }
        }
        if(!flag)
            uniqueNumbers.push(primaryArray[i])
    }
    return uniqueNumbers;
}

console.log(uniqueNumbersFromArray1(arrayOne, arrayTwo))

console.log('///////////////////////////////////////////////////////////////////////////////////')

const isJackpot = reelArray => {
    return new Set(reelArray).size == 1
}

console.log(isJackpot([2, 2, 2, 2]))
console.log(isJackpot([2, 2, 2, 1]))

console.log('///////////////////////////////////////////////////////////////////////////////////')

const isJackpot1 = reelArray => {
    let item = reelArray[0];
    return reelArray.every(element => item === element);
}

console.log(isJackpot1([2, 2, 2, 2]))
console.log(isJackpot1([2, 2, 2, 1]))

console.log('///////////////////////////////////////////////////////////////////////////////////')

const isJackpot2 = reelArray => {
    let item = reelArray[0];
    let isUnique = false;

    for(let i = 0; i < reelArray.length; i++){
        if(item !== reelArray[i]){
            isUnique = true;
        }
        return !isUnique;
    }
}

console.log(isJackpot2([2, 2, 2, 2]))
console.log(isJackpot2([2, 2, 2, 1]))

console.log('///////////////////////////////////////////////////////////////////////////////////')

const isJackpot3 = reelArray => {
    if(reelArray[0] === reelArray[1] && reelArray[1] === reelArray[2] && reelArray[2] === reelArray[3])
        return true;
    else
        return false;
}

console.log(isJackpot3([2, 2, 2, 2]))
console.log(isJackpot3([2, 2, 2, 1]))
