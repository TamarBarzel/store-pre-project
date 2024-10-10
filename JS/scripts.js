// sidebar.js
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');

    const sidebarContent = `
        <a href="#stationary">כלי כתיבה</a>
        <a href="#notebooks">מחברות</a>
        <a href="#colors">צבעים ויצירה</a>
        <div class="devider"></div>
        <a href="../HTML/payment-form.html" class="payment"> לתשלום 🛒</a>
    `;

    sidebar.innerHTML = sidebarContent;
});


// footer.js
document.addEventListener('DOMContentLoaded', function () {
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
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show"); 
}

