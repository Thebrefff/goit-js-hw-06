const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listArr = document.querySelector('#ingredients');
const newArr = [];

ingredients.forEach(ingredient => {
const item = document.createElement("li");
item.className = 'item';
item.textContent = ingredient;
newArr.push(item);
listArr.append(...newArr);
});





