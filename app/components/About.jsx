var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I have built this for The Complete React Web App Developer Course</p>
      <p>
        Here are some of the tools used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript library used</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - Open
        Weather Map to search for weather data by city name.</li>
      </ul>

    </div>
  )
}

module.exports = About;
