//Botón de WhatsApp
document.addEventListener("DOMContentLoaded", function() {
    
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    
    btnWhatsapp.addEventListener("click", function() {
        // Número del Chifa Restaurant SUMAWA
        const numeroTelefono = "51987654321"; 
        const mensaje = "Hola Chifa SUMAWA, quisiera hacer un pedido de: ";
        
        // Enlace de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        
        // Abrir en una nueva pestaña
        window.open(urlWhatsApp, "_blank");
    });

});