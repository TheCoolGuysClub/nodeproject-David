const argv = require("yargs").argv;
const notes = require("./note.js");
const command = argv._[0]
  if(command ==="add"){
    const title = argv.title;
    const body = argv.body;
    notes.addNote(title,body);
    const noteAdded = notes.addNote(title,body);
    if(noteAdded){
      console.log("Your note was added");
    }
    else{
      // console.log(noteAdded);
      console.log("This note already exists");
    }
    console.log("Add function chosen");
  }
  if(command ==="list"){
    const title = argv.title;
    const body = argv.body;
    notes.listNote(title,body);

    console.log("List function chosen");
  }
  if(command ==="read"){
    const title = argv.title;
    const body = argv.body;
    notes.readNote(title);
    console.log("Read function chosen");
  }
  if(command ==="remove"){
    const title = argv.title;
    const body = argv.body;
    notes.removeNote(title);
    const nodeRemoved = notes.removeNote(title);
    if(nodeRemoved){
      console.log("Your node is removed");
    }
    else{console.log("no such node exists");}
    console.log("Remove function chosen");
  }
