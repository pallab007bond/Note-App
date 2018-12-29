
const fs = require('fs');
const notes = require('./note.js');
const _= require('lodash');
const yargs= require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
console.log(`Command: ${command}`);

switch(command)
{
    case'add':
    var note = notes.addNote(argv.title,argv.body);
              if(note)
              {
                console.log('Note Added');
                notes.logNote(note);
              }else
              {
                console.log('Note Already Taken')
              }
                break;
    case'list': var allNotes = notes.getAll();
                console.log(`Printing ${allNotes.length} note(s).`);
                allNotes.forEach((note) => notes.logNote(note));
                break;
    case'read':var note=notes.readNote(argv.title);
                if(note)
                {
                  console.log('Note Found')
                  notes.logNote(note);
                }
                else
                console.log('Note not Found');
                break;
    case'remove':var noteIsDeleted = notes.removeNote(argv.title);
                 if(noteIsDeleted)
                 console.log("Note is Deleted");
                 else
                 console.log("Note not Found"); 
                break;            
    default: console.log('Command not recognized');
}