import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    // Novas instancias da calsse conta (Objetos da calsse conta)

    const c1: conta = new conta(1, 1234, 1, 'Carlos Almeida', 800000.00);
    const c2: conta = new conta(2, 1234, 2, 'Julia Rodrigues', 600000.00);
    // este mostra apenas UMA unica operação \/ \/ \/
    console.log(`O saldo da conta 01 é: ${c1.saldo}`);

    c1.visualizar();
    c2.visualizar();

    //Saque nas contas
    console.log(`Sacar 100 reais da conta C1: ${c1.sacar(100)}`); //true
    c1.visualizar();

    console.log(`Sacar 700000 reais da conta C2: ${c2.sacar(700000)}`); //false
    c2.visualizar();

     //Deposito nas contas
    console.log(`Depositar 1000000 reais da conta C1: ${c1.depositar(1000000)}`);
    c1.depositar(1000000);
    c1.visualizar();
    
    console.log(`Depositar 900000 reais da conta C2: ${c2.depositar(700000)}`);
    c2.depositar(900000);
    c2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta,"╔═══════════════════════════════════════════════════╗");
        console.log("║                                                   ║");
        console.log("║                      NULL BANK                    ║");
        console.log("║                                                   ║");
        console.log("╚═══════════════════════════════════════════════════╝");
        console.log("╔═══════════════════════════════════════════════════╗");
        console.log("║            1 - Criar Conta                        ║ ");
        console.log("║            2 - Listar todas as Contas             ║ ");
        console.log("║            3 - Buscar Conta por Numero            ║ ");
        console.log("║            4 - Atualizar Dados da Conta           ║ ");
        console.log("║            5 - Apagar Conta                       ║ ");
        console.log("║            6 - Sacar                              ║ ");
        console.log("║            7 - Depositar                          ║ ");
        console.log("║            8 - Transferir valores entre Contas    ║ ");
        console.log("║            9 - Sair                               ║ ");
        console.log("╚═══════════════════════════════════════════════════╝");
        console.log("                                                     ", colors.reset);
        
        console.log(colors.fg.magentastrong,"Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nNull Bank - Transformando sonhos em realidade financeira com segurança e inovação!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

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

main();