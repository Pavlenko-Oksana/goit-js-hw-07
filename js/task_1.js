const menyItemByCategories = document.querySelectorAll(".item");
const quantity = menyItemByCategories.length;
const mesage = `В списке ${quantity} категорий.`;
console.log(mesage);

const textContentCategories = document.querySelectorAll(".item");

textContentCategories.forEach((element) =>
  console.log(
    "Категория:",
    element.firstElementChild.textContent,
    "Количество елементов:",
    element.lastElementChild.children.length
  )
);
