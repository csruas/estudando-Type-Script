// tipos primitivos
alert("oi");
let valor = 3000;
let nome = "";
let ispago = false;
let qualquer = "";
// Arrays
const lista = [];
lista.push(13, 22.2, 22, 89, 1.58);
alert("oi12");
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Trasfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipotransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
console.log(novaTransacao);
