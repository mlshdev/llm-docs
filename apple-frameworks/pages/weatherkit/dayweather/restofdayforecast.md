> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/dayweather/restofdayforecast

# restOfDayForecast

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The forecast from now until midnight local time.

## Declaration

```swift
var restOfDayForecast: DayPartForecast?
```

<a id="discussion"></a>

## Discussion

The value is only available for the current day.
