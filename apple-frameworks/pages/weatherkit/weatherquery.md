> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherquery](https://developer.apple.com/documentation/weatherkit/weatherquery)

# WeatherQuery

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that encapsulates a generic weather dataset request.

## Declaration

```swift
struct WeatherQuery<T>
```

<a id="overview"></a>

## Overview

Use the properties of this structure to create a weather query. You can combine multiple weather queries into a single [WeatherService](weatherservice.md) request.

Here’s how to get the weather for New York City:

```swift
let (hourly, daily, alerts) = try await service.weather(for: newYork, including: .hourly, .daily, .alerts)
```

## Topics

### Creating queries

- [alerts](weatherquery/alerts.md): The weather alerts query.
- [availability](weatherquery/availability.md): The availability query.
- [current](weatherquery/current.md): The current weather query.
- [daily](weatherquery/daily.md): The daily forecast query. This returns 10 contiguous days, beginning with the current day.
- [hourly](weatherquery/hourly.md): The hourly forecast query. This returns 25 contiguous hours, beginning with the current hour.
- [minute](weatherquery/minute.md): The minute forecast query.
- [daily(startDate:endDate:)](weatherquery/daily%28startdate_enddate_%29.md): Conforms when `T` is `Forecast<DayWeather>`. Returns weather for an arbitrary range of days, with the following caveats:
- [hourly(startDate:endDate:)](weatherquery/hourly%28startdate_enddate_%29.md): Conforms when `T` is `Forecast<HourWeather>`. The hourly forecast query that takes a start date and end date for the request, with the following caveats:

### Type Properties

- [changes](weatherquery/changes.md): The weather changes query.
- [historicalComparisons](weatherquery/historicalcomparisons.md): The weather historical comparison query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requests

- [CurrentWeather](currentweather.md): A structure that describes the current conditions observed at a location.
- [WeatherAttribution](weatherattribution.md): A structure that defines the necessary information for attributing a weather data provider.
- [WeatherMetadata](weathermetadata.md): A structure that provides additional weather information.
- [WeatherSeverity](weatherseverity.md): A description of the severity of the severe weather event.
