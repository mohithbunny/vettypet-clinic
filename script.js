// Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
  
  // Open Modal on Home Visit Click
  // document.getElementById('bookingModal').style.display = 'none';

  function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
  }

  function openModal() {
    document.getElementById('bookingModal').style.display = 'block';
  }
  
  // Submit Form
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const reason = document.getElementById('reason').value;
    const datetime = document.getElementById('datetime').value;
  
    // WhatsApp Message
    const message = `Booking Request:
  Name: ${name}
  Email: ${email}
  Address: ${address}
  Reason: ${reason}
  Date & Time: ${datetime}`;
  
    const whatsappURL = `https://wa.me/918639479217?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  
    alert("Booking submitted! You'll be contacted shortly.");
    closeModal();
  });
  
