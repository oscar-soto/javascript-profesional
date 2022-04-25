// Interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color
}

let rect: Rectangulo = {
    ancho: 6,
    alto: 4,
    color: Color.Verde
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(areaRect);
console.log(rect.toString())
