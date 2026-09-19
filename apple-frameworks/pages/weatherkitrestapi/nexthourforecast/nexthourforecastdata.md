> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkitrestapi/nexthourforecast/nexthourforecastdata

# NextHourForecast.NextHourForecastData

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Object  
**Availability:** Weather API 1.0.0+

The next hour forecast information.

## Declaration

```
object NextHourForecast.NextHourForecastData
```

## Properties

- `forecastEnd` — `date-time`: The time the forecast ends.
- `forecastStart` — `date-time`: The time the forecast starts.
- `minutes` — `[ForecastMinute]` (required): An array of the forecast minutes.
- `summary` — `[ForecastPeriodSummary]` (required): An array of the forecast summaries.

## Relationships

### Inherited By

- [NextHourForecast](../nexthourforecast.md)
