// Smooth Scroll for Navigation
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 50
      });
    });
  });
  

  // Initialize AOS 
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Animate only once
    });
