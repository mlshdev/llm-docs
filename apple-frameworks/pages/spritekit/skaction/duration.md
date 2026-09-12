> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/duration](https://developer.apple.com/documentation/spritekit/skaction/duration)

# duration (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The duration required to complete an action.

## Declaration

```swift
var duration: TimeInterval { get set }
```

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

This is the expected duration of an action’s animation. The actual time an action takes to complete is modified by the [speed](speed.md) property of the action and the [speed](../sknode/speed.md) property of the node on which it executes.

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [timingMode](timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.

# duration (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The duration required to complete an action.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval duration;
```

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

This is the expected duration of an action’s animation. The actual time an action takes to complete is modified by the [speed](speed.md) property of the action and the [speed](../sknode/speed.md) property of the node on which it executes.

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [timingMode](timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
