let contents = document.getElementsByClassName("contents");
let display = document.querySelector(".displayContent");
let result = document.querySelector(".result");

let displayValue = '';

Array.from(contents).forEach((v) => {
    v.addEventListener("click", () => {
        let item = v.innerText;
        if (item === 'AC') {
            displayValue = '';
            display.innerText = displayValue;
        } else {
            displayValue += item;
            display.innerText = displayValue;
        }
    });
});

result.addEventListener("click", () => {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch (e) {
        display.innerText = 'Error';
    }
});
