// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }



const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", function (e) {
  if (this.value.length === +this.dataset.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
    return
  }
  this.classList.add("invalid");
  this.classList.remove("valid");
})

// const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("blur", onBlur);
// function onBlur(e) {
//   const input1 = e.currentTarget;
//   const inputLength = Number(input1.dataset.length);
//   if (input1.value.length === inputLength) {
//     input1.classList.remove("invalid");
//     input1.classList.add("valid");
//   } else {
//     input1.classList.remove("valid");
//     input1.classList.add("invalid");
//   }
// }

// const textInput = document.querySelector('#validation-input');
// textInput.addEventListener('blur', event => {
//   if (event.target.value.length == textInput.getAttribute('data-length')) {
//     textInput.classList.add('valid')
//     if (textInput.classList.contains('invalid')) {
//       textInput.classList.remove('invalid')
//     }
//   } else {
//     if (textInput.classList.contains('valid')) {
//       textInput.classList.remove('valid')
//     }
//     textInput.classList.add('invalid')
//   }
// })