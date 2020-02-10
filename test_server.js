const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')

let request = require('request');
let apiKey = '14029a424aec0b463967f1efd7768019';
let city = 'Iqaluit';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
let url2 = 'http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}'
app.use(cors())

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      delete weather.base;
      delete weather.main.visibility;
      delete weather.timezone;
      delete weather.cod;
      delete weather.id;
      delete weather.sys;
      delete weather.coord;
      var json = JSON.stringify(weather)
      request(url2, function (err, response, body) {
        if(err){
          console.log('error:', error);
        } else {
          let weather2 = JSON.parse(body)
          var json2 = JSON.stringify(weather2)
          
        }
      
    })
  }
    app.get('/', (req, res) => res.send({json}))
    app.get('/', (req, res) => res.send({json2}))
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});



