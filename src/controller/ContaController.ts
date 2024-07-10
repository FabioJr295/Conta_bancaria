import { conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Coleção Array qye vai armazenar os objetos conta
    private listaContas: Array<conta> = new Array<conta>();

    // Controlar os numeros das contas
    public numero: number = 0;


    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
        console.log("\nA conta não foi encontrada!");
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    atualizar(conta: conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta foi atualizada!");
        }else
        console.log("\nA conta não foi encontrada!");
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA conta foi excluída!");
        }else
        console.log("\nA conta foi excluída!");
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true)
            console.log("\nO saque foi efetuado com sucesso!");
        }else
        console.log("\nA conta não foi encontrada!");
    
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor);
            console.log("\nO depósito foi efetuado com sucesso!");
        }else
        console.log("\nA conta não foi encontrada!");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaorigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if(buscaContaorigem !== null && buscaContaDestino !== null){
            if(buscaContaorigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
            console.log("\nA transferencia foi efetuada com sucesso!");
            }
        }else
        console.log("\nA conta de origem e/ou destino não foram encontradas!");
    }
    

    // Métodos auxiliares

    public gerarNumero(): number{
    return ++ this.numero;
}

    public buscarNoArray(numero: number): conta | null{

        for(let conta of this.listaContas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }

}