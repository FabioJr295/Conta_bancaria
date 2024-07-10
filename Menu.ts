import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta corrente', 'Conta poupança'];

    const contas: ContaController = new ContaController();

    // Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Fabio Seripieri', 1000000.00, 100000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'Julia Rodrigues', 1000.00, 100));

    // Novas Instâncias da Classe Poupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, 'Camila Ribeiro', 2523443.00, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 3214, 2, 'Rafael Nogueira', 2523443.00, 10));

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta, "╔═══════════════════════════════════════════════════╗");
        console.log("  ║                                                   ║");
        console.log("  ║                    NULL BANK                      ║");
        console.log("  ║                                                   ║");
        console.log("  ╚═══════════════════════════════════════════════════╝");
        console.log("  ╔═══════════════════════════════════════════════════╗");
        console.log("  ║            1 - Criar Conta                        ║ ");
        console.log("  ║            2 - Listar todas as Contas             ║ ");
        console.log("  ║            3 - Buscar Conta por Numero            ║ ");
        console.log("  ║            4 - Atualizar Dados da Conta           ║ ");
        console.log("  ║            5 - Apagar Conta                       ║ ");
        console.log("  ║            6 - Sacar                              ║ ");
        console.log("  ║            7 - Depositar                          ║ ");
        console.log("  ║            8 - Transferir valores entre Contas    ║ ");
        console.log("  ║            9 - Sair                               ║ ");
        console.log("  ╚═══════════════════════════════════════════════════╝");
        console.log("                                                     ", colors.reset);

        console.log(colors.fg.magentastrong, "Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nNull Bank - Transformando sonhos em realidade financeira com segurança e inovação!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    "\n\nCriar Conta\n\n");

                console.log('Digite o numero da agencia: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o nome do titular da conta: ');
                titular = readlinesync.question("");

                console.log('Digite o tipo da conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o saldo da conta: ');
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log('Digite o limite da conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;

                    case 2:
                        console.log('Digite a data de anivesario da conta: ');
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        );
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o Número da Conta a ser atualizada: ");
                numero = readlinesync.questionInt();

                let conta = contas.buscarNoArray(numero);

                if (conta == null) {
                    console.log(`Conta de número ${numero} não foi encontrada.`);
                    return;
                }

                console.log("Digite o Número da Agência a ser atualizada: ");
                agencia = readlinesync.questionInt();

                console.log("Digite o Nome do Titular da Conta a ser atualizada: ");
                titular = readlinesync.question();

                console.log("Digite o Saldo da Conta: ");
                saldo = readlinesync.questionFloat();

                if (conta.tipo == 1) {
                    console.log("Digite o Limite da Conta a ser atualizada: ");
                    limite = readlinesync.questionFloat();
                    contas.atualizar(new ContaCorrente(numero, agencia, conta.tipo, titular, saldo, limite));
                } else {
                    console.log("Digite a Data de Aniversário da Conta a ser atualizada: ");
                    aniversario = readlinesync.questionInt();
                    contas.atualizar(new ContaPoupanca(numero, agencia, conta.tipo, titular, saldo, aniversario));
                }
                break;

                keyPress()
                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);
                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do depósito: ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o numero da conta de origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o numero da conta de destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n=====================================================");
    console.log("Projeto Desenvolvido por: Fabio Seripieri");
    console.log("E-mail - faseripieri295@gmail.com");
    console.log("https://github.com/FabioJr295");
    console.log("=======================================================");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();