> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/deviation](https://developer.apple.com/documentation/weatherkit/deviation)

# Deviation

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Describes a comparison between two values in a trend.

## Declaration

```swift
enum Deviation
```

## Topics

### Enumeration Cases

- [Deviation.higher](deviation/higher.md): The most recently observed value is larger than the value it is being compared against.
- [Deviation.lower](deviation/lower.md): The most recently observed value is lower than the value it is being compared against.
- [Deviation.muchHigher](deviation/muchhigher.md): The most recently observed value is much larger than the value it is being compared against.
- [Deviation.muchLower](deviation/muchlower.md): The most recently observed value is much lower than the value it is being compared against.
- [Deviation.normal](deviation/normal.md): The most recently observed value is about the same as the value it is being compared against.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
