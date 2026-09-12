> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/speed](https://developer.apple.com/documentation/gameplaykit/gkagent/speed)

# speed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s current forward speed, in units per second.

## Declaration

```swift
var speed: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This property measures only the agent’s speed in the direction it faces. The concrete subclasses of [GKAgent](../gkagent.md) relate speed to orientation and position; see the [velocity](../gkagent2d/velocity.md) ([GKAgent2D](../gkagent2d.md)) or [velocity](../gkagent3d/velocity.md) ([GKAgent3D](../gkagent3d.md)) property for the appropriate subclass.

# speed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The agent’s current forward speed, in units per second.

## Declaration

```objectivec
@property (nonatomic) float speed;
```

<a id="Discussion"></a>

## Discussion

This property measures only the agent’s speed in the direction it faces. The concrete subclasses of [GKAgent](../gkagent.md) relate speed to orientation and position; see the [velocity](../gkagent2d/velocity.md) ([GKAgent2D](../gkagent2d.md)) or [velocity](../gkagent3d/velocity.md) ([GKAgent3D](../gkagent3d.md)) property for the appropriate subclass.
