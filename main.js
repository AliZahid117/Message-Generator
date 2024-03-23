let goodMessages = ["You can do this!", "One day at a time!", "Failing fast means learning fast!", "If my mind can conceive it, and my heart can believe it, then I can achieve it. - Muhammad Ali"]
//console.log(goodMessages); // to test array

function getRandomElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }

    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Return the element at the randomly generated index
    return arr[randomIndex];
}

// To go through the array and randomly output:
const randomElement = getRandomElement(goodMessages);
console.log(randomElement); // Output: Random element from the array
