// tipos primitivos
alert("oi");
let valor: number = 3000;
let nome: string = "";
let ispago: boolean = false;
let qualquer : any = "";

// Arrays
const lista: number[] = [];
lista.push(13, 22.2, 22, 89, 1.58);

//Tipos Personalizados( Type Alias)
// com este tipo type eu garanto que o objeto sera desta forma com seus atributos 
type Transacao = {
    tipotransacao: TipoTransacao;
    data: Date;
    valor: number;
}

alert("oi12");

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Trasferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}
const novaTransacao: Transacao = {
    tipotransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
}

console.log(novaTransacao);

