class Circle {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = c;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getRadius() {
        return this.radius;
    } 
    
    intersects(x, y, z) {
        let d = dist(this.x, this.y, x, y);
        if (d < this.radius + z) { 
            return true;
        } else {
            return false;
        }
    }

    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
}
