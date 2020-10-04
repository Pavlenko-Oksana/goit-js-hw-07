const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const incrementBtn = document.querySelector("[data-action= increment]");
const decrementBtn = document.querySelector("[data-action= decrement]");

const counterValue = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});
