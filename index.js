const { Block, Blockchain } = require('./blockchain.js')
const express = require('express')
const path = require('path');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const ID = Math.floor(Math.random() * 10000)

const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

// const KYCchain = new Blockchain();
// KYCchain.addBlock(new Block(Date.now().toString(), {
//     ID: "112-312-1313",
//     firstname: "John",
//     lastname: "Doe",
//     emai:"johndoe@gmail.com",
//     DOB: "01-09-2005",
//     City: "detroit",
//     account: "$1000",
//     bank: "US bank"
// }))

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    const {firstname, lastname, email, dob, city, account, bank} = req.body

    const KYCchain = new Blockchain();
    KYCchain.addBlock(new Block(Date.now().toString(), {
        ID: ID,
        firstname: firstname,
        lastname: lastname,
        email: email,
        DOB: dob,
        city: city,
        account, account,
        bank: bank
    }))

    res.json({status: 'ok'})
})

app.listen(port);
console.log('Server started at http://localhost:' + port);
console.log(KYCchain.chain)

