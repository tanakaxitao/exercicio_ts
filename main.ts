class pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  dizOla(): string {
    return ` olá ${this.nome}`;
  }
}

class numeros {
  numero1: number;
  numero2: number;

  constructor(numero1: number, numero2: number) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  multiplica() {
    console.log(
      `o número ${this.numero1} * o ${this.numero2} é igual a ${
        this.numero1 * this.numero2
      }`
    );
  }
}

const lucas = new pessoa("lucas");
lucas.dizOla();

const numero = new numeros(5, 4);
numero.multiplica();
