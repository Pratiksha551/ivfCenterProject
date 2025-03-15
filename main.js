const words = ["Families.", "Dreams.", "Miracles.", "Smile."];
let wordIndex = 0;
let charIndex = 0;
const animatedWordElement = document.querySelector(".animated-word");

function typeText() {
    if (charIndex < words[wordIndex].length) {
        animatedWordElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        animatedWordElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    animatedWordElement.innerHTML = ""; // Ensure it's empty before starting
    typeText();
});



