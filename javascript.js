/* =========================================
   1. LÓGICA DE MODALES (GLOBAL)
   ========================================= */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
        console.error("No se encontró el modal con ID:", modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reactiva el scroll
    }
}

// Cerrar si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Cerrar con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.project-modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        document.body.style.overflow = "auto";
    }
});

/* =========================================
   2. LÓGICA DE CARGA (DOM CONTENT LOADED)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- CURSOR PERSONALIZADO ---
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

        // Efecto hover en elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .tech-item, .close-btn');
        
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

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection){
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
