const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach((eLement) => {
  const liEl = document.createElement("li");
  console.log(liEl);
  liEl.classList.add("item")
  liEl.textContent = eLement;
  list.appendChild(liEl);
});


