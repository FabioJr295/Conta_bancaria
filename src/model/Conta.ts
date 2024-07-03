export class conta{

    // Definir os Atributos da classe (caracteristicas do meu objeto)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Definimos o método construtor, responsavel por criar os objetos da classe
    // Ctrl + shift + P para acionar o typescript construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    // Definindo os metodos get e set de cada atributo

	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}
    // Metodo para visualizar todos os dados do objeto
    public visualizar(): void{
        console.log('***********************');
        console.log('Dados da conta');
        console.log('***********************');
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`Numero da agencia: ${this._agencia}`);
        console.log(`Tipo da conta: ${this._tipo}`);
        console.log(`Titular da conta: ${this._titular}`);
        console.log(`Saldo da conta: ${this._saldo}`);
    }
}