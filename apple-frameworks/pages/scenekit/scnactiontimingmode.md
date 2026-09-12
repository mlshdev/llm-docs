> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactiontimingmode](https://developer.apple.com/documentation/scenekit/scnactiontimingmode)

# SCNActionTimingMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.

## Declaration

```swift
enum SCNActionTimingMode
```

## Topics

### Constants

- [SCNActionTimingMode.linear](scnactiontimingmode/linear.md): Linear pacing. The animation progresses evenly throughout its duration.
- [SCNActionTimingMode.easeIn](scnactiontimingmode/easein.md): Ease-in pacing. The animation begins slowly, and then speeds up as it progresses.
- [SCNActionTimingMode.easeOut](scnactiontimingmode/easeout.md): Ease-out pacing. The animation begins quickly, and then slows as it completes.
- [SCNActionTimingMode.easeInEaseOut](scnactiontimingmode/easeineaseout.md): Ease-in ease-out pacing. The animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

### Initializers

- [init(rawValue:)](scnactiontimingmode/init%28rawvalue_%29.md)

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

- [SCNActionTimingFunction](scnactiontimingfunction.md): The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.

# SCNActionTimingMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.

## Declaration

```objectivec
enum SCNActionTimingMode : NSInteger;
```

## Topics

### Constants

- [SCNActionTimingModeLinear](scnactiontimingmode/linear.md): Linear pacing. The animation progresses evenly throughout its duration.
- [SCNActionTimingModeEaseIn](scnactiontimingmode/easein.md): Ease-in pacing. The animation begins slowly, and then speeds up as it progresses.
- [SCNActionTimingModeEaseOut](scnactiontimingmode/easeout.md): Ease-out pacing. The animation begins quickly, and then slows as it completes.
- [SCNActionTimingModeEaseInEaseOut](scnactiontimingmode/easeineaseout.md): Ease-in ease-out pacing. The animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

## See Also

### Constants

- [SCNActionTimingFunction](scnactiontimingfunction.md): The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.
