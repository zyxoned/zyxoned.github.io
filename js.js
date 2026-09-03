const img = document.getElementById('heroImg');
let targetRot = 0;
let currentRot = 0;
const lag = 0.3275;

document.addEventListener('mousemove', (e) => {
    const center = window.innerWidth / 2;
    const offset = (e.clientX - center) / center;
    targetRot = offset * 15;
});

function animate() {
    currentRot += (targetRot - currentRot) * lag;
    img.style.transform = `rotateY(${currentRot}deg)`;
    requestAnimationFrame(animate);
}

animate();
