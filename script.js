document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const revealElements = document.querySelectorAll(".reveal");

    // 1. Welcome Splash Screen Transition
    setTimeout(() => {
        welcomeScreen.classList.add("hidden");
        document.body.classList.remove("loading");
        
        // Trigger initial visible panes right after welcome screen fades
        revealOnScroll();
    }, 2300);

    // 2. Scroll Reveal Observer for All Windows/Panes
    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    function revealOnScroll() {
        revealElements.forEach((el) => revealObserver.observe(el));
    }

    // 3. Mobile Hamburger Menu Toggle
    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});