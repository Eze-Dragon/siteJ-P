document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Hola desde JavaScript! La página se ha cargado completamente.');

    const whatsappButton = document.getElementById('whatsappButton');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            // Número de WhatsApp al que quieres redirigir
            // Formato para Argentina: 549 seguido del código de área sin 0 y el número sin 15.
            const phoneNumber = '5493764699977'; // Este es el número 3764-699977 con prefijo 549 para WhatsApp
            const message = 'Hola, estoy visitando su página web y me gustaría obtener más información sobre sus servicios informáticos.';

            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappLink, '_blank');
        });
    } else {
        console.error('El botón con el ID "whatsappButton" no fue encontrado.');
    }
});