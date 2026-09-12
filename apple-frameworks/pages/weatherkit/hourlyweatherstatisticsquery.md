> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/hourlyweatherstatisticsquery](https://developer.apple.com/documentation/weatherkit/hourlyweatherstatisticsquery)

# HourlyWeatherStatisticsQuery

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that encapsulates a generic hourly weather statistics dataset request.

## Declaration

```swift
struct HourlyWeatherStatisticsQuery<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Use the properties of this structure to create an hourly weather statistics query. You can combine multiple queries into a single `WeatherService` request.

Here’s how to get hourly weather statistics for New York City:

```
let (hourlyTemperatureStatistics) = try await service.hourlyStatistics(for: newYork, spanning: timeInterval, including: .temperature)
```

## Topics

### Type Properties

- [temperature](hourlyweatherstatisticsquery/temperature.md): The hourly temperature statistics query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
