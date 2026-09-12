> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skinterpolationmode](https://developer.apple.com/documentation/spritekit/skinterpolationmode)

# SKInterpolationMode (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes used to interpolate between keyframes in the sequence.

## Declaration

```swift
enum SKInterpolationMode
```

## Topics

### Constants

- [SKInterpolationMode.linear](skinterpolationmode/linear.md): Values between two keyframes are interpolated linearly.
- [SKInterpolationMode.spline](skinterpolationmode/spline.md): Values between two keyframes using a spline curve.
- [SKInterpolationMode.step](skinterpolationmode/step.md): Values between two keyframes are not interpolated. Instead, the value is that of the most recent keyframe.

### Initializers

- [init(rawValue:)](skinterpolationmode/init%28rawvalue_%29.md)

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

- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.

# SKInterpolationMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes used to interpolate between keyframes in the sequence.

## Declaration

```objectivec
enum SKInterpolationMode : NSInteger;
```

## Topics

### Constants

- [SKInterpolationModeLinear](skinterpolationmode/linear.md): Values between two keyframes are interpolated linearly.
- [SKInterpolationModeSpline](skinterpolationmode/spline.md): Values between two keyframes using a spline curve.
- [SKInterpolationModeStep](skinterpolationmode/step.md): Values between two keyframes are not interpolated. Instead, the value is that of the most recent keyframe.

## See Also

### Constants

- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.
