function forgive() {
    const apologySection = document.querySelector('.apology-section');
    const message = document.createElement('p');
    message.innerText = "Thank you for forgiving me! I promise to make things better.";
    message.classList.add('thank-you-message');
    apologySection.appendChild(message);
  }
// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const photos = document.querySelectorAll('.photo-card img');
const close = document.querySelector('.close');

photos.forEach(photo => {
  photo.addEventListener('click', function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
  });
});

close.addEventListener('click', function() {
  lightbox.style.display = 'none';
});
// Scroll Animation for Timeline Items
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (itemPosition < screenPosition) {
        item.classList.add('active');
      }
    });
  });
// Function to prompt for password and redirect
function showPasswordPrompt() {
    const password = prompt("Please enter the password:");
    if (password === "chichuuu") {
      window.location.href = "private-gallery.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
      