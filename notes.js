const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold("new note added!"))
    }else{
        console.log(chalk.red.bold("note title taken"))
    }
} 

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title != title)
    saveNotes(notesToKeep)
    if(notesToKeep.length < notes.length){
        console.log(chalk.green.bold("Note Removed"))
    } else{
        console.log(chalk.red.bold('No note was found with that title'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes:'))
    notes.forEach(note => console.log(chalk.cyan.bold(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note =  notes.find(note => note.title === title)
    if(note){
        console.log(chalk.cyan.bold("Title: " + note.title))
        console.log(chalk.cyan.bold("Body: " + note.body))
    }else{
        console.log(chalk.red.bold('No note was found with that title'))
    }
}

const saveNotes = arr =>
    fs.writeFileSync('notes.json', JSON.stringify(arr))

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}