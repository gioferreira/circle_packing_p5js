
// Create a class Circles that has a method that returns an array of circles
class Circles {
    constructor(n, max_radius) {
        this.amount = n;
        this.max_radius = max_radius;
        this.circles = [];
    }

    setCircles() {
        let safety = 0;
        for (let i = 0; i < this.amount; i++) {
            if (safety > 100000) {
                break;
            }
            let x = round(random(width));
            let y = round(random(height));
            let radius = round(random(1, this.max_radius));
            let c = color(random(150,255), random(150,255), random(150,255), random(200,255));
            // if circles is empty, push a new circle
            if (this.circles.length === 0) {
                this.circles.push(new Circle(x, y, radius, c));
            } else { // if circles is not empty, check if the new circle intersects any of the existing circles
                if (this.intersectsAny(x, y, radius)) {
                    i--;
                    safety++;
                }
                else {
                    this.circles.push(new Circle(x, y, radius, c));
                }
            }
        }
    }

    // A method that sets the number of circles
    setAmount(n) {
        this.amount = n;
    }

    // A method that sets the maximum radius of the circles
    setMaxRadius(max_radius) {
        this.max_radius = max_radius;
    }

    // A method that returns the array of circles
    getCircles() {
        // check if this.circles is empty
        if (this.getAmount() === 0) {
            this.setCircles();
        }
        return this.circles;
    }

    // A method that returns the amount of circles
    getAmount() {
        return this.circles.length;
    }

    // A method that checks if a circle intersects any of the existing circles
    intersectsAny(x, y, r) {
        for (let circle of this.circles) {
            if (circle.intersects(x, y, r)) {
                return true;
            }
        }
        return false;
    }



    
}

