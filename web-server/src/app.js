const express = require('express');
const path = require('path');
const hbs = require('hbs');


//Define the paths for Express configuration
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '/templates/views');
const partialsPath = path.join(__dirname, '/templates/partials');

//Setup for Handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Set up for static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req,res) => {
    res.render('index', {
        title: 'The Weather App',
        name: 'Andres Barreras'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Andres Barreras'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Andres Barreras',
        helpmsg: 'Need help with anything?'
    })
})



app.get('/weather', (req, res) => {
    res.send( {
        forecast: 'Not good',
        location: 'Ohio'
    })
})

app.get('/help/*', (req,res) => {
    res.render('', {
        title: 'Error 404',
        name: 'Andres Barreras',
        errorMessage: 'Help article not found!'

    });

})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        name: 'Andres Barreras',
        errorMessage: 'Error 404!'
    });

})

app.listen(3000, () => {
    console.log('Psst! Server is up on port 3000.');
});

//app.com
//app.com/help
//app.com/about
//app.com/weather

