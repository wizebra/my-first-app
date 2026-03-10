// 1. Grab the elements from the page
const btn = document.getElementById('magic-btn');
const card = document.querySelector('.card');

// 2. Add an "Event Listener" to wait for a click
btn.addEventListener('click', () => {
    
    // 3. Generate a random "HSL" color (Hue, Saturation, Lightness)
    // We keep Saturation at 70% and Lightness at 90% for a nice pastel look
    const randomHue = Math.floor(Math.random() * 360);
    const newColor = `hsl(${randomHue}, 70%, 90%)`;
    
    // 4. Change the background color of the card
    card.style.backgroundColor = newColor;
    
    // 5. Update the button text
    btn.innerText = "✨ Magic Activated!";
    
    // 6. Log it to the console (the developer's secret diary)
    console.log("New background color is: " + newColor);
});