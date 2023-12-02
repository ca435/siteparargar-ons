function adicionarSabor(idMesa) {
    var sabor = prompt("Qual sabor de pizza você deseja adicionar?");
    if (sabor !== null && sabor !== "") {
      var ulSabores = document.getElementById('sabores-' + idMesa);
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(sabor));
      ulSabores.appendChild(li);
    }
  }
  function imprimirSabores() {
    // Recupera o ID da mesa selecionada
    var mesaSelecionada = prompt("Digite o ID da mesa:");

    // Recupera os sabores da mesa selecionada
    var saboresMesa = document.getElementById('sabores-' + mesaSelecionada);
    var sabores = saboresMesa.getElementsByTagName('li');

    // Cria uma nova janela para imprimir os sabores
    var novaJanela = window.open('', '_blank');
    novaJanela.document.write('<html><head><title>Sabores da Mesa</title></head><body>');
    novaJanela.document.write('<h1>Sabores da Mesa ' + mesaSelecionada + '</h1>');
    novaJanela.document.write('<ul>');
    for (var i = 0; i < sabores.length; i++) {
      novaJanela.document.write('<li>' + sabores[i].innerHTML + '</li>');
    }
    novaJanela.document.write('</ul>');
    novaJanela.document.write('</body></html>');

    // Imprime a nova janela
    novaJanela.print();
  }