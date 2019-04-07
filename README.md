# NotesApp

This project is a node console app

## Main Functionality
- Add a Note (Validation if note with the title already exists it won't add a new one)
- Remove a Note
- List All Notes (returns a list of notes with title and bosy)
- Read a Note (lookup by title)

## To Run
* Clone Repo
* Navigate to that folder in your respective command prompt
* Run npm install
* Run node app.js followed by your command
  * Examples:
    * Add a Note: node app.js add --title="Test" --body="test"
    * Remove a Note: node app.js remove --title="Test"
    * List All Notes: node app.js list
    * Read a Note: node app.js read --title="Test"

## Modules
- Chalk
- Yargs
