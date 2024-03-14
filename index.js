const inquirer = require("inquirer");
const { Triangle, Square, Circle, SVG } = require("./lib/shapes");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Please select logo shape.",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Please input logo colour.",
    },
    {
      type: "input",
      name: "text",
      message: "Please enter logo text.",
      validate: (text) => {
        return text.length <= 3 || "Text cannot be more than 3 characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Please input text colour.",
    },
  ])
  .then((answers) => {
    let shape = null;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
    let svg = new SVG();
    shape.setColor(answers.shapeColor);
    svg.setShape(shape.render());
    svg.setText(answers.text);
    svg.setTextColor(answers.textColor);

    fs.writeFile("./examples/logo.svg", svg.render(), (err, data) => {
      err ? console.log(err) : console.log("SVG created.");
    });
  });
