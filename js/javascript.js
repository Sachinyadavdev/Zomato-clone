// Smooth scroll to sections (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when a user clicks 'Order Now' (as an example interaction)
const orderButtons = document.querySelectorAll('.restaurant-card button');
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for ordering from this restaurant!");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero-section p');

    // Function to check if element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Event listener to add the animation class when in viewport
    window.addEventListener('scroll', function () {
        if (isInViewport(heroText)) {
            heroText.style.animationPlayState = 'running'; // Ensures animation triggers when visible
        }
    });
});


// Adding functionality to the 'Order Now' buttons in the Popular Dishes section
const dishOrderButtons = document.querySelectorAll('.dish-card button');

dishOrderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Your dish has been added to the cart!");
    });
});


// Smooth scrolling for footer links
document.querySelectorAll('.footer-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
