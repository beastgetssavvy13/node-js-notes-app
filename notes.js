const fs=require('fs');
const chalk = require("chalk");
const notes = ()=> {
    return "your notes"
}
const addNote=(title,body)=>{
    const notes=loadnotes()
    // const duplicateNodes= notes.filter((notes)=>notes.title==title)
    // const duplicateNodes = notes.filter(function (notes) {
    //   return notes.title == title;
    // });
    const duplicateNote=notes.find((notes)=>notes.title==title)
    if(!duplicateNote){
        notes.push({
          title: title,
          body: body,
        });
        savenotes(notes);
        console.log(chalk.green.inverse("new notes add"))
    }
    else{
        console.log(chalk.red.inverse("duplicate note found"));
    }
    
}
const savenotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}
const removenote=(title)=>{
    const notes=loadnotes()
    const notestokeep= notes.filter((notes)=>notes.title!=title)
    if(notes.length>notestokeep.length){
        console.log(chalk.green.inverse("note removed"))
        savenotes(notestokeep);
    }else{
        console.log(chalk.red.inverse("note not removed"));
    }
}
const loadnotes=()=>{
     try{
         const databuffer = fs.readFileSync("notes.json");
         const dataJSON = databuffer.toString();
         return JSON.parse(dataJSON);
     }catch(e){
         return []
     }
    
}
const listnotes=()=>{
    const notes = loadnotes();
     console.log(chalk.inverse.green("Your Notes !"))
     notes.forEach((notes) => {
          console.log(notes.title) 
     });

}
const readnotes=(title)=>{
    const notes = loadnotes();
    const findNote = notes.find((findNote) => findNote.title == title);
    if (findNote) {
      console.log(chalk.inverse(findNote.title))
      console.log((findNote.body));
    } else {
      console.log(chalk.red.inverse("no note found"));
    }
}
module.exports = {
  listnotes: listnotes,
  notes: notes,
  addNote: addNote,
  removenote: removenote,
  readnotes: readnotes,
};