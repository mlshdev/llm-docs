> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/humanbodyactionperiodpredictor/prediction](https://developer.apple.com/documentation/createmlcomponents/humanbodyactionperiodpredictor/prediction)

# HumanBodyActionPeriodPredictor.Prediction

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A human body action period prediction.

## Declaration

```swift
struct Prediction
```

## Topics

### Creating a prediction

- [init(period:periodicity:)](prediction/init%28period_periodicity_%29.md): Creates a human body action period prediction.

### Getting the properties

- [period](prediction/period.md): The duration of a human body action measured in frames.
- [periodicity](prediction/periodicity.md): A score that indicates whether this frame contributes to a periodic human body action.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Predicts human body action periods from an array of poses.
