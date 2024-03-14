class Shape {
    constructor() {
        this.color = '';
    }
    setColor(userColor) {
        this.color = userColor;
    }
}

class SVG {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
    }
    setText(userText) {
        this.text = userText;
    }
    setTextColor(userTextColor) {
        this.textColor = userTextColor;
    }
    setShape(userShape) {
        this.shape = userShape;
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="25" width="150px" height="150px" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Square, Circle, SVG}
