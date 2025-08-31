// =========================
// Part 1: Variables & Conditionals
// =========================
let userName = "Sadik";
let userAge = 25;

if (userAge >= 18) {
  document.getElementById("userOutput").textContent = 
    `Hello ${userName}, you are an adult.`;
} else {
  document.getElementById("userOutput").textContent = 
    `Hello ${userName}, you are not yet an adult.`;
}

// =========================
// Part 2: Functions
// =========================

// Function to calculate square of a number
function square(num) {
  return num * num;
}

// Function to format a string
function greet(name) {
  return `Welcome, ${name}!`;
}

// Using the functions
let num = 5;
let name = "Sadik";
document.getElementById("functionOutput").textContent = 
  `Square of ${num} is ${square(num)}. ${greet(name)}`;

// =========================
// Part 3: Loops
// =========================
const fruits = ["Apple", "Banana", "Cherry"];
const loopList = document.getElementById("loopList");

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Fruit ${i+1}: ${fruits[i]}`;
  loopList.appendChild(li);
}

// Using while loop
let count = 1;
while (count <= 3) {
  let li = document.createElement("li");
  li.textContent = `Number ${count}`;
  loopList.appendChild(li);
  count++;
}

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Change text content on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dynamicContent").textContent = "Text has been changed!";
});

// 2. Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  const div = document.getElementById("dynamicContent");
  if (div.style.backgroundColor === "yellow") {
    div.style.backgroundColor = "";
  } else {
    div.style.backgroundColor = "yellow";
  }
});

// 3. Dynamically create elements
for (let i = 1; i <= 3; i++) {
  let p = document.createElement("p");
  p.textContent = `Dynamic paragraph ${i}`;
  document.getElementById("dynamicContent").appendChild(p);
}
