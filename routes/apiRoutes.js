const note = require('../db/db.json');
// console.log("\n\n\nnote: ", note);
// console.log("I am here")
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path')

//API for rendering notes stored on db
function getNoteList() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))
}
console.log(getNoteList());

// var notes = JSON.parse(data);

module.exports = (app) => {
    //GET
    app.get('/api/notes', (req, res) => {
        return res.json(getNoteList());
    });

    //POST
    app.post('/api/notes', (req, res) => {
        console.log("Hello error")
        //GETS THE req.body
        let newNote = {
            id: uuidv4(),
            ...req.body
        }

        // PUSH THE NEW NOTE INTO THE ARRAY
        var currentNotes = getNoteList()
        currentNotes.push(newNote);
        //REWRITE THE DB.JSON FILE WITH THE UPDATED ARRAY
        updateDb(currentNotes);
        res.json(currentNotes);

    });

    //DELETE
    app.delete('/api/notes/:id', (req, res) => {
        //get current notes getNoteList
        //assign to variable
        //loop over each note and check id
        //.filter method currentNotes.filter
        var currentNotes = getNoteList()
        var id = req.params.id;
        console.log(id)
        res.json(id)
    })

    function updateDb(currentNotes) {
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(currentNotes, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }

};


//TO-DO
//POST notes
//1. get data from our request req.body save in a variable
//2. read the file and display data in a variable from json file
//3. combine notes from json(array) attach or append our variable to that array
//4. write it to our json file