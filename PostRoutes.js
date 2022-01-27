const express = require('express');
const router = express.Router();
const fs = require('fs');
let posts = [];

function writeToFile(posts) {
    fs.writeFile("posts.json", JSON.stringify(posts), (err) => {
        if(err) throw err;
    })
}

router.get('/fetchPosts', (request, response) => {
    fs.readFile('posts.json', (err, data) => {
        posts = data.toString();
        // console.log(data.toString());
        response.json({'err':0, 'data':JSON.parse(posts)});
    })
    // response.send("Fetch Post hit successful");
});

router.use(express.json());

router.post('/addPosts', (request, response) => {
    console.log(request.body);
    
    fs.readFile('posts.json', (err, data) => {
        posts = JSON.parse(data.toString());
        posts = [...posts, request.body];
        console.log(posts);
        writeToFile(posts);
    })
    response.send("Add Post hit successful");
    // response.json(request.body);
});

module.exports = router;