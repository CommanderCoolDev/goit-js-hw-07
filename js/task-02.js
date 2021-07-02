const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulEl = document.getElementById('ingredients');

const liElArr = ingredients.map((item) => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  return liEl;

});
ulEl.append(...liElArr);
