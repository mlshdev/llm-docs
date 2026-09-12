> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/timingmode](https://developer.apple.com/documentation/scenekit/scnaction/timingmode)

# timingMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The timing mode used to execute an action.

## Declaration

```swift
var timingMode: SCNActionTimingMode { get set }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [SCNActionTimingMode](../scnactiontimingmode.md). The default value is [SCNActionTimingMode.linear](../scnactiontimingmode/linear.md).

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.

# timingMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The timing mode used to execute an action.

## Declaration

```objectivec
@property (nonatomic) SCNActionTimingMode timingMode;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [SCNActionTimingMode](../scnactiontimingmode.md). The default value is [SCNActionTimingModeLinear](../scnactiontimingmode/linear.md).

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.
