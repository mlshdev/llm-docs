> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/flexibility](https://developer.apple.com/documentation/swiftui/sensoryfeedback/flexibility)

# SensoryFeedback.Flexibility

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

The flexibility to be represented by a type of feedback.

## Declaration

```swift
struct Flexibility
```

<a id="overview"></a>

## Overview

`Flexibility` values can be passed to `SensoryFeedback.impact(flexibility:intensity:)`.

## Topics

### Getting flexibility values

- [rigid](flexibility/rigid.md): Indicates a collision between hard or inflexible UI objects.
- [soft](flexibility/soft.md): Indicates a collision between soft or flexible UI objects.
- [solid](flexibility/solid.md): Indicates a collision between solid UI objects of medium flexibility.

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
- [SensoryFeedback.Weight](weight.md): The weight to be represented by a type of feedback.
