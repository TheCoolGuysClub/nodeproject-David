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
