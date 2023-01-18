export class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 0;
        this.gravity = 0.1;
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
    }
    render() {
        this.context.fillStyle = 'blue';
        this.context.fillRect(this.x, this.y, 100, 100);
    }
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }
}
