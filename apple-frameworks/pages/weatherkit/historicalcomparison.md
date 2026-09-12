> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/historicalcomparison](https://developer.apple.com/documentation/weatherkit/historicalcomparison)

# HistoricalComparison

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An enum that represents a recognized comparison in the statistical analysis of a location’s historical weather data.

## Declaration

```swift
enum HistoricalComparison
```

## Topics

### Enumeration Cases

- [HistoricalComparison.highTemperature(\_:)](historicalcomparison/hightemperature%28__%29.md): The comparison relates to the location’s maximum temperature averaged since ~1970.
- [HistoricalComparison.lowTemperature(\_:)](historicalcomparison/lowtemperature%28__%29.md): The comparison relates to the location’s minimum temperature averaged since ~1970.
- [HistoricalComparison.precipitationAmount(\_:)](historicalcomparison/precipitationamount%28__%29.md): The comparison relates to the amount of precipitation at the location averaged over the past 30 days.
- [HistoricalComparison.snowfallAmount(\_:)](historicalcomparison/snowfallamount%28__%29.md): The comparison relates to the amount of snowfall at the location averaged over the past 30 days.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
