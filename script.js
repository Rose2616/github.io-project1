let cart = [];

function addToCart(id, price, name) {
  const quantityInput = document.getElementById(`quantity${id}`);
  const quantity = parseInt(quantityInput.value);
  const totalPrice = price * quantity;

  const existingItemIndex = cart.findIndex(item => item.id === id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].totalPrice += totalPrice;
  } else {
    cart.push({ id, name, price, quantity, totalPrice });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);

  alert(`${quantity} ${name} added to cart.\nTotal items in cart: ${totalItems}\nTotal price: $${totalCartPrice}`);

  const modal = bootstrap.Modal.getInstance(document.querySelector(`#specs${id}Modal`));
  modal.hide();
}


