> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagentdelegate/agentwillupdate(_:)](https://developer.apple.com/documentation/gameplaykit/gkagentdelegate/agentwillupdate(_:))

# agentWillUpdate(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that an agent is about to perform its next simulation step.

## Declaration

```swift
optional func agentWillUpdate(_ agent: GKAgent)
```

## Parameters

- `agent`: The agent object that will perform its next simulation step.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to update the agent simulation with data from an external source, such as node position and orientation information updated by the SceneKit or SpriteKit physics engine. Set the [position](../gkagent2d/position.md) and [rotation](../gkagent2d/rotation.md) properties of the agent (as a [GKAgent2D](../gkagent2d.md) or [GKAgent3D](../gkagent3d.md) object) so that the next simulation step will take your changes to those properties into account.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Synchronizing with Agents

- [agentDidUpdate(\_:)](agentdidupdate%28__%29.md): Tells the delegate that an agent has just performed a simulation step.

# agentWillUpdate: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that an agent is about to perform its next simulation step.

## Declaration

```objectivec
- (void) agentWillUpdate:(GKAgent *) agent;
```

## Parameters

- `agent`: The agent object that will perform its next simulation step.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to update the agent simulation with data from an external source, such as node position and orientation information updated by the SceneKit or SpriteKit physics engine. Set the [position](../gkagent2d/position.md) and [rotation](../gkagent2d/rotation.md) properties of the agent (as a [GKAgent2D](../gkagent2d.md) or [GKAgent3D](../gkagent3d.md) object) so that the next simulation step will take your changes to those properties into account.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Synchronizing with Agents

- [agentDidUpdate:](agentdidupdate%28__%29.md): Tells the delegate that an agent has just performed a simulation step.
