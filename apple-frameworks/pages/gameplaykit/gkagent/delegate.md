> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent/delegate](https://developer.apple.com/documentation/gameplaykit/gkagent/delegate)

# delegate (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that prepares for or responds to updates in the agent simulation.

## Declaration

```swift
weak var delegate: (any GKAgentDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

When you call the agent’s [update(deltaTime:)](../gkcomponent/update%28deltatime_%29.md) method (directly or through an entity or component system), the agent sends messages to its delegate before and after evaluating its goals and updating its position and direction to match. You can use the methods in the [GKAgentDelegate](../gkagentdelegate.md) protocol to update the visual representation of an agent, or to change the agent’s position and direction based on external influences such as a SpriteKit or SceneKit physics simulation.

# delegate (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that prepares for or responds to updates in the agent simulation.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKAgentDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

When you call the agent’s [updateWithDeltaTime:](../gkcomponent/update%28deltatime_%29.md) method (directly or through an entity or component system), the agent sends messages to its delegate before and after evaluating its goals and updating its position and direction to match. You can use the methods in the [GKAgentDelegate](../gkagentdelegate.md) protocol to update the visual representation of an agent, or to change the agent’s position and direction based on external influences such as a SpriteKit or SceneKit physics simulation.
