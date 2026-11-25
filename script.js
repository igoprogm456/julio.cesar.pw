document.addEventListener("DOMContentLoaded", () => {
    const gabarito = {
        q1: "D",
        q2: "B",
        q3: "A",
        q4: "D",
        q5: "C"
    };

    const form = document.getElementById("quiz-form");
    const resultadoContainer = document.getElementById("resultado-container");
    const textoNota = document.getElementById("texto-nota");
    const avisoBloqueio = document.getElementById("status-aviso");

    
    const notaSalva = localStorage.getItem("julioCesar_nota");

    if (notaSalva !== null) {
        bloquearFormulario(notaSalva);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let acertos = 0;
        let totalQuestoes = Object.keys(gabarito).length;

        
        for (let questao in gabarito) {
            const respostaSelecionada = form.querySelector(`input[name="${questao}"]:checked`);
            if (respostaSelecionada) {
                if (respostaSelecionada.value === gabarito[questao]) {
                    acertos++;
                }
            }
        }

        
        const notaFinal = (acertos / totalQuestoes) * 10;

        
        localStorage.setItem("julioCesar_nota", notaFinal.toFixed(1));

        
        bloquearFormulario(notaFinal.toFixed(1));
    });

    function bloquearFormulario(nota) {
        
        form.style.display = "none";
        
        
        avisoBloqueio.style.display = "block";
        resultadoContainer.style.display = "block";

        
        textoNota.innerHTML = `Sua nota final foi: <span style="color: var(--cor-dourado);">${nota}</span> / 10`;
    }
});
