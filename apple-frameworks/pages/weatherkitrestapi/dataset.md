> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/dataset](https://developer.apple.com/documentation/weatherkitrestapi/dataset)

# DataSet

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

The collection of weather information for a location.

## Declaration

```
string DataSet
```

## Possible Values

- `currentWeather`:
- `forecastDaily`:
- `forecastHourly`:
- `forecastNextHour`:
- `weatherAlerts`:

<a id="Possible-Values"></a>

## Possible Values

- **currentWeather**: The current weather for the requested location.
- **forecastDaily**: The daily forecast for the requested location.
- **forecastHourly**: The hourly forecast for the requested location.
- **forecastNextHour**: The next hour forecast for the requested location.
- **weatherAlerts**: Weather alerts for the requested location.

## See Also

### Obtaining weather information for a location

- [GET /api/v1/availability/{latitude}/{longitude}](get-api-v1-availability-_latitude_-_longitude_.md): Determine the data sets available for the specified location.
- [GET /api/v1/weather/{language}/{latitude}/{longitude}](get-api-v1-weather-_language_-_latitude_-_longitude_.md): Obtain weather data for the specified location.
- [Weather](weather.md): The collection of all requested weather data.
- [Latitude](latitude.md): A numeric value indicating the latitude of the coordinate between `-90` and `90`.
- [Longitude](longitude.md): A numeric value indicating the longitude of the coordinate between `-180` and `180`.
