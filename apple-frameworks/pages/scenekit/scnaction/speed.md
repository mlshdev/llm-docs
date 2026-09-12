> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/speed](https://developer.apple.com/documentation/scenekit/scnaction/speed)

# speed (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A speed factor that modifies how fast an action runs.

## Declaration

```swift
var speed: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The speed factor adjusts how fast an action’s animation runs. For example, a speed factor of `2.0` means the animation runs twice as fast.

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [timingMode](timingmode.md): The timing mode used to execute an action.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.

# speed (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A speed factor that modifies how fast an action runs.

## Declaration

```objectivec
@property (nonatomic) CGFloat speed;
```

<a id="Discussion"></a>

## Discussion

The speed factor adjusts how fast an action’s animation runs. For example, a speed factor of `2.0` means the animation runs twice as fast.

## See Also

### Adjusting an Action’s Animation Properties

- [duration](duration.md): The duration required to complete an action.
- [timingMode](timingmode.md): The timing mode used to execute an action.
- [timingFunction](timingfunction.md): A block SceneKit calls to determine the action’s animation timing.
