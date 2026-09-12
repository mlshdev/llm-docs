> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/timingmode](https://developer.apple.com/documentation/spritekit/skaction/timingmode)

# timingMode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A setting that controls the speed curve of an animation.

## Declaration

```swift
var timingMode: SKActionTimingMode { get set }
```

## Mentioned In

- [Configuring Action Timing](../configuring-action-timing.md)
- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [SKActionTimingMode](../skactiontimingmode.md). The default value is [SKActionTimingMode.linear](../skactiontimingmode/linear.md).

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](duration.md): The duration required to complete an action.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.

# timingMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A setting that controls the speed curve of an animation.

## Declaration

```objectivec
@property (nonatomic) SKActionTimingMode timingMode;
```

## Mentioned In

- [Configuring Action Timing](../configuring-action-timing.md)
- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [SKActionTimingMode](../skactiontimingmode.md). The default value is [SKActionTimingLinear](../skactiontimingmode/linear.md).

## See Also

### Controlling Action Timing

- [Configuring Action Timing](../configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](duration.md): The duration required to complete an action.
- [SKActionTimingMode](../skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](../skactiontimingfunction.md): The signature for the custom timing block.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
