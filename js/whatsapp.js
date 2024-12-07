document.addEventListener("DOMContentLoaded", () => {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/7479073541?text=Hello!%20I%20have%20a%20query.";
    whatsappBtn.target = "_blank";
    whatsappBtn.classList.add('floating-button', 'whatsapp-button');

    const whatsappIcon = document.createElement('img');
    whatsappIcon.src = "assets/icons/logo.png"; // Path to your WhatsApp icon
    whatsappIcon.alt = "WhatsApp";

    whatsappBtn.appendChild(whatsappIcon);
    document.body.appendChild(whatsappBtn);
});
