const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cb396147ec252fefd69670cee7baaeab&query='+ latitude + ',' + longitude + '&units=f';

    request({url: url, json: true} , (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, 'It is currently ' +response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.location.localtime + '. The temperature is ' + response.body.current.temperature + ' degrees' + '. The chance of rain is ' + response.body.current.precip + '%.' )
        }
    })

}


module.exports = forecast;