import input from './input';

const findProductFromThreeIntsSumOfN = (input, n) => {
    if (input.length < 3 || !input || !n) {
        return "Provide appropriate parameters: Input must have at least two integers, and you must provide integer n."
    }

    let result;
    // iterate through input iterable (array) and find which three integers, if any, have a sum of n.
    // Brute force

    for (let i = 0; i < input.length - 2; i++) {
        for (let j = i + 1; j < input.length - 1; j++) {
            for (let k = j + 1; k < input.length; k++) {
                if (input[i] + input[j] + input[k] === n) {
                    result = input[i] * input[j] * input[k]
                    console.log(input[i] + ', ' + input[j] + ', and ' + input[k] + ' have the sum of ' + n + ' and have the product of ' + result)
                    return result
                }
            }
        }
    }

    if (!result) { return ("No three integers from the provided input have the sum of " + n) }
}

// for the purposes of this advent's prompt
findProductFromThreeIntsSumOfN(input, 2020);