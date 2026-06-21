 abstract class Shape {
        abstract area(): number;
}

class Circle extends Shape {
    private radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        get getRadius(): number {
            return this.radius;
        }

        area(): number {
            return Math.PI * this.radius * this.radius;         
        }
}    

class Rectangle extends Shape {
    height: number;
    private width: number;

    constructor( width: number, height: number) {
        super();
        this.height = height;
        this.width = width;
    }

    get getWidth(): number {
        return this.width;
    }

    area(): number {
        return this.width * this.height;
    }
}

function printArea(shape: Shape): void {
    console.log(`Area: ${shape.area()}`);
}

printArea(new Circle(5));
printArea(new Rectangle(4, 6));
