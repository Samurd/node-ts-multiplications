import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: show } = yarg;

let outputMessage = "";

const headerMessage = `
======================================
          Tabla del ${base}
======================================\n
`;

for (let i = 0; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) {
  console.log(outputMessage);
}

const dirPath = "outputs";
const filePath = `outputs/table-${base}.txt`;
fs.mkdir(dirPath, (err) => {
  if (err) {
    return console.error("Error creating directory", err);
  }

  return console.log("The directory was created in:", dirPath);
});
fs.writeFile(filePath, outputMessage, (err) => {
  if (err) {
    return console.error("Error write the file", err);
  }

  return console.log("The five's table was saved in:", filePath);
});
