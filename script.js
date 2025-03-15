// Hamburger Menu for Mobile Navigation
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header .container').appendChild(hamburger);

const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close Hamburger Menu When Clicking Outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonial Carousel (Using Slick Carousel)
$(document).ready(function () {
  $('.testimonials-grid').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission (replace with actual API call)
  alert(`Thank you for subscribing! We'll send updates to ${email}.`);
  emailInput.value = ''; // Clear the input field
});

// Email Validation Function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Scroll-Triggered Animations
document.addEventListener('DOMContentLoaded', () => {
 const animatedElements = document.querySelectorAll('.animate-on-scroll');

 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('animated');
       observer.unobserve(entry.target); // Stop observing after animation
     }
   });
 }, { threshold: 0.5 });

 animatedElements.forEach(element => {
   observer.observe(element);
 });
});

// Ripple Effect for Buttons
document.addEventListener('DOMContentLoaded', () => {
 const buttons = document.querySelectorAll('.btn');

 buttons.forEach(button => {
   button.addEventListener('click', (e) => {
     const ripple = document.createElement('span');
     ripple.classList.add('ripple');
     const rect = button.getBoundingClientRect();
     const size = Math.max(rect.width, rect.height);
     ripple.style.width = ripple.style.height = `${size}px`;
     ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
     ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
     button.appendChild(ripple);

     // Remove ripple after animation
     ripple.addEventListener('animationend', () => {
       ripple.remove();
     });
   });
 });
});

// Chatbot Functionality
document.addEventListener('DOMContentLoaded', () => {
 const chatbotContainer = document.querySelector('.chatbot-container');
 const chatbotToggleBtn = document.querySelector('.chatbot-toggle-btn');
 const closeBtn = document.querySelector('.close-btn');
 const sendBtn = document.querySelector('#send-btn');
 const chatbotInput = document.querySelector('#chatbot-input');
 const chatbotMessages = document.querySelector('.chatbot-messages');

 // Toggle Chatbot
 chatbotToggleBtn.addEventListener('click', () => {
   chatbotContainer.classList.toggle('active');
 });

 // Close Chatbot
 closeBtn.addEventListener('click', () => {
   chatbotContainer.classList.remove('active');
 });

 // Send Message
 sendBtn.addEventListener('click', () => {
   sendMessage();
 });

 chatbotInput.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
     sendMessage();
   }
 });

 function sendMessage() {
   const userMessage = chatbotInput.value.trim();
   if (userMessage) {
     // Add User Message
     const userMessageElement = document.createElement('div');
     userMessageElement.classList.add('message', 'user-message');
     userMessageElement.textContent = userMessage;
     chatbotMessages.appendChild(userMessageElement);

     // Clear Input
     chatbotInput.value = '';

     // Simulate Bot Response
     setTimeout(() => {
       const botMessageElement = document.createElement('div');
       botMessageElement.classList.add('message', 'bot-message');
       botMessageElement.textContent = getBotResponse(userMessage);
       chatbotMessages.appendChild(botMessageElement);

       // Scroll to Bottom
       chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
     }, 500);
   }
 }

 // Simple Bot Response Logic
 function getBotResponse(userMessage) {
   const lowerCaseMessage = userMessage.toLowerCase();

   if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
     return 'Hello! How can I assist you today?';
   } else if (lowerCaseMessage.includes('property')) {
     return 'We have a wide range of properties available. Would you like to see our listings?';
   } else if (lowerCaseMessage.includes('car')) {
     return 'We offer both new and used cars. What type of car are you looking for?';
   } else if (lowerCaseMessage.includes('contact')) {
     return 'You can reach us at +1 (123) 456-7890 or info@example.com.';
   } else {
     return 'I’m sorry, I didn’t understand that. Can you please rephrase?';
   }
 }
});

// Initialize Google Map
function initMap() {
 // Define the location (latitude and longitude)
 const location = { lat: 37.7749, lng: -122.4194 }; // Replace with your location

 // Create a map centered at the location
 const map = new google.maps.Map(document.getElementById('map'), {
   zoom: 14, // Adjust the zoom level
   center: location,
   styles: [
     {
       featureType: 'all',
       elementType: 'labels.text.fill',
       stylers: [{ color: '#ffffff' }], // Light text
     },
     {
       featureType: 'all',
       elementType: 'labels.text.stroke',
       stylers: [{ color: '#000000' }], // Dark outline
     },
     {
       featureType: 'poi',
       elementType: 'geometry',
       stylers: [{ color: '#2a2a2a' }], // Dark background for points of interest
     },
     {
       featureType: 'road',
       elementType: 'geometry',
       stylers: [{ color: '#1a1a1a' }], // Dark roads
     },
     {
       featureType: 'water',
       elementType: 'geometry',
       stylers: [{ color: '#000000' }], // Dark water
     },
   ],
 });

 // Add a marker at the location
 new google.maps.Marker({
   position: location,
   map: map,
   title: 'Our Location', // Replace with your location name
 });
}