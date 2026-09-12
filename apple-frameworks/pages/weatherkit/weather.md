> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weather](https://developer.apple.com/documentation/weatherkit/weather)

# Weather

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A model representing the aggregate weather data the caller requests.

## Declaration

```swift
struct Weather
```

## Topics

### Getting the forecast

- [availability](weather/availability.md): Flags containing information about data availability and attribution.
- [currentWeather](weather/currentweather.md): The current weather forecast.
- [dailyForecast](weather/dailyforecast.md): The daily forecast.
- [hourlyForecast](weather/hourlyforecast.md): The hourly forecast.
- [minuteForecast](weather/minuteforecast.md): The minute-by-minute forecast.

### Getting weather alerts

- [weatherAlerts](weather/weatheralerts.md): A list of severe weather alerts.

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

### Fundamentals

- [WeatherService](weatherservice.md): Provides an interface for obtaining weather data.
