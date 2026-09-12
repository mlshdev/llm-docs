> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/percentiles](https://developer.apple.com/documentation/weatherkit/percentiles)

# Percentiles

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that describes probability distributions for a measurable weather condition.

## Declaration

```swift
struct Percentiles<Dimension> where Dimension : Dimension
```

## Topics

### Instance Properties

- [p10](percentiles/p10.md): 10% of the distribution is less than this value.
- [p50](percentiles/p50.md): 50% of the distribution is less than this value.
- [p90](percentiles/p90.md): 90% of the distribution is less than this value.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
