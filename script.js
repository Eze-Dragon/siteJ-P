document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Hola desde JavaScript! La página se ha cargado completamente.');

    // Obtener referencias a los dos botones de WhatsApp
    const whatsappButton1 = document.getElementById('whatsappButton1');
    const whatsappButton2 = document.getElementById('whatsappButton2');

    // Mensaje predefinido para WhatsApp
    const message = 'Hola, estoy visitando su página web y me gustaría obtener más información sobre sus servicios informáticos.';

    // Función para abrir WhatsApp con el número proporcionado
    const openWhatsApp = (phoneNumber) => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    // Configurar el primer botón
    if (whatsappButton1) {
        whatsappButton1.addEventListener('click', () => {
            // Número para el primer contacto: 3758-419583 con prefijo 549 para WhatsApp
            openWhatsApp('5493758419583');
        });
    } else {
        console.error('El botón con el ID "whatsappButton1" no fue encontrado.');
    }

    // Configurar el segundo botón
    if (whatsappButton2) {
        whatsappButton2.addEventListener('click', () => {
            // Número para el segundo contacto: 3764-699977 con prefijo 549 para WhatsApp
            openWhatsApp('5493764699977');
        });
    } else {
        console.error('El botón con el ID "whatsappButton2" no fue encontrado.');
    }
});
