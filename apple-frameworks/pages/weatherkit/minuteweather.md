> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/minuteweather](https://developer.apple.com/documentation/weatherkit/minuteweather)

# MinuteWeather

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that represents the next hour minute forecasts.

## Declaration

```swift
struct MinuteWeather
```

## Topics

### Getting the precipitation

- [precipitation](minuteweather/precipitation.md): A description of the precipitation for this minute.
- [precipitationChance](minuteweather/precipitationchance.md): The probability of precipitation in this minute.
- [precipitationIntensity](minuteweather/precipitationintensity.md): The forecasted precipitation intensity.

### Getting the date

- [date](minuteweather/date.md): The start time of the minute weather.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Alerts and forecasts

- [WeatherAlert](weatheralert.md): A weather alert issued for the requested location by a governmental authority.
- [WeatherAvailability](weatheravailability.md): A structure that indicates the availability of data at the requested location.
- [Forecast](forecast.md): A forecast collection for minute, hourly, and daily forecasts.
- [HourWeather](hourweather.md): A structure that represents the weather conditions for the hour.
- [DayWeather](dayweather.md): A structure that represents the weather conditions for the day.
