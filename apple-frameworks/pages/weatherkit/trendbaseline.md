> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/trendbaseline](https://developer.apple.com/documentation/weatherkit/trendbaseline)

# TrendBaseline

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type encapsulating everything there is to know about what a trend baseline is.

## Declaration

```swift
struct TrendBaseline<Dimension> where Dimension : Dimension
```

## Topics

### Instance Properties

- [kind](trendbaseline/kind-swift.property.md): The manner in which the comparison between the baseline and current values are compared.
- [startDate](trendbaseline/startdate.md): The year the statistics collection began.
- [value](trendbaseline/value.md): The recorded baseline value for the condition in which the trend is comparing to.

### Enumerations

- [TrendBaseline.Kind](trendbaseline/kind-swift.enum.md): An enum describing what value is being compared between historical and current readings.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
