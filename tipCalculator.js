//range Bar
// const input = document.querySelector(".rangeInput");
// const value = document.querySelector("#value");
// value.textContent = input.value;
// input.addEventListener("input", (event) => {
//   value.textContent = event.target.value;
// });

//Tip Amount Bar
// const wpisz = document.querySelector('.numberInput');
// const wyswietl = document.querySelector('#value2');
// const showNumber = () => {
//   wyswietl.textContent = wpisz.value * input.value/100;
// }
// wpisz.addEventListener("input", showNumber);


//range Bar 
const input = document.querySelector(".rangeInput");
const input2 = document.querySelector(".numberInput");

const value = document.querySelector("#value"); //procent obok range
const value2 = document.querySelector("#value2"); //value na dole w pasku 1
const value3 = document.querySelector("#value3"); //value na dole w pasku 2

value.textContent = input.value;
value2.textContent = input2.value;
value3.textContent = input2.value;

function calculateResult() {
  const percentage = input.value / 100;
  const result = percentage * input2.value;
  const result2 = Number(result) + Number(input2.value); // czemu number
  value2.textContent = result.toFixed(2);
  value3.textContent = result2.toFixed(2);
}

input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  calculateResult()

});
input2.addEventListener("input", (event) => {
  value2.textContent = event.target.value;
  value3.textContent = event.target.value;
  calculateResult()
});











