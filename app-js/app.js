const button = document.getElementById('changeColorButton');
const body = document.body;

button.addEventListener('click', () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    body.style.backgroundColor = randomColor;
});

