> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatheralert](https://developer.apple.com/documentation/weatherkit/weatheralert)

# WeatherAlert

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A weather alert issued for the requested  location by a governmental authority.

## Declaration

```swift
struct WeatherAlert
```

<a id="overview"></a>

## Overview

Weather alerts often contains severe weather information; however, not all alerts are severe. Alerts may or may not contain localized descriptions, depending on what is available from the source. Due to data source restrictions, information contained is served raw.

## Topics

### Getting the properties

- [metadata](weatheralert/metadata.md): Descriptive information about the weather alert data.
- [region](weatheralert/region.md): The name of the affected area.
- [severity](weatheralert/severity.md): The severity of the weather alert.
- [summary](weatheralert/summary.md): The summary of the event type.

### Providing attribution

- [detailsURL](weatheralert/detailsurl.md): The site for more details about the weather alert.
- [source](weatheralert/source.md): The name of the source issuing the weather alert.

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

- [WeatherAvailability](weatheravailability.md): A structure that indicates the availability of data at the requested location.
- [Forecast](forecast.md): A forecast collection for minute, hourly, and daily forecasts.
- [MinuteWeather](minuteweather.md): A structure that represents the next hour minute forecasts.
- [HourWeather](hourweather.md): A structure that represents the weather conditions for the hour.
- [DayWeather](dayweather.md): A structure that represents the weather conditions for the day.
