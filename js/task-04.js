let counterValue = 0;
const counter = document.querySelector("#value");
const buttonFirst = document.querySelector('button[data-action="decrement"]');
buttonFirst.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
const buttonSecond = document.querySelector('button[data-action="increment"]');
buttonSecond.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
