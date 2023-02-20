const express = require('express');
const path = require('path');



const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Weather App!</h1>')
})


app.get('/about', (req, res) => {
    res.send( {
        name: 'Andres Barreras',
        age: 22,
        horoscope: 'Cancer'
    })
})

app.get('/help', (req,res) => {
    res.send('Help Page!')
})

app.get('/weather', (req, res) => {
    res.send( {
        forecast: 'Not good',
        location: 'Ohio'
    })
})

app.listen(3000, () => {
    console.log('Psst! Server is up on port 3000.')
});

//app.com
//app.com/help
//app.com/about
//app.com/weather

