const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const cart = [];

const products = [
    { id: 1, name: 'Producto 1', price: 20, imageUrl: 'img/Photo1.jpg' },
    { id: 2, name: 'Producto 2', price: 30, imageUrl: 'img/Photo2.jpg' },
    { id: 2, name: 'Producto 2', price: 40, imageUrl: 'img/Photo3.jpg' },
    // Agrega más productos según sea necesario
];

function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-text">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al Carrito</button>
            </div>
        `;
        card.style.backgroundImage = `url('${product.imageUrl}')`;
        productsContainer.appendChild(card);
    });
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);
    updateCart();
}

function updateCart() {
    cartContainer.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Llama a la función para mostrar productos cuando se carga la página
displayProducts();
