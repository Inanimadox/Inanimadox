const productsContainer = document.getElementById('products');

const products = [
    { id: 1, name: 'Producto 1', price: 20, imageUrl: 'img/Photo1.jpg' },
    { id: 2, name: 'Producto 2', price: 30, imageUrl: 'img/Photo2.jpg' },
    // Agrega más productos según sea necesario
];

// Función para mostrar productos en tarjetas
function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        card.onmouseover = function() {
            this.querySelector('.product-image').style.filter = 'brightness(80%)';
        };
        card.onmouseout = function() {
            this.querySelector('.product-image').style.filter = 'brightness(100%)';
        };
        productsContainer.appendChild(card);
    });
}

// Función para añadir productos al carrito
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    // Aquí puedes agregar la lógica para añadir el producto al carrito
    // Por ejemplo, puedes usar un array para almacenar los productos en el carrito
    // y luego actualizar el contenido del elemento con id "cart"
}

// Llama a la función para mostrar productos cuando se carga la página
displayProducts();
