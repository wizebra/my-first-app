const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // Find the flipper for the specific card this button belongs to
        const flipper = btn.closest('.card-flipper');
        
        // Flip the card!
        flipper.classList.toggle('is-flipped');
    });
});

// Optional: Logic for the 'Send Now' button
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message simulation sent! In a real app, this would go to your email.");
});