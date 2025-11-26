document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. LÓGICA DEL CURSOR PERSONALIZADO
       ========================================= */
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    // Mueve el cursor y el seguidor
    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            // Posición exacta del punto central
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Pequeño retraso para el círculo grande (efecto fluido)
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 80);
        });

        // Efecto hover sobre enlaces y botones
        const interactiveElements = document.querySelectorAll('a, button, .tech-item, .close-btn');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = '#bc13fe'; // Cambia a rosa
                follower.style.width = '50px';
                follower.style.height = '50px';
                follower.style.borderColor = '#bc13fe';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = '#00f3ff'; // Vuelve a azul cian
                follower.style.width = '30px';
                follower.style.height = '30px';
                follower.style.borderColor = '#00f3ff';
            });
        });
    }

    /* =========================================
       2. EFECTO SMOOTH SCROLL PARA NAVEGACIÓN
       ========================================= */
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

/* =========================================
   3. FUNCIONES DE MODALES (GLOBALES)
   ========================================= */

// Función para abrir un modal específico
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
    }
}

// Función para cerrar un modal específico
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reactiva el scroll
    }
}

// Cerrar modal si se hace clic fuera del contenido (en el fondo oscuro)
window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Tecla ESC para cerrar cualquier modal abierto
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.project-modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        document.body.style.overflow = "auto";
    }
});
