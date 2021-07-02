const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const imgEl = document.querySelector('#gallery');

// const liArr = images.map(item =>
//   `<li class="item">
// <img src="${item.url}" alt="${item.alt}">
//   </li>`
// );
// imgEl.insertAdjacentHTML('beforeend', liArr.join(""));
// console.log(imgEl);

/*------reduce?--------*/
// const liArr2 = images.reduce((acc, item) =>
// acc + `<li class="item">
// <img src="${item.url}" alt="${item.alt}">
//   </li>`,
// );
// imgEl.insertAdjacentHTML('beforeend', liArr2);
const galleryEl = document.querySelector('#gallery');
const makeImagesList = images.map((item) => {
  return `<li class="item"><img src="${item.url}" alt="${item.alt}"></li>`;
});

galleryEl.insertAdjacentHTML('afterbegin', makeImagesList.join(""));
console.log(galleryEl);


