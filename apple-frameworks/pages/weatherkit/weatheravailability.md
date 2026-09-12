> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatheravailability](https://developer.apple.com/documentation/weatherkit/weatheravailability)

# WeatherAvailability

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that indicates the availability of data at the requested location.

## Declaration

```swift
struct WeatherAvailability
```

<a id="overview"></a>

## Overview

`WeatherAvailability` represents the availability of data at the requested location. Weather alerts, or minute forecast data may be temporarily unavailable from the data provider, or unsupported in some regions. Other data sets are expected to be supported for all geographic locations, for example, current weather, and therefore are not included in `WeatherAvailability`.

## Topics

### Getting the properties

- [alertAvailability](weatheravailability/alertavailability.md): The weather alerts availability.
- [minuteAvailability](weatheravailability/minuteavailability.md): The minute forecast availability.
- [WeatherAvailability.AvailabilityKind](weatheravailability/availabilitykind.md): The availability kind.

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
- [Forecast](forecast.md): A forecast collection for minute, hourly, and daily forecasts.
- [MinuteWeather](minuteweather.md): A structure that represents the next hour minute forecasts.
- [HourWeather](hourweather.md): A structure that represents the weather conditions for the hour.
- [DayWeather](dayweather.md): A structure that represents the weather conditions for the day.
