import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  name: string
  destination:string
}

export class ServerApp {
  static run({ base, limit, showTable, name, destination }: RunOptions) {
    console.log("Server running...");
    const table = new CreateTable().execute({ base, limit });
    const wasSaved = new SaveFile().execute({ fileContent: table, fileName: name, fileDestination: destination });

    if (showTable) return console.log(table);


  }
}
