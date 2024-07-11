//Variáveis contendo quantidade de vitórias e derrotas.
let vitorias = 79;
let derrotas = 29;

//Função que executa a soma e a designação do ranking de acordo com resultado.
function resultadoRanking (vitorias, derrotas) {
    let calculoRanking = vitorias - derrotas
    let ranking = "";

    //Laço de repetição contendo o ranking para cada valor resultante.
    if (calculoRanking <= 10) {
        ranking = 'Ferro'
    } else if (calculoRanking <= 20) {
        ranking = 'Bronze'
    } else if (calculoRanking <= 50) {
        ranking = 'Prata'
    } else if (calculoRanking <= 80) {
        ranking = 'Ouro'
    } else if (calculoRanking <= 90) {
        ranking = 'Diamante'
    } else if (calculoRanking <= 100) {
        ranking = 'Lendário'
    } else {
        ranking = 'Imortal'
    }

    //Mensagem de retorno com o valor a ser guardado pelo função.
    return `O Herói tem de saldo de ${calculoRanking} está no nível de ${ranking}`

}

//Valor armazenado anteriormente sendo chamado à uso
let resultado = resultadoRanking (vitorias, derrotas);
console.log(resultado);
