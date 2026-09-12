> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/forecastminute](https://developer.apple.com/documentation/weatherkitrestapi/forecastminute)

# ForecastMinute

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

The precipitation forecast for a specified minute.

## Declaration

```
object ForecastMinute
```

## Properties

- `precipitationChance` — `number` (required): The probability of precipitation during this minute.
- `precipitationIntensity` — `number` (required): The precipitation intensity in millimeters per hour.
- `startTime` — `date-time` (required): The start time of the minute.

## See Also

### Obtaining minute-to-minute forecast weather

- [ForecastPeriodSummary](forecastperiodsummary.md): The summary for a specified period in the minute forecast.
