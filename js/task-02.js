/* Напиши скрипт, який для кожного елемента масиву ingredients:
1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас item.
4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientItem = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
};

const addIngredientsToDOM = (ingredients) => {
  const ingredientsItems = ingredients.map(createIngredientItem);
  ingredientsList.append(...ingredientsItems);
};

addIngredientsToDOM(ingredients);
