// sidebar.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');

    const sidebarContent = `
        <a href="#stationary">כלי כתיבה</a>
        <a href="#notebooks">מחברות</a>
        <a href="#colors">צבעים ויצירה</a>
        <div class="devider"></div>
        <a href="payment.html" class="payment"> לתשלום 🛒</a>
    `;

    sidebar.innerHTML = sidebarContent;
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show"); 
}

