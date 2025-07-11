const produse = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop bun",
    price: 4500,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Telefon",
    description: "Smartphone",
    price: 2500,
    image: "https://via.placeholder.com/200"
  }
];

const container = document.getElementById("produse");

produse.forEach(p => {
  const div = document.createElement("div");
  div.className = "produs";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p>${p.description}</p>
    <strong>${p.price} lei</strong>
  `;
  container.appendChild(div);
});
