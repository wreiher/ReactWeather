var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=7f10d54094a4936807917ae2e3ea3fa5';
//7f10d54094a4936807917ae2e3ea3fa5

module.exports = {
  getTemp: function(location){
    var encodedLocaton = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocaton}`;

    return axios.get(requestURL).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
