/* Weighted Lottery
Pseudo-Code:
x1. Build a function that takes in a list
x2. Find Object Values
3. Use Values to multiply the keys into a new list
4. Choose random item from that list as the output

Hints: Look into Bitwise operators??

*/

export const weights = {
    'win': 1,
    'break-even': 2,
    'lose': 5
}

export const weightedLottery = weightList => {
    let responses = [];
    const multipliers = Object.values(weightList);
    const results = Object.keys(weightList);
    for (i = 0; i < multipliers.length; i++) {
        let odds = [...Array(multipliers[i]).keys()]
        for (num in odds) {
            responses.unshift(results[i]);
        }
    }
    const spin = responses[Math.floor(Math.random() * responses.length)]
    return spin 
}

console.log(weightedLottery(weights))