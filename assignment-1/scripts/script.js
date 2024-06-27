let Button = document.querySelector("button");
let Heading = document.querySelector("h4");

function Message() {
    const ageValue = Number(document.getElementById("age").value);
    const nameValue = document.getElementById("name").value
    if (ageValue >= 100 && ageValue <= 123) {
        Heading.textContent = `You're part of the Greatest Generation, ${nameValue}`;
    } else if (ageValue >= 79 && ageValue <= 99) {
        Heading.textContent = `You're part of the Silent Generation, ${nameValue}`;
    } else if (ageValue >= 60 && ageValue <= 78) {
        Heading.textContent = `You're part of the Baby Boomer Generation, ${nameValue}`;
    } else if (ageValue >= 45 && ageValue <= 59) {
        Heading.textContent = `You're part of Generation X, ${nameValue}`;
    } else if (ageValue >= 30 && ageValue <= 44) {
        Heading.textContent = `You're part of the Millenials Generation, ${nameValue}`;
    } else if (ageValue >= 12 && ageValue <= 29) {
        Heading.textContent = `You're part of Generation Z, ${nameValue}`;
    } else if (ageValue > 0 && ageValue <= 12) {
        Heading.textContent = `You're part of Generation Alpha, ${nameValue}`;
    }
}

Button.onclick = () => {
    Message();
};