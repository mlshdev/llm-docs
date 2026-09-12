> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/longitude](https://developer.apple.com/documentation/weatherkitrestapi/longitude)

# Longitude

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

A numeric value indicating the longitude of the coordinate between `-180` and `180`.

## Declaration

```
number Longitude
```

<a id="Discussion"></a>

## Discussion

Negative values indicate west of the prime meridian; positive values indicate east of the prime meridian.

## See Also

### Obtaining weather information for a location

- [GET /api/v1/availability/{latitude}/{longitude}](get-api-v1-availability-_latitude_-_longitude_.md): Determine the data sets available for the specified location.
- [GET /api/v1/weather/{language}/{latitude}/{longitude}](get-api-v1-weather-_language_-_latitude_-_longitude_.md): Obtain weather data for the specified location.
- [Weather](weather.md): The collection of all requested weather data.
- [Latitude](latitude.md): A numeric value indicating the latitude of the coordinate between `-90` and `90`.
- [DataSet](dataset.md): The collection of weather information for a location.
