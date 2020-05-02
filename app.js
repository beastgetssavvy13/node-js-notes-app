// const fs=

// const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
// const green=chalk.inverse.red("error")
// console.log(green);
// const command=process.argv
// console.log(command);
yargs.command({
  command: "add",
  describe: "Add a new series",
  builder: {
    body: {
      describe: "My body",
      demandOption: true,
      type: "string",
    },
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title,argv.body)
  },
});
yargs.command({
  command: "remove",
  describe: "remove a new series",
  builder: {
    title: {
      describe: "Note  title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removenote(argv.title);
  },
}); 
yargs.command({
  command: "list",
  describe: "list a new series",
  handler(argv) {
    notes.listnotes();
  },
});
yargs.command({
  command: "read",
  describe: "read a new series",
  builder: {
    title: {
      describe: "Note  title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readnotes(argv.title);
  },
});
yargs.parse();