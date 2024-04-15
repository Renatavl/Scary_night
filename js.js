//код кажани
function pop (e) {
    let amount = 30;
    switch (e.target.dataset.type) {
        case 'shadow':
        case 'line':
        amount = 60;
        break;
    }
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = e.target.getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 30; i++) {
            createParticle(x, y, e.target.dataset.type);
        }
        } else {
        for (let i = 0; i < amount; i++) {
            createParticle(e.clientX, e.clientY, e.target.dataset.type);
        }
    }
}
function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = 300;
    let height = width;
    let destinationX = (Math.random() + 0.1) * (2000) && (Math.random() - 0.5) * (-5000);
    let destinationY = (Math.random() + 0.1) * (-700);
    let rotation = Math.random() * 0;
    let delay = Math.random() * 200;
    switch (type) {
        case 'logo':
        particle.style.backgroundImage = 'url(bet.gif)'; // Посилання на картинку
        break;
    }
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
            opacity: 0
        }
        ], {
        duration: Math.random() * 1000 + 5000, // Тривалість усіх проектів
        easing: 'cubic-bezier(0,0,0.58,1)',
        delay: delay
    });
    animation.onfinish = removeParticle;
}
function removeParticle (e) {
    e.srcElement.effect.target.remove();
}
if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
}