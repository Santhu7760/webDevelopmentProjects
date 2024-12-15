let container = document.querySelector(".container");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    let name = prompt("Enter Name: ");
    let contact = prompt("Enter Phone Number: ");

    // 1. Validate that the name is not only numbers
    if (!isNaN(name)) {
        alert("Invalid name! Name cannot be just numbers.");
        return;
    }

    // 2. Validate that the contact number contains only numbers and has exactly 10 digits
    if (!/^\d{10}$/.test(contact)) {
        alert("Invalid phone number! Please enter a 10-digit number without any letters or special characters.");
        return;
    }

    // 3. Create the new elements
    let div = document.createElement("div");
    let heading = document.createElement("h2");
    let paragraph = document.createElement("p");

    heading.append(name);
    paragraph.append(contact);

    div.append(heading);
    div.append(paragraph);

    container.append(div);

    // 4. Sort names alphabetically
    sortNames();

    // 5. Additional functionality: Automatically capitalize the first letter of the name
    heading.textContent = capitalizeFirstLetter(name);
});

// Function to capitalize the first letter of each word in the name
function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, char => char.toUpperCase());
}

// Function to sort names alphabetically within the container
function sortNames() {
    let divs = Array.from(container.querySelectorAll("div"));
    divs.sort((a, b) => a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent));
    
    divs.forEach(div => container.appendChild(div));
}

// Optional Additional Functionality: Clear all entries
let clearButton = document.createElement("button");
clearButton.textContent = "Clear All";
clearButton.style.marginTop = "10px";
container.append(clearButton);

clearButton.addEventListener("click", () => {
    container.querySelectorAll("div").forEach(div => div.remove());
});
