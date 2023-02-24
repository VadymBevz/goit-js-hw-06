const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((eLement) => {
  const liEl = document.createElement("li");
  console.log(liEl);
  liEl.classList.add("item")
  liEl.textContent = eLement;
});

const list = document.querySelector(".ingredients");
list.appendChild(liEl);