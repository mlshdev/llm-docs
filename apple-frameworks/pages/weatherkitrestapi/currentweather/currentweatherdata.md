> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/currentweather/currentweatherdata](https://developer.apple.com/documentation/weatherkitrestapi/currentweather/currentweatherdata)

# CurrentWeather.CurrentWeatherData

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

The current weather object.

## Declaration

```
object CurrentWeather.CurrentWeatherData
```

## Properties

- `asOf` — `date-time` (required): The date and time.
- `cloudCover` — `number`: The percentage of the sky covered with clouds during the period, from `0` to `1`.
- `conditionCode` — `string` (required): An enumeration value indicating the condition at the time.
- `daylight` — `boolean`: A Boolean value indicating whether there is daylight.
- `humidity` — `number` (required): The relative humidity, from `0` to `1`.
- `precipitationIntensity` — `number` (required): The precipitation intensity, in millimeters per hour.
- `pressure` — `number` (required): The sea level air pressure, in millibars.
- `pressureTrend` — `PressureTrend` (required): The direction of change of the sea-level air pressure.
- `temperature` — `number` (required): The current temperature, in degrees Celsius.
- `temperatureApparent` — `number` (required): The feels-like temperature when factoring wind and humidity, in degrees Celsius.
- `temperatureDewPoint` — `number` (required): The temperature at which relative humidity is 100%, in Celsius.
- `uvIndex` — `integer` (required): The level of ultraviolet radiation.
- `visibility` — `number` (required): The distance at which terrain is visible, in meters.
- `windDirection` — `integer`: The direction of the wind, in degrees.
- `windGust` — `number`: The maximum wind gust speed, in kilometers per hour.
- `windSpeed` — `number` (required): The wind speed, in kilometers per hour.

## Relationships

### Inherited By

- [CurrentWeather](../currentweather.md)
