const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const binary = "01";
const columns = canvas.width / 15;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * 15, drops[i] * 15);

        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrixRain, 70);

// ... existing JavaScript ...

document.getElementById('copyEmailBtn').addEventListener('click', function() {
    const email = "info@meworks.io";  // Replace with your email
    const textarea = document.createElement('textarea');
    textarea.textContent = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Display the message
    const messageElement = document.getElementById('copyMessage');
    messageElement.textContent = `Copied email to your clipboard!`;
    
    // Optional: Hide the message after a few seconds
    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);
});
