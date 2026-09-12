> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/trend](https://developer.apple.com/documentation/weatherkit/trend)

# Trend

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure describing an observed pattern in the data for weather at a location for a specific condition.

## Declaration

```swift
struct Trend<Dimension> where Dimension : Dimension
```

## Topics

### Instance Properties

- [baseline](trend/baseline.md): The manner in which the comparison between the baseline and current values are compared.
- [currentValue](trend/currentvalue.md): The current recorded value for the condition in which the trend is compared against.
- [deviation](trend/deviation.md): Semantically describes the manner in which the observed trend compares the current value against the baseline value.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
