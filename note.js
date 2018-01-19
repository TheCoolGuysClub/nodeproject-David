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
//this is a helper method that check to see if the note exists
const checkNote = (notes,note)=>{
  if(notes.every(n=> n.title !=note.title)){
    return true;
  }
  else
  {
    return false;
  }
}
//this is the add note function that adds the node
const addNote = (title, body) => {
  const note = {
    title,
    body
  }
  const notes = fetchNotes();
  if (checkNote(notes,note)){
    notes.push(note);
    saveNotes(notes);
    return true;
  } else {
    return false;
  }
}
//this is the removenote function that remove the note
const removeNote = (title)=>{
  const note = {
    title
  }

  const notes = fetchNotes();

  if (checkNote(notes,note)==false){
    notes.splice(note.title);
    saveNotes(notes);
    return note;

  }
    else{

      return false;
    }
}

//this function will read the note out if there is a note
const readNote = (title)=>{
    const notes = fetchNotes();
  const note={
    title,
  }
  if (checkNote(notes,note)==false){
    console.log(note);
      return true;
  }
  else
  {
    return false;
  }
}

const listNote = () => {
  const notes = fetchNotes();
  console.log("Title                    Body");
  for (i in notes) {
    let space = " ".repeat(25-notes[i].title.length);
    console.log(notes[i].title + space + notes[i].body);
  }
}



module.exports = {
  addNote,
  removeNote,
  readNote,
  listNote
}
