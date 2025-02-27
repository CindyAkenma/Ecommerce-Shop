// Toggle description visibility
function toggleDescription(button) {
    const descriptionText = button.previousElementSibling.previousElementSibling;
    if (descriptionText.style.display === "none" || descriptionText.style.display === "") {
        descriptionText.style.display = "block";
        button.textContent = "Hide Description";
    } else {
        descriptionText.style.display = "none";
        button.textContent = "Description";
    }
}

// Redirect to WhatsApp for purchase
function purchase(productName, price) {
    const message = `Hello Beauty Products Shop, I want to purchase ${encodeURIComponent(productName)} for GHC ${price}.`;
    const whatsappLink = `https://wa.me/233551972704?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
});