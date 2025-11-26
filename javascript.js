document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. LÓGICA DE VENTANAS MODALES (POP-UPS)
       ========================================= */
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // Función para abrir el modal
    modalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el salto de página
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo
            }
        });
    });

    // Función para cerrar el modal con la X
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restaura el scroll
            });
        });
    });

    // Función para cerrar el modal haciendo clic fuera de la caja
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    /* =========================================
       2. LÓGICA DEL CURSOR PERSONALIZADO
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
        const interactiveElements = document.querySelectorAll('a, button, .tech-item');
        
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
       3. EFECTO SMOOTH SCROLL PARA NAVEGACIÓN
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
