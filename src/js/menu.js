document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuButton = document.querySelector('.md\\:hidden');
    const menu = document.getElementById('menu'); // Selecciona el div del menú

    // Agregar evento de clic al botón de menú
    toggleMenuButton.addEventListener('click', function() {
        menu.classList.toggle('hidden'); // Alternar la visibilidad del menú
    });

    // Obtener todos los elementos del menú y agregar evento de clic a cada uno
    const menuItems = document.querySelectorAll('.md\\:hidden ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            const targetSectionId = item.getAttribute('href'); // Obtener el ID de la sección

            // Desplazar al usuario a la sección correspondiente
            document.querySelector(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });

            menu.classList.add('hidden'); // Ocultar el menú después de redirigir al usuario
        });
    });

    // Agregar evento de clic al documento para cerrar el menú si se hace clic fuera del menú
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggleButton = toggleMenuButton.contains(event.target);

        // Si el clic no está dentro del menú ni en el botón de alternar, ocultar el menú
        if (!isClickInsideMenu && !isClickOnToggleButton) {
            menu.classList.add('hidden');
        }
    });
});
