> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrepeatmode](https://developer.apple.com/documentation/spritekit/skrepeatmode)

# SKRepeatMode (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes used to determine how the sequence repeats.

## Declaration

```swift
enum SKRepeatMode
```

## Topics

### Constants

- [SKRepeatMode.clamp](skrepeatmode/clamp.md): When a sample is calculated, the time value is clamped to the range of time values found in the sequence. For example, if the last keyframe’s time value is `0.5`, a sample at any time value from `0.5` to `1.0` returns the last keyframe’s value.
- [SKRepeatMode.loop](skrepeatmode/loop.md): When a sample is calculated, the sequence loops back to the beginning of the sequence. For example, if the last keyframe’s time value is `0.5`, then a sample at any time value from `0.5` to `1.0` returns the same value as the sequence did from `0.0` to `0.5`.

### Initializers

- [init(rawValue:)](skrepeatmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.

# SKRepeatMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes used to determine how the sequence repeats.

## Declaration

```objectivec
enum SKRepeatMode : NSInteger;
```

## Topics

### Constants

- [SKRepeatModeClamp](skrepeatmode/clamp.md): When a sample is calculated, the time value is clamped to the range of time values found in the sequence. For example, if the last keyframe’s time value is `0.5`, a sample at any time value from `0.5` to `1.0` returns the last keyframe’s value.
- [SKRepeatModeLoop](skrepeatmode/loop.md): When a sample is calculated, the sequence loops back to the beginning of the sequence. For example, if the last keyframe’s time value is `0.5`, then a sample at any time value from `0.5` to `1.0` returns the same value as the sequence did from `0.0` to `0.5`.

## See Also

### Constants

- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
