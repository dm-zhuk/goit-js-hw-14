/* Напиши скрипт, який:
1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.  */

const list = document.querySelector("#categories");
const itemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElements.length}`); // Number of categories: 3

const firstItemElement = list.firstElementChild;
const lastItemElement = list.lastElementChild;
const listItemElements = Array.from(list.children);

listItemElements.forEach((item) => {
  const title = item.querySelector("h2");
  const itemsList = item.querySelectorAll("ul li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Number of elements: ${itemsList.length}`);
});

// Category: Animals
// Number of elements: 4
// Category: Products
// Number of elements: 3
// Category: Technologies
// Number of elements: 5
