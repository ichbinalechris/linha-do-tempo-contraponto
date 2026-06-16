document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.note-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const contentBox = document.getElementById(targetId);

            // Opcional: Se quiser que apenas uma nota fique aberta por vez, 
            // desinale as linhas abaixo:
            /*
            document.querySelectorAll('.timeline-content').forEach(box => {
                if(box.id !== targetId) box.classList.remove('show');
            });
            document.querySelectorAll('.note-button').forEach(btn => {
                if(btn !== button) btn.classList.remove('active');
            });
            */

            // Alterna a classe para mostrar/esconder o texto
            contentBox.classList.toggle('show');
            
            // Alterna o estilo visual da nota musical ativa
            button.classList.toggle('active');
        });
    });
});
