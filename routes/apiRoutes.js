const note = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path')

//API for rendering notes stored on db
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../db/db.json")
        )
    }
    )
}

//TO-DO

//1. GET the notes
//2. read the file and display the data
//3. then save it to variable
//4. when saving toi a variable we may have to parse it
//5. return the variable
//6. run npm run watch during this step
//7. npm run start

//POST notes
//1. get data from our request req.body save in a variable
//2. read the file and display data in a variable from json file
//3. combine notes from json(array) attach or append our variable to that array
//4. write it to our json file