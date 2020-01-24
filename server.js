const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send({
        message: 'This is the root end point'
    });
});


app.get('/add/:num1&:num2', (req,res) => {

    const { params = {} } = req;

    const { num1, num2 } = params;

    res.send({
        num1: parseInt(num1),
        num2: parseInt(num2),
        sum: parseInt(num1) + parseInt(num2)
    });
});



app.listen(8080, () => {
    console.log("Your app is up and running")
})


