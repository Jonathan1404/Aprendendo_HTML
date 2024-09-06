function pesquisar(){
// Obtem a seção HTML os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

// regra if as () é a condição, e o que eu quero fazer fica em {}
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return;     
    }
        campoPesquisa = campoPesquisa.toLowerCase();

    // Inicia uma string vazia para armazenar os resultados
    let resultados = "";
    let descricao;
    let fabricante;
    let modelo;
    let tipo;
    
// intera sobre cada dado na lista de dados
    for (let dado of dados) {
        descricao = dado.descricao.toLowerCase()
        fabricante = dado.fabricante.toLowerCase()
        modelo = dado.modelo.toLowerCase()
        tipo = dado.tipo.toLocaleLowerCase()
// se titulo includes campoPesquisa
        if (descricao.includes(campoPesquisa) || fabricante.includes(campoPesquisa)) {
// cria um novo elemento
            resultados += `
               <div class="item-resultado"> 
                 <h2> 
                   <a href="#" target="_blank">${dado.descricao}
                   </a>
            </h2>
            <p class="descricao-meta">${dado.fabricante}
            </p>
            <a href=${dado.modelo} target="_blank">Saiba Mais
            </a>
        </div>    `
        console.log("resultados-pesquisa"); 
        }
       
    };
};



