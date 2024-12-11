const typingElement = document.getElementById("typing-effect");
const text = typingElement.textContent.trim(); // Obtém o texto entre as tags
typingElement.textContent = ""; // Limpa o conteúdo para iniciar o efeito
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;
        setTimeout(typeText, 100); // Controle a velocidade da digitação
    }
}

typeText();
