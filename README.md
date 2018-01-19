# nodeproject-Davidconst argv = require("yargs").argv;
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

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

const addNote = (title, body) => {
  const note = {
    title,
    body
    // title: title,
    // body: body
  }
  const notes = fetchNotes();
  if (notes.every(n => n.title != note.title)){
    notes.push(note);
    saveNotes(notes);
    console.log("your node was added");
    return notes;

  } else {
    console.log("This node already exists");
    return false;
  }
}
const removeNote = (title)=>{
  const note = {
    title
  }

  const notes = fetchNotes();

  if (notes.every (n=> n.title == note.title)){
    notes.splice(note.title);
    saveNotes(notes);
    return note;

  }
    else{
      // console.log(notes.every(n=> n.title));
      // console.log(notes);
      // console.log("your input title, " + note.title + ", dose not match any of the title that's stored");
      return false;}
}


const readNote = (title)=>{
    const notes = fetchNotes();
  const note={
    title
  }
  if (notes.every (n=> n.title == note.title)){
      console.log(note.title);
      return notes;
  }
  else
  {
    return false;
    // console.log(note);
    // console.log("this title does not exist");
  }
}

const listNote = (title,body)=>{
    const notes = fetchNotes();
  const note ={
    title,
    body
  }
  notes.every(n=>n.title ==note.title);
  for (var i = 0; i < notes.length; i++) {
    console.log(notes[i]);
  }


}
module.exports = {
  addNote,
  removeNote,
  readNote,
  listNote
}
