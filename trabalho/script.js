// Evento de envio do formulário
document.getElementById("curriculoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Pegando valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // Pegando múltiplas formações
    const formacoes = [];
    document.querySelectorAll("#formacoes-container textarea").forEach(campo => {
        if (campo.value.trim() !== "") {
            formacoes.push(campo.value.trim());
        }
    });

    const cursos = document.getElementById("cursos").value.trim();
    const experiencia = document.getElementById("experiencia").value.trim();

    // Validação
    if (!nome || !email || !telefone || formacoes.length === 0 || !experiencia) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    // Salvando no localStorage
    const dados = {
        nome,
        email,
        telefone,
        formacoes,
        cursos,
        experiencia
    };

    localStorage.setItem("curriculo", JSON.stringify(dados));

    // Redireciona
    window.location.href = "curriculo.html";
});


// ✅ Adicionar nova formação
function adicionarFormacao() {
    const container = document.getElementById("formacoes-container");

    const div = document.createElement("div");
    div.classList.add("formacao-item");

    div.innerHTML = `
        <textarea placeholder="Outra formação acadêmica"></textarea>
        <button type="button" class="btn-remover" onclick="removerFormacao(this)">−</button>
    `;

    container.appendChild(div);
}


// ✅ Remover formação (com proteção mínima)
function removerFormacao(botao) {
    const container = document.getElementById("formacoes-container");

    // Impede remover se for o último campo
    if (container.children.length === 1) {
        alert("É necessário pelo menos uma formação.");
        return;
    }

    botao.parentElement.remove();
}