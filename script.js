const btnGravador = document.getElementById("btn-gravador");
const statusGravacao = document.getElementById("status-gravacao");

// Captura evento de pressionar o botão do gravador
btnGravador.addEventListener("mousedown", () => {
    btnGravador.style.backgroundColor = "#e74c3c";
    btnGravador.textContent = "🔴 Gravando... Não solte!";
    statusGravacao.textContent = "Status: Capturando áudio...";
});

// Quando o usuário pressionar o botão
btnGravador.addEventListener("pointerdown", () => {
    btnGravador.style.backgroundColor = "#e74c3c";
    btnGravador.textContent = "🔴 Gravando... Não solte!";

    statusGravacao.textContent = "Status: Capturando áudio...";
});

// Quando o usuário soltar o botão
btnGravador.addEventListener("mouseup", () => {
    btnGravador.style.backgroundColor = "#3498db";
    btnGravador.textContent = "🎤 Clique e Segure para Gravar";

    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
});

        // Caso o toque seja cancelado (ex: chamada no celular)
btnGravador.addEventListener('pointercancel', () => {
  resetarBotao();
});