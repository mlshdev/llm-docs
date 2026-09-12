> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagentdelegate/agentdidupdate(_:)](https://developer.apple.com/documentation/gameplaykit/gkagentdelegate/agentdidupdate(_:))

# agentDidUpdate(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that an agent has just performed a simulation step.

## Declaration

```swift
optional func agentDidUpdate(_ agent: GKAgent)
```

## Parameters

- `agent`: The agent object that has just performed a simulation step.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to update a display based on the latest data from the agent simulation. Read the [position](../gkagent2d/position.md) and [rotation](../gkagent2d/rotation.md) properties of the agent (as a [GKAgent2D](../gkagent2d.md) or [GKAgent3D](../gkagent3d.md) object), then set the corresponding attributes of the object that provides the agent’s visual representation.

## See Also

### Synchronizing with Agents

- [agentWillUpdate(\_:)](agentwillupdate%28__%29.md): Tells the delegate that an agent is about to perform its next simulation step.

# agentDidUpdate: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that an agent has just performed a simulation step.

## Declaration

```objectivec
- (void) agentDidUpdate:(GKAgent *) agent;
```

## Parameters

- `agent`: The agent object that has just performed a simulation step.

<a id="Discussion"></a>

## Discussion

Implement this method when you want to update a display based on the latest data from the agent simulation. Read the [position](../gkagent2d/position.md) and [rotation](../gkagent2d/rotation.md) properties of the agent (as a [GKAgent2D](../gkagent2d.md) or [GKAgent3D](../gkagent3d.md) object), then set the corresponding attributes of the object that provides the agent’s visual representation.

## See Also

### Synchronizing with Agents

- [agentWillUpdate:](agentwillupdate%28__%29.md): Tells the delegate that an agent is about to perform its next simulation step.
