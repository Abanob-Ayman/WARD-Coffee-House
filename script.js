
// =================================
// WARD COFFEE HOUSE
// JAVASCRIPT
// =================================


// PRODUCT BUTTONS

function addItem(itemName) {

    alert(
        itemName + " selected successfully!"
    );

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}


// CLOSE MOBILE NAVBAR AFTER CLICKING

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const navbarCollapse = document.getElementById("mainNavbar");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                );

            bsCollapse.hide();

        }

    });

});


// NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector(".ward-navbar");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});
