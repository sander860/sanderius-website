function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Payment successful 💳\nThanks for your order!");

  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}
