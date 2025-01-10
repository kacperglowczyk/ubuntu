const button = document.getElementById('changeColorButton');
const greeting = document.getElementById('greeting');
const body = document.body;

// Fetch message from database
async function fetchMessage() {
    try {
        const response = await fetch('/api/message');
        const data = await response.json();
        greeting.textContent = data.text;
    } catch (error) {
        console.error('Error fetching message:', error);
        greeting.textContent = 'Error loading message';
    }
}

// Load message when page loads
fetchMessage();

// Color change functionality
button.addEventListener('click', () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    body.style.backgroundColor = randomColor;
});