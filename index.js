const pug = require("pug");
const fs = require("fs");

const pugPaths = [
  "./index.pug",
  "./team.pug",
  "./events.pug",
  "./resources.pug",
];

pugPaths.forEach((pugPath) => {
  const htmlPath = pugPath.replace(".pug", ".html");
  const html = pug.renderFile(pugPath);
  console.log("Writing to " + htmlPath);
  fs.writeFile(htmlPath, html, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Written successfully to " + htmlPath);
  });
});
