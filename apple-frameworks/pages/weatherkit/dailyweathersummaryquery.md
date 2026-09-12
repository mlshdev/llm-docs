> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dailyweathersummaryquery](https://developer.apple.com/documentation/weatherkit/dailyweathersummaryquery)

# DailyWeatherSummaryQuery

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that encapsulates a generic daily weather summary dataset request.

## Declaration

```swift
struct DailyWeatherSummaryQuery<T> where T : Decodable, T : Encodable, T : Equatable, T : Sendable
```

<a id="overview"></a>

## Overview

Use the properties of this structure to create a daily weather summary query. You can combine multiple queries into a single `WeatherService` request.

Here’s how to get a daily weather summary for New York City:

```swift
let (dailyPrecipitationSummary, dailyTemperatureSummary) = try await service.dailySummary(for: newYork, spanning: timeInterval, including: .precipitation, .temperature)
```

## Topics

### Type Properties

- [precipitation](dailyweathersummaryquery/precipitation.md): The daily precipitation summary query.
- [temperature](dailyweathersummaryquery/temperature.md): The daily temperature summary query.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
