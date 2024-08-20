// Initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update the cart count in the navbar
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h3').textContent,
            price: parseInt(button.getAttribute('data-price')),
            image: button.parentElement.querySelector('img').src
        };

        // Add product to cart
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the cart count
        updateCartCount();

        alert(`${product.name} has been added to your cart.`);
    });
});

// Update cart count on page load
updateCartCount();
