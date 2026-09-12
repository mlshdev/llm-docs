> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/weight](https://developer.apple.com/documentation/swiftui/sensoryfeedback/weight)

# SensoryFeedback.Weight

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

The weight to be represented by a type of feedback.

## Declaration

```swift
struct Weight
```

<a id="overview"></a>

## Overview

`Weight` values can be passed to `SensoryFeedback.impact(weight:intensity:)`.

## Topics

### Getting flexibility values

- [light](weight/light.md): Indicates a collision between small or lightweight UI objects.
- [medium](weight/medium.md): Indicates a collision between medium-sized or medium-weight UI objects.
- [heavy](weight/heavy.md): Indicates a collision between large or heavyweight UI objects.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Producing a physical impact

- [impact](impact.md): Provides a physical metaphor you can use to complement a visual experience.
- [impact(weight:intensity:)](impact%28weight_intensity_%29.md): Provides a physical metaphor you can use to complement a visual experience.
- [impact(flexibility:intensity:)](impact%28flexibility_intensity_%29.md): Provides a physical metaphor you can use to complement a visual experience.
- [SensoryFeedback.Flexibility](flexibility.md): The flexibility to be represented by a type of feedback.
