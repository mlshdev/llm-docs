> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/timingfunction](https://developer.apple.com/documentation/scenekit/scnaction/timingfunction)

# timingFunction (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A block SceneKit calls to determine the action’s animation timing.

## Declaration

```swift
var timingFunction: SCNActionTimingFunction? { get set }
```

<a id="Discussion"></a>

## Discussion

The [timingMode](timingmode.md) property determines the input to your block. You use this input to compute your custom timing function, whose output determines the animation timing. The following example provides quadratic animation timing for an action, simulating the effect of gravity on a falling object:

```objc
action.timingMode = SCNActionTimingModeLinear;
action.timingFunction = ^float(float time) {
    return 1.0 - time*time;
};
```

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](timingmode.md): The timing mode used to execute an action.

# timingFunction (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A block SceneKit calls to determine the action’s animation timing.

## Declaration

```objectivec
@property (nonatomic, nullable) SCNActionTimingFunction timingFunction;
```

<a id="Discussion"></a>

## Discussion

The [timingMode](timingmode.md) property determines the input to your block. You use this input to compute your custom timing function, whose output determines the animation timing. The following example provides quadratic animation timing for an action, simulating the effect of gravity on a falling object:

```objc
action.timingMode = SCNActionTimingModeLinear;
action.timingFunction = ^float(float time) {
    return 1.0 - time*time;
};
```

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](timingmode.md): The timing mode used to execute an action.
