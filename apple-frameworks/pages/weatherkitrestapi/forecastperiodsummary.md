> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/forecastperiodsummary](https://developer.apple.com/documentation/weatherkitrestapi/forecastperiodsummary)

# ForecastPeriodSummary

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

The summary for a specified period in the minute forecast.

## Declaration

```
object ForecastPeriodSummary
```

## Properties

- `condition` — `PrecipitationType` (required): The type of precipitation forecasted.
- `endTime` — `date-time`: The end time of the forecast.
- `precipitationChance` — `number` (required): The probability of precipitation during this period.
- `precipitationIntensity` — `number` (required): The precipitation intensity in millimeters per hour.
- `startTime` — `date-time` (required): The start time of the forecast.

## See Also

### Obtaining minute-to-minute forecast weather

- [ForecastMinute](forecastminute.md): The precipitation forecast for a specified minute.
