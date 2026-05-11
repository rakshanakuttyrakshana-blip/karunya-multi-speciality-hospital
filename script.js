const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Appointment form → WhatsApp
function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const department = document.getElementById('department').value;
  const date = document.getElementById('date').value;

  const message =
    'Appointment Request:%0A%0A' +
    'Name: ' + name + '%0A' +
    'Phone: ' + phone + '%0A' +
    'Department: ' + department + '%0A' +
    'Preferred Date: ' + date;

  // Replace this number with your hospital WhatsApp number
  window.open(
    'https://wa.me/919876543210?text=' + message,
    '_blank'
  );
}
// EXISTING JavaScript delete pannama, கீழே இந்த code-ஐ மட்டும் add pannunga

// EXISTING JavaScript delete pannama, கீழே இந்த code-ஐ மட்டும் add pannunga

const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}