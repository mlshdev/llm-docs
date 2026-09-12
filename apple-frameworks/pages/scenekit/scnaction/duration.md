> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/duration](https://developer.apple.com/documentation/scenekit/scnaction/duration)

# duration (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The duration required to complete an action.

## Declaration

```swift
var duration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

This is the expected duration of an action’s animation. The actual time an action takes to complete is modified by the action’s [timingMode](timingmode.md) property.

## See Also

### Adjusting an Action’s Animation Properties

- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](timingmode.md): The timing mode used to execute an action.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.

# duration (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The duration required to complete an action.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

This is the expected duration of an action’s animation. The actual time an action takes to complete is modified by the action’s [timingMode](timingmode.md) property.

## See Also

### Adjusting an Action’s Animation Properties

- [speed](speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](timingmode.md): The timing mode used to execute an action.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.
