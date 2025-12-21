document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL MENÚ MÓVIL ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            if (navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }
        });
    }

    // --- LÓGICA DE PESTAÑAS (ESTATUTOS) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if(tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. Quitar clase 'active' de todos los botones y contenidos
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // 2. Añadir clase 'active' al botón clicado
                btn.classList.add('active');

                // 3. Mostrar el contenido correspondiente (basado en data-tab)
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
});
