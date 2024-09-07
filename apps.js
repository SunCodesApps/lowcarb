function pesquisar() {
  // Seleciona o container onde os resultados serão exibidos
  const containerTecnologias = document.getElementById('tecnologias');

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

  // Inicializa as variáveis para armazenar os resultados e partes do HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada objeto na lista de dados
  for (let dado of dados) {
    // Converte o título e a descrição para minúsculas para facilitar a comparação
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    // Verifica se o título ou a descrição contém a palavra-chave pesquisada
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Cria um novo elemento HTML com as informações da tecnologia encontrada
      resultados += `<div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao} <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a></p>
      </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    // Se não houver resultados, exibe uma mensagem informativa
    containerTecnologias.innerHTML = `<p>Não foi encontrado nenhum resultado para: ${campoPesquisa}</p>`;
  } else {
    // Se houver resultados, substitui o conteúdo do container pelos resultados da pesquisa
    containerTecnologias.innerHTML = resultados;
  }
}