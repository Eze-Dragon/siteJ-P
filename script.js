document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Hola desde JavaScript! La página se ha cargado completamente.');

    // Obtener referencias a los dos botones de WhatsApp
    const whatsappButton1 = document.getElementById('whatsappButton1');
    const whatsappButton2 = document.getElementById('whatsappButton2');
    // Obtener referencia al menú desplegable de servicios
    const serviceSelect = document.getElementById('serviceSelect');

    // Mensaje predefinido para WhatsApp
    let baseMessage = 'Hola, estoy visitando su página web y me gustaría obtener más información sobre sus servicios informáticos.';
    let currentService = ''; // Variable para almacenar el servicio seleccionado

    // Función para abrir WhatsApp con el número proporcionado y el mensaje actualizado
    const openWhatsApp = (phoneNumber) => {
        let fullMessage = baseMessage;
        if (currentService) {
            fullMessage += ` Estoy interesado en el servicio de ${currentService}.`;
        }
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
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

    // Lógica para el menú desplegable de servicios
    if (serviceSelect) {
        serviceSelect.addEventListener('change', (event) => {
            currentService = event.target.options[event.target.selectedIndex].text; // Obtiene el texto de la opción seleccionada
            if (event.target.value) { // Verifica que no sea la opción por defecto
                console.log(`Servicio seleccionado: ${currentService}`);
            } else {
                console.log('Ningún servicio seleccionado.');
                currentService = ''; // Resetea el servicio si se selecciona la opción por defecto
            }
        });
    } else {
        console.error('El menú desplegable con el ID "serviceSelect" no fue encontrado.');
    }
});
