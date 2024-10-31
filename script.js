document.title = "counter";
let counter = 0;

function increment() {
  counter++;
  document.getElementById("count-el").innerText = counter;
}

function saveValue() {
  document.getElementById("values").innerText += " " + counter + " - ";
  counter = 0;
  document.getElementById("count-el").innerText = counter;
}

function expelStudent() {
  if (counter > 0) {
    counter--;
  }
  document.getElementById("count-el").innerText = counter;
  document.getElementById("container").background = "#FF0000";
}

function reset() {
  counter = 0;
  document.getElementById("count-el").innerText = counter;
}
