> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dailyweatherstatisticsquery](https://developer.apple.com/documentation/weatherkit/dailyweatherstatisticsquery)

# DailyWeatherStatisticsQuery

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that encapsulates a generic daily weather statistics dataset request.

## Declaration

```swift
struct DailyWeatherStatisticsQuery<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Use the properties of this structure to create a daily weather statistics query. You can combine multiple queries into a single `WeatherService` request.

Here’s how to get daily weather statistics for New York City:

```swift
let (dailyPrecipitationStatistics, dailyTemperatureStatistics) = try await service.dailyStatistics(for: newYork, spanning: timeInterval, including: .precipitation, .temperature)
```

## Topics

### Type Properties

- [precipitation](dailyweatherstatisticsquery/precipitation.md): The daily precipitation statistics query.
- [temperature](dailyweatherstatisticsquery/temperature.md): The daily temperature statistics query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
