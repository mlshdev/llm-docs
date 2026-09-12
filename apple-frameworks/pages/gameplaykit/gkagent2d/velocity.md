> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent2d/velocity](https://developer.apple.com/documentation/gameplaykit/gkagent2d/velocity)

# velocity (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current velocity of the agent in 2D space.

## Declaration

```swift
var velocity: vector_float2 { get }
```

<a id="Discussion"></a>

## Discussion

An agent’s velocity is a calculated property—the velocity vector is determined by an agent’s facing direction (its [rotation](rotation.md) property) and its [speed](../gkagent/speed.md) property.

## See Also

### Running the Agent Simulation

- [update(deltaTime:)](update%28deltatime_%29.md): Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.

# velocity (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The current velocity of the agent in 2D space.

## Declaration

```objectivec
@property (nonatomic, readonly) vector_float2 velocity;
```

<a id="Discussion"></a>

## Discussion

An agent’s velocity is a calculated property—the velocity vector is determined by an agent’s facing direction (its [rotation](rotation.md) property) and its [speed](../gkagent/speed.md) property.

## See Also

### Running the Agent Simulation

- [updateWithDeltaTime:](update%28deltatime_%29.md): Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.
