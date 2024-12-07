document.addEventListener("DOMContentLoaded", () => {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.style.position = 'fixed';
    chatbotContainer.style.bottom = '100px';
    chatbotContainer.style.right = '20px';
    chatbotContainer.style.width = '300px';
    chatbotContainer.style.height = '400px';
    chatbotContainer.style.border = '1px solid #ddd';
    chatbotContainer.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    chatbotContainer.style.borderRadius = '8px';
    chatbotContainer.style.overflow = 'hidden';
    chatbotContainer.style.background = '#fff';
    chatbotContainer.style.display = 'none'; // Initially hidden
    chatbotContainer.innerHTML = `
        <iframe 
            src="https://your-chatbot-url.com" 
            width="100%" 
            height="100%" 
            frameborder="0">
        </iframe>
    `;

    const toggleButton = document.createElement('div');
    toggleButton.classList.add('floating-button', 'chatbot-button');
    toggleButton.innerHTML = `<img src="assets/icons/logo.png" alt="Chat">`; // Path to your chatbot icon

    toggleButton.addEventListener('click', () => {
        chatbotContainer.style.display =
            chatbotContainer.style.display === 'none' ? 'block' : 'none';
    });

    document.body.appendChild(toggleButton);
    document.body.appendChild(chatbotContainer);
});
