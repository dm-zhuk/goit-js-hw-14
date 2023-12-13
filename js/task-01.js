/* Напиши скрипт, який:
1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.  */

const items = document.querySelectorAll("#categories .item");
console.log("Number of categories:", items.length); // Number of categories: 3 //

items.forEach((item) => {
  let title = item.querySelector("h2").textContent;
  let elements = item.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", elements);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// calcNumberOfCategories;

// const items = document.getElementsByClassName("item");
