const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const unknownUser = outputEl.textContent;
inputEl.addEventListener('input', () =>
    inputEl.value.length === 0 ? outputEl.textContent = unknownUser : outputEl.textContent = inputEl.value
);




