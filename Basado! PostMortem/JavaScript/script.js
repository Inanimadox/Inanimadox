const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart-content');
const totalProductsSpan = document.getElementById('total-products');
const cartTotalSpan = document.getElementById('cart-total');
const cart = [];

const products = [
    { id: 1, name: 'Silla De Escritorio Para estudio', price: 20, imageUrl: 'img/Photo1.jpg' },
    { id: 2, name: 'Silla de Comedor', price: 30, imageUrl: 'img/Photo2.jpg' },
    { id: 3, name: 'Silla Desplegable', price: 40, imageUrl: 'img/Photo3.jpg' },
    { id: 4, name: 'Silla Para Patios y Quinchos', price: 20, imageUrl: 'img/silla4.jpg' },

    { id: 5, name: 'Sillon Reposera', price: 30, imageUrl: 'img/sillon1.jpg' },
    { id: 6, name: 'Sillon Silla', price: 40, imageUrl: 'img/sillon2.jpg' },
    { id: 5, name: 'Sillon de Living', price: 30, imageUrl: 'img/sillon3.jpg' },
    { id: 6, name: 'cama', price: 40, imageUrl: 'img/Photo3.jpg' },


    { id: 5, name: 'Mesa Familiar', price: 30, imageUrl: 'img/mesa1.jpg' },
    { id: 6, name: 'Escritorio', price: 40, imageUrl: 'img/mesa2.jpg' },
    { id: 7, name: 'Mesa Pequeñas', price: 30, imageUrl: 'img/mesa3.jpg' },
    { id: 8, name: 'Mesa Redonda', price: 40, imageUrl: 'img/mesa4.jpg' }, 

    // Agrega más productos según sea necesario
];
function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <div class="product-text">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al Carrito</button>
        </div>
    `;
    card.style.backgroundImage = `url('${product.imageUrl}')`;
    return card;
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct);
    updateCart();
}

function updateCart() {
    cartContainer.innerHTML = '';
    let totalProducts = 0;
    let cartTotal = 0;

    cart.forEach(product => {
        const cartItem = createCartItem(product);
        cartContainer.appendChild(cartItem);

        totalProducts++;
        cartTotal += product.price;
    });

    totalProductsSpan.textContent = totalProducts;
    cartTotalSpan.textContent = cartTotal.toFixed(2);
}

function createCartItem(product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${product.name} - $${product.price.toFixed(2)}</p>
    `;
    return cartItem;
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
}

displayProducts(products);

displayProducts(products);

// Actualiza tu función de búsqueda en el archivo script.js
function searchProducts(query) {
    const filteredProducts = products.filter(product => {
        // Filtra los productos que contienen la cadena de búsqueda en su nombre
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    // Muestra los productos filtrados o todos los productos si la búsqueda está vacía
    displayProducts(query === '' ? products : filteredProducts);
}

// Actualiza la función displayProducts para aceptar una lista de productos
function displayProducts(productList) {
    productsContainer.innerHTML = '';
    productList.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Actualiza tu función de búsqueda en el archivo script.js
function searchProducts(query) {
    const filteredProducts = products.filter(product => {
        // Filtra los productos que contienen la cadena de búsqueda en su nombre
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    // Muestra los productos filtrados o todos los productos si la búsqueda está vacía
    displayProducts(query === '' ? products : filteredProducts);
}

// Actualiza la función displayProducts para aceptar una lista de productos
function displayProducts(productList) {
    productsContainer.innerHTML = '';
    productList.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Actualiza tu función de búsqueda en el archivo script.js
function searchProducts() {
    const query = document.getElementById('search-bar').value;
    const filteredProducts = products.filter(product => {
        // Filtra los productos que contienen la cadena de búsqueda en su nombre
        return product.name.toLowerCase().includes(query.toLowerCase());
    });

    // Muestra los productos filtrados o todos los productos si la búsqueda está vacía
    displayProducts(query === '' ? products : filteredProducts);
}

// Actualiza la función displayProducts para aceptar una lista de productos
function displayProducts(productList) {
    productsContainer.innerHTML = '';
    productList.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Llama a la función para mostrar productos cuando se carga la página
displayProducts(products);
