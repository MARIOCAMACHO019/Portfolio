document.addEventListener('DOMContentLoaded', () => {
    
    // --- CURSOR FUTURISTA ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 80);
        });

        // Efecto hover
        const interactiveElements = document.querySelectorAll('a, button, .close-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = '#bc13fe'; 
                follower.style.width = '50px';
                follower.style.height = '50px';
                follower.style.borderColor = '#bc13fe';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = '#00f3ff'; 
                follower.style.width = '30px';
                follower.style.height = '30px';
                follower.style.borderColor = '#00f3ff';
            });
        });
    }

    // --- SCROLL SUAVE ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if(targetSection){
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
