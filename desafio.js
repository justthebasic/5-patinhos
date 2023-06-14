const n = (max) => {
    return Math.floor(Math.random() * max);
}

const criarParagrafo = (texto) => {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    return paragrafo;
};

const criarQuebraDeLinha = () => {
    const quebraDeLinha = document.createElement("br");
    return quebraDeLinha;
};

const musica = () => {
    let nPatinhos = n(10);
    
    let refrao = [
        `${nPatinhos} patinho`,
        "Foram passear",
        "Além das montanhas",
        "Para brincar",
        "A mamãe gritou",
        "Quá, quá, quá, quá",
        `${nPatinhos === 2 ? 'Mas nenhum patinho' : `Mas só ${nPatinhos - 1} patinho${nPatinhos > 2 ? 's' : ''}`}`,
        `${nPatinhos < 2 ? 'Voltou de lá' : 'Voltaram de lá'}`,
    ];
    
    let final = [
        "A mamãe patinha foi procurar",
        "Além das montanhas",
        "Na beira do mar",
        "A mamãe gritou",
        "Quá, quá, quá, quá",
        `E os ${nPatinhos} patinhos`,
        `${nPatinhos === 1 ? 'Voltou de lá' : 'Voltaram de lá'}`,
    ];
    
    const textoElemento = document.getElementById("texto");
    textoElemento.innerHTML = ""; // Limpa o conteúdo anterior
    
    textoElemento.appendChild(criarQuebraDeLinha());
    
    for (let i = nPatinhos; i >= 1; i--) {
        refrao[0] = `${i} patinho${i > 1 ? 's' : ''}  `;
        refrao[1] = `${i > 1 ? 'Foram passear' : 'Foi passear'}  `;
        refrao[6] = `${i === 1 ? 'Mas nenhum patinho' : `Mas só ${i - 1} patinho${i > 2 ? 's' : ''}`}`;
        refrao[7] = `${i > 1 ? 'Voltaram de lá' : 'Voltou de lá'}  `;
        
        
        refrao.forEach((linha) => {
            const paragrafo = criarParagrafo(linha);
            textoElemento.appendChild(paragrafo);
        });
        
        textoElemento.appendChild(criarQuebraDeLinha());
    }
    
    final.forEach((linha) => {
        const paragrafo = criarParagrafo(linha);
        textoElemento.appendChild(paragrafo);
    });
    
    textoElemento.appendChild(criarQuebraDeLinha());
};

const botao = document.getElementById("myBtn");
botao.addEventListener("click", function() {
    musica();
});