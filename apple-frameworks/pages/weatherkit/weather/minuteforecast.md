> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weather/minuteforecast](https://developer.apple.com/documentation/weatherkit/weather/minuteforecast)

# minuteForecast

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The minute-by-minute forecast.

## Declaration

```swift
var minuteForecast: Forecast<MinuteWeather>?
```

<a id="discussion"></a>

## Discussion

Depending upon region support and data availability, this may be `nil`.

## See Also

### Getting the forecast

- [availability](availability.md): Flags containing information about data availability and attribution.
- [currentWeather](currentweather.md): The current weather forecast.
- [dailyForecast](dailyforecast.md): The daily forecast.
- [hourlyForecast](hourlyforecast.md): The hourly forecast.
