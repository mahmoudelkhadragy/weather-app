const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/67fa968da48483b374f6197fe603af2d/${latitude},${longitude}?units=si`;
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: res.body.currently.temperature,
        summary: res.body.daily.data[0].summary,
      });
    }
  });
};

module.exports = forecast;
