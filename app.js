const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=84dc24a6387f03b2319ace30f96658a8&query=37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
