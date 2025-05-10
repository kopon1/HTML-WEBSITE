// Add a subtle hover effect for the styles
document.querySelector('.fireship-style').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.transition = 'transform 0.3s ease-in-out';
});

document.querySelector('.fireship-style').addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

document.querySelector('.money-style').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.transition = 'transform 0.3s ease-in-out';
});

document.querySelector('.money-style').addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

// Add subtle background animation
const container = document.querySelector('.container');
let mouseMoveTimeout;

document.addEventListener('mousemove', function(e) {
    clearTimeout(mouseMoveTimeout);
    
    // Create a subtle gradient that follows the mouse
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    
    document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #1a1a1a, #0f0f0f)`;
    document.body.style.transition = 'background 0.5s ease';
    
    mouseMoveTimeout = setTimeout(() => {
        document.body.style.background = '#0f0f0f';
    }, 3000);
}); 