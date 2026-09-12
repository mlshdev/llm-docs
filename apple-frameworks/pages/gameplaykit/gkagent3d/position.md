> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent3d/position](https://developer.apple.com/documentation/gameplaykit/gkagent3d/position)

# position (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current position of the agent in 3D space.

## Declaration

```swift
var position: vector_float3 { get set }
```

<a id="Discussion"></a>

## Discussion

The agent updates its own position, rotation, and velocity according to its goals when you call its [update(deltaTime:)](update%28deltatime_%29.md) method.

However, you can still directly change the position of an agent. Do this when you want to set the position of a static agent (that is, one with no goals) or move an agent as a direct result of user input. For example, to make a game character follow a touch (in iOS) or the mouse pointer (in macOS), you can create an invisible agent and continually update that agent’s position to match that of the touch or mouse event. Then, give the agent representing the game character a goal created with the [init(toSeekAgent:)](../gkgoal/init%28toseekagent_%29.md) method, targeting the invisible agent.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Managing an Agent’s Position and Orientation

- [rotation](rotation.md): The orientation of the agent in 3D space.

# position (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current position of the agent in 3D space.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float3 position;
```

<a id="Discussion"></a>

## Discussion

The agent updates its own position, rotation, and velocity according to its goals when you call its [updateWithDeltaTime:](update%28deltatime_%29.md) method.

However, you can still directly change the position of an agent. Do this when you want to set the position of a static agent (that is, one with no goals) or move an agent as a direct result of user input. For example, to make a game character follow a touch (in iOS) or the mouse pointer (in macOS), you can create an invisible agent and continually update that agent’s position to match that of the touch or mouse event. Then, give the agent representing the game character a goal created with the [goalToSeekAgent:](../gkgoal/init%28toseekagent_%29.md) method, targeting the invisible agent.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Managing an Agent’s Position and Orientation

- [rotation](rotation.md): The orientation of the agent in 3D space.
