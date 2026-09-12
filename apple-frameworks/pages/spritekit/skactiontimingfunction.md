> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skactiontimingfunction](https://developer.apple.com/documentation/spritekit/skactiontimingfunction)

# SKActionTimingFunction (Swift)

**Framework:** SpriteKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for the custom timing block.

## Declaration

```swift
typealias SKActionTimingFunction = (Float) -> Float
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **`time`**: The input time, where `0.0` represents the start time of the animation and `1.0` represents the end time of the animation.

The input value will be a value between `0.0` and `1.0`, inclusive. The block must also return a value between `0.0` and `1.0`. When the input time is `0.0`, the output value should be `0.0`. When the input time is `1.0`, the output value should also be `1.0`.

## See Also

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.

# SKActionTimingFunction (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for the custom timing block.

## Declaration

```objectivec
typedef float (^)(float) SKActionTimingFunction;
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **`time`**: The input time, where `0.0` represents the start time of the animation and `1.0` represents the end time of the animation.

The input value will be a value between `0.0` and `1.0`, inclusive. The block must also return a value between `0.0` and `1.0`. When the input time is `0.0`, the output value should be `0.0`. When the input time is `1.0`, the output value should also be `1.0`.

## See Also

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.
