// This "grabs" all buttons on the page
/*const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Find the specific card that this button belongs to
        const card = btn.closest('.card');
        
        // Generate a random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background of ONLY that specific card
        card.style.backgroundColor = "#" + randomColor;
        
        // Change the button text
        btn.innerText = "Color Changed!";
    });
});*/
const buttons = document.querySelectorAll('.flip-btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Find the flipper element
        const flipper = btn.closest('.card-flipper');
        
        // Toggle the 'is-flipped' class
        flipper.classList.toggle('is-flipped');
    });
});