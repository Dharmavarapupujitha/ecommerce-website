let products = [
  { id: 1, name: "T-Shirt", price: 299 },
  { id: 2, name: "Shoes", price: 999 },
  { id: 3, name: "Backpack", price: 499 },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  let container = document.getElementById("products");
  if (!container) return;
  products.forEach((product) => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function displayCart() {
  let container = document.getElementById("cart-items");
  let total = 0;
  if (!container) return;
  container.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `<p>${item.name} - ₹${item.price} <button onclick="removeItem(${index})">Remove</button></p>`;
  });
  document.getElementById("total").textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  alert("Order Placed!");
  localStorage.removeItem("cart");
  location.reload();
}

window.onload = function () {
  displayProducts();
  displayCart();
};
