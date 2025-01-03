let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

// Responsive Swiper Slider

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { // Adjust for smaller screens (e.g., mobile)
            slidesPerView: 1,
        },
        768: { // Adjust for tablets (e.g., iPad)
            slidesPerView: 2,
        },
        1024: { // Adjust for larger screens (e.g., desktops)
            slidesPerView: 3,
        },
    },
});




// Scroll Functionality 

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Menu Toggle Functionality

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Search Bar Functionality

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Login Form Functionality

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Video Slider Functionality

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// for Ragistration Valiadtion 
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Successful submission message
    alert("Registration successful! Welcome, " + name + ".");
  });

  
//   Forgot password
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get email field value
    const email = document.getElementById("email").value;
  
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Successful submission message
    alert("If this email is registered, a password reset link will be sent.");
  });
  