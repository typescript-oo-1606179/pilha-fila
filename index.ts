interface IList<T> {
  clear(): Array<T>;
  isEmpty(): boolean;
  size(): number;
}

class List<T = any> implements IList<T> {
  constructor(protected list: Array<T>) {}

  public clear(): Array<T> {
    console.log("Limpando lista...");

    this.list = [];

    return this.list;
  }

  public isEmpty(): boolean {
    const listLength = this.list.length;
    const isEmpty = listLength <= 0;

    return isEmpty;
  }

  public size(): number {
    return this.list.length;
  }
}

console.log("Sessão PILHA");
console.log("=======================================");

// Sessão Pilha

class Pilha<T> extends List<T> {
  constructor(startList: Array<T>) {
    super(startList);
  }

  public push(newElement: T): Array<T> {
    console.log(`Fazendo push com o elemento: ${newElement}`);

    const newList = [...this.list, newElement];

    this.list = newList;

    return this.list;
  }

  public pop(): T {
    const lastElement = this.list[this.list.length - 1];

    console.log(`Fazendo pop com o elemento: ${lastElement}`);

    const newList = this.list.slice(0, this.list.length - 1);

    this.list = newList;

    return lastElement;
  }

  public peek(): T {
    const lastElement = this.list[this.list.length - 1];

    return lastElement;
  }
}

const pilha = new Pilha<string>(["Luciel", "Pedro", "Thiago", "João"]);

console.log("🚀 ~ pilha:", pilha);

pilha.push("no barquinho");

console.log("🚀 ~ pilha:", pilha);

console.log("Retorno do pop: ", pilha.pop());

console.log("🚀 ~ pilha:", pilha);

pilha.push("no barquinho");

console.log("🚀 ~ pilha:", pilha);

console.log("Retorno do peek:", pilha.peek());

console.log("Retorno do isEmpty:", pilha.isEmpty());

console.log("Retorno do clear:", pilha.clear());

console.log("Retorno do isEmpty:", pilha.isEmpty());

pilha.push("Pedro");
pilha.push("Thiago");
pilha.push("João");
pilha.push("no barquinho");

console.log("🚀 ~ pilha:", pilha);

console.log("Retorno do isEmpty:", pilha.isEmpty());

console.log("Retorno do size:", pilha.size());

console.log("Sessão LISTA");
console.log("=======================================");

// Sessão Lista

class Fila extends List {
  constructor(startList?: Array<string>) {
    super(startList || []);

    // Equivalente
    // super(startList ? startList : []);

    // Equivalente
    // if (startList) {
    //   super(startList);
    // } else {
    //   super([]);
    // }
  }

  public push(newElement: string): Array<string> {
    console.log(`Fazendo push com o elemento: ${newElement}`);

    const newList = [...this.list, newElement];

    this.list = newList;

    return this.list;
  }

  public pop(): string {
    const firstElement = this.list[0];

    console.log(`Fazendo pop com o elemento: ${firstElement}`);

    const newList = this.list.slice(1, this.list.length);

    this.list = newList;

    return firstElement;
  }

  public peek(): string {
    const firstElement = this.list[0];

    return firstElement;
  }
}

const fila = new Fila();

console.log("🚀 ~ fila:", fila);

console.log("Retorno do size: ", fila.size());

console.log("Retorno do isEmpty: ", fila.isEmpty());

fila.push("Pedro");
fila.push("Thiago");
fila.push("João");
fila.push("no barquinho");

console.log("🚀 ~ fila:", fila);

console.log("Retorno do pop: ", fila.pop());

console.log("🚀 ~ fila:", fila);

console.log("Retorno do peek: ", fila.peek());

console.log("Retorno do clear: ", fila.clear());

console.log("🚀 ~ fila:", fila);

fila.clear();

console.log("🚀 ~ fila:", fila);
