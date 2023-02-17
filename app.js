const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');




geocode('Houston', (error, data) => {
    console.log('Error', error);
    console.log('data', data);

    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
    

})