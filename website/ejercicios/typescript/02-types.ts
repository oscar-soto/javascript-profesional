// Boolean
let muted: boolean = true;
muted = false;

// Error
// muted = "callado";

// Number
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let names: string = "Oscar";
let fullName = `Me llamo ${names}`;

//  Arrays
let people: string[] = [];

people = ["oscar", "Antonis", "Soto"];
people.push('900');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers = ["oscar", "Antonis", "Soto"];
peopleAndNumbers.push(900);

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'}

let someObject: Object = {type: 'Wildcard'};
