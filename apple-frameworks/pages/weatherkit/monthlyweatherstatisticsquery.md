> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/monthlyweatherstatisticsquery](https://developer.apple.com/documentation/weatherkit/monthlyweatherstatisticsquery)

# MonthlyWeatherStatisticsQuery

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that encapsulates a generic monthly weather statistics dataset request.

## Declaration

```swift
struct MonthlyWeatherStatisticsQuery<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Use the properties of this structure to create a monthly weather statistics query. You can combine multiple queries into a single `WeatherService` request.

Here’s how to get monthly weather statistics for New York City:

```
let (monthlyPrecipitationStatistics, monthlyTemperatureStatistics) = try await service.monthlyStatistics(for: newYork, spanning: interval, including: .precipitation, .temperature)
```

## Topics

### Type Properties

- [precipitation](monthlyweatherstatisticsquery/precipitation.md): The monthly precipitation statistics query.
- [temperature](monthlyweatherstatisticsquery/temperature.md): The monthly temperature statistics query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
