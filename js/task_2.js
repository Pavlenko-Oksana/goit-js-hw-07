const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addListIngredients = document.querySelector("#ingredients");

addListIngredients.append(
  ...ingredients.map((ingredient) => {
    const liRef = document.createElement("li");
    liRef.textContent = ingredient;
    return liRef;
  })
);
console.log(addListIngredients);
