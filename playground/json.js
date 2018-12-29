// // var personString='{"name":"pallab","age":23}';
// // var person=JSON.parse(personString);

// const fs = require('fs');

// var originalNote = {
// title:'some title',
// body:'some body'
// };

// var originalNoteString = JSON.stringify(originalNote);
// fs.writeFileSync('notes.json',originalNoteString);

// var noteString = fs.readFileSync('notes.json');

// var note = JSON.parse(noteString);

// console.log(note.title);
// console.log(typeof note);

var note = JSON.parse('{"title":"secret2","body":"some body here"}');
note.push(1);
console.log(note[0]);


