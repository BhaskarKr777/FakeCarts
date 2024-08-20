let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Display Cart Items
function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price}</p>
                <button class="remove-from-cart-btn" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        total += item.price;
    });

    cartTotal.textContent = total;
}

// Remove from Cart functionality
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart-btn')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
});

// Display cart items on page load
displayCartItems();
