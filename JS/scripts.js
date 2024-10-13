document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const productsContainer = document.getElementById('products-container'); 

    const sidebarContent = `
        <a href="index.html?category=all" data-category="all">כל המוצרים</a>
        <a href="index.html?category=electronics" data-category="electronics">אלקטרוניקה</a>
        <a href="index.html?category=jewelery" data-category="jewelery">תכשיטים</a>
        <a href="index.html?category=men's clothing" data-category="men's clothing">בגדי גברים</a>
        <a href="index.html?category=women's clothing" data-category="women's clothing">בגדי נשים</a>
        <div class="devider"></div>
        <a href="../HTML/payment-form.html" class="payment">לתשלום 🛒</a>
    `;

    sidebar.innerHTML = sidebarContent;
    const links = sidebar.querySelectorAll('a[data-category]');

    function fetchProducts(category) {
        productsContainer.innerHTML = ''; 

        const apiUrl = category === 'all' 
            ? 'https://fakestoreapi.com/products' 
            : `https://fakestoreapi.com/products/category/${category}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
                    let productCard = document.createElement('div');
                    productCard.classList.add('product-card');

                    let productImg = document.createElement('img');
                    productImg.src = product.image;
                    productCard.appendChild(productImg);

                    let productName = document.createElement('h3');
                    productName.textContent = product.title;
                    productCard.appendChild(productName);

                    let productPrice = document.createElement('p');
                    productPrice.textContent = `Price: $${product.price}`;
                    productCard.appendChild(productPrice);

                    productsContainer.appendChild(productCard);
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';

    links.forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active'); 
        }
        
        link.addEventListener('click', function (event) {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active'); 
        });
    });

    fetchProducts(category);

});

document.addEventListener('DOMContentLoaded', function () {
    
    
    // footer
    const footerDiv = document.getElementById('footer-container');
    const footerContent = `
       <footer>
            <div class="footer-child">
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
            </div>
            <div class="footer-child footer-Business-details">
                <a href="../HTML/Business-details.html" id='a-Business-details'>- תנאים וצור קשר -</a>
            </div>
        </footer>
    `;
    
    footerDiv.innerHTML = footerContent;
})

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); 
}