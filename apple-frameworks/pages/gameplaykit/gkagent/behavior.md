> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/behavior](https://developer.apple.com/documentation/gameplaykit/gkagent/behavior)

# behavior (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A weighted collection of goals that influence the agent’s movement.

## Declaration

```swift
var behavior: GKBehavior? { get set }
```

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. You can modulate the effects of multiple goals in a behavior—use methods of this [GKBehavior](../gkbehavior.md) object to increase or decrease the relative influence of each.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# behavior (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A weighted collection of goals that influence the agent’s movement.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) GKBehavior * behavior;
```

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. You can modulate the effects of multiple goals in a behavior—use methods of this [GKBehavior](../gkbehavior.md) object to increase or decrease the relative influence of each.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
