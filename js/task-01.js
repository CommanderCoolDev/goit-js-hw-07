'use strict';

const categoryEl = document.getElementById('categories'),
    h2El = document.querySelectorAll('h2'),
    listItemEl = document.querySelectorAll('.item');
/*------------Categories----------*/
console.log(`В списке ${categoryEl.children.length} категории.`);
/*-------------Animals-----------*/
// console.log(`Категория : ${h2El[0].textContent}`);-------two lines
// console.log(`Количество елементов ${listItemEl[0].children[1].children.length}`);-----two lines
/*----------------one line---------------*/
console.log(`В Категории ${h2El[0].textContent} находится ${listItemEl[0].children[1].children.length} елемента`);

/*------------------Products----------------*/
console.log(`В Категории ${h2El[1].textContent} находится ${listItemEl[1].children[1].children.length} елемента`);

/*-------------------Technologies-----------*/
console.log(`В Категории ${h2El[2].textContent} находится ${listItemEl[2].children[1].children.length} елементов`);



