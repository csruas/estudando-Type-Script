// tipos primitivos
alert("oi");
var valor = 3000;
var nome = "";
var ispago = false;
var qualquer = "";
// Arrays
var lista = [];
lista.push(13, 22.2, 22, 89, 1.58);
alert("oi12");
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Trasfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
var novaTransacao = {
    tipotransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
console.log(novaTransacao);
