// sidebar.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const productsContainer = this.getElementById('products-container')

    const sidebarContent = `
        <a href="#stationary">כלי כתיבה</a>
        <a href="#notebooks">מחברות</a>
        <a href="#colors">צבעים ויצירה</a>
        <div class="devider"></div>
        <a href="../HTML/payment-form.html" class="payment"> לתשלום 🛒</a>
    `;

    sidebar.innerHTML = sidebarContent;

    const footerDiv = document.getElementById('footer-container');

    const footerContent = `
       <footer>
            <div class="footer-child">
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-twitter"></i>
            </div>
            <div class="footer-child footer-Business-details" >
                <a href="../HTML/Business-details.html" id='a-Business-details'>- תנאים וצור קשר -</a>
            </div>
        </footer>
    `;

    footerDiv.innerHTML = footerContent;


    fetch('https://fakestoreapi.com/products')
        .then(Response => Response.json())
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
        })
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

