import input from './input';

const findProductFromSumOfN = (input, n) => {
    if (input.length < 2 || !input || !n) {
        return "Provide appropriate parameters: Input must have at least two integers, and you must provide integer n."
    }

    let result;
    // iterate through input iterable (array) and find which two integers, if any, have a sum of n.
    // Brute force

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === n) {
                result = input[i] * input[j]
                console.log(input[i] + ' ' + input[j] + ' have the sum of ' + n + ' and have the product of ' + result)
                return result
            }
        }
    }

    if (!result) { return ("No integer pair from the provided input has the sum of " + n) }
}

// for the purposes of this advent's prompt
findProductFromSumOfN(input, 2020);