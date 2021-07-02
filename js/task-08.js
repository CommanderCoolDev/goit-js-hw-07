const divEl = document.getElementById('controls'),
 inputEl = document.querySelector('input'),
 createBtn = document.querySelector('button[data-action="render"]'),
 destrBtn = document.querySelector('button[data-action="destroy"]'),
 boxesDiv = document.getElementById('boxes');

let count = 0;
const inputCount = function (event) {
    count = event.curentTarget.value;
 };
