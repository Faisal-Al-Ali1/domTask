// Q1

fruits = [
    {
      name: "Apple",
      image: "./img/apple.jpg"
    },
    {
      name: "Banana",
      image: "./img/banana.jpeg"
    },
    {
      name: "Pinapple",
      image: "./img/pinapple.jpeg"
    },
    {
      name: "Grapes",
      image: "./img/Grape.jpeg"
    },
    {
      name: "Orange",
      image: "./img/orange.jpeg"
    }
  ];

  const fruitList = document.getElementById('list');

  fruits.forEach(fruit => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${fruit.image}" alt="${fruit.name}">
      <span>${fruit.name}</span>
    `;
    fruitList.appendChild(listItem);
  });


// Q2

function compare(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return alert(i);
    }
  }
  return alert(-1);
}
let first=[1,5,8]
compare(first,8);