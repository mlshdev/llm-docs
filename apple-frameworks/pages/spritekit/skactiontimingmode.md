> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skactiontimingmode](https://developer.apple.com/documentation/spritekit/skactiontimingmode)

# SKActionTimingMode (Swift)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The modes that an action can use to adjust the apparent timing of the action.

## Declaration

```swift
enum SKActionTimingMode
```

## Mentioned In

- [Configuring Action Timing](configuring-action-timing.md)

## Topics

### Constants

- [SKActionTimingMode.linear](skactiontimingmode/linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingMode.easeIn](skactiontimingmode/easein.md): Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.
- [SKActionTimingMode.easeOut](skactiontimingmode/easeout.md): Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.
- [SKActionTimingMode.easeInEaseOut](skactiontimingmode/easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

### Initializers

- [init(rawValue:)](skactiontimingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](skactiontimingfunction.md): The signature for the custom timing block.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.

# SKActionTimingMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The modes that an action can use to adjust the apparent timing of the action.

## Declaration

```objectivec
enum SKActionTimingMode : NSInteger;
```

## Mentioned In

- [Configuring Action Timing](configuring-action-timing.md)

## Topics

### Constants

- [SKActionTimingLinear](skactiontimingmode/linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingEaseIn](skactiontimingmode/easein.md): Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.
- [SKActionTimingEaseOut](skactiontimingmode/easeout.md): Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.
- [SKActionTimingEaseInEaseOut](skactiontimingmode/easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

## See Also

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](skactiontimingfunction.md): The signature for the custom timing block.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.
