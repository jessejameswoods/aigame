const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById("userGuess").value;
    attempts++;

    if (userGuess == randomNumber) {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${attempts} attempts!`;
    } else if (userGuess > randomNumber) {
        document.getElementById("result").innerHTML = "Too high! Try again.";
    } else {
        document.getElementById("result").innerHTML = "Too low! Try again.";
    }
}
