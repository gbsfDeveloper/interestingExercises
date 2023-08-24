
// Write your own function to reverse a string
// Execute the function below for verification.  
// Note the signature of the expected function.
function reverseStringOld(myString){
    const charArray = myString.split('');
    const orderedCharArray = charArray.reverse();
    return orderedCharArray.join('');
}

function reverseString(myString){
    var charArray = myString.split('');
    let responseArray = [];
    
    while (charArray.length > 0) {
        const selectChar = charArray.shift();
        responseArray.unshift(selectChar);
    }

    const reverseArray = charArray.reduce((accumulator, currentValue) => {
        // console.log("accumulator");
        // console.log(accumulator);
        // console.log("currentValue");
        // console.log(currentValue);
        accumulator.unshift(currentValue)
        return accumulator;
    }, responseArray);
    
    const reverseArrayNew = charArray.reduceRight((accumulator, currentValue) => {
        // console.log("accumulator");
        // console.log(accumulator);
        // console.log("currentValue");
        // console.log(currentValue);
        accumulator.push(currentValue)
        return accumulator;
    }, responseArray);
    
    // console.log("sumWithInitial");
    // console.log(sumWithInitial);

    return reverseArrayNew.join('');
}

function testReverse() {
    console.log(reverseString("aabbb")); //bbbaa
    console.log(reverseString("a")); //a
    console.log(reverseString("abcdef")); // fedcba
}

testReverse();