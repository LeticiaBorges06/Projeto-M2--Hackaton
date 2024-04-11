document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de Cadastro
    const registerBtn = document.getElementById('register');
    // Adiciona um evento de clique ao botão de Cadastro
    registerBtn.addEventListener('click', function (event) {
        // Previne o comportamento padrão do botão (neste caso, para seguir o link)
        event.preventDefault();
        // ele simula o redirecionamento para a página de cadastro
    });

    // Seleciona o botão de Entrar como Visitante
    const visitorBtn = document.getElementById('visitor');
    // Adiciona um evento de clique ao botão de Entrar como Visitante
    visitorBtn.addEventListener('click', function (event) {
        // Previne o comportamento padrão do botão (neste caso,para seguir o link)
        event.preventDefault();
        // ele Simula o login como visitante
    });
});