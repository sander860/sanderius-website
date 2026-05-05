function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - €${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total: €" + total;
}

renderCart();
