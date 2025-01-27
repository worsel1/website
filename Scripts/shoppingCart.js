let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product} - £${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.innerText = `Total: £${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert('Checkout loading');
}
