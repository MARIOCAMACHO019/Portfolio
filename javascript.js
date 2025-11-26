document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE MODALES (VENTANAS EMERGENTES) ---
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    // Abrir modal al hacer click en "Ver Detalles"
    modalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Evitar scroll
            }
        });
    });

    // Cerrar modal con la X
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Reactivar scroll
            });
        });
    });

    // Cerrar modal si haces click fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // --- CURSOR FUTURISTA ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Pequeño retraso para el seguidor
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Efecto hover en enlaces y botones
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = '#bc13fe'; // Cambia a rosa
            follower.style.width = '50px';
            follower.style.height = '50px';
            follower.style.borderColor = '#bc13fe';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = '#00f3ff'; // Vuelve a azul
            follower.style.width = '30px';
            follower.style.height = '30px';
            follower.style.borderColor = '#00f3ff';
        });
    });
});
