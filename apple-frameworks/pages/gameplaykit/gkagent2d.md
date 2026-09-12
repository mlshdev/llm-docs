> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkagent2d](https://developer.apple.com/documentation/gameplaykit/gkagent2d)

# GKAgent2D (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An agent that operates in a two-dimensional space.

## Declaration

```swift
class GKAgent2D
```

<a id="overview"></a>

## Overview

Agents are game entities that move according to realistic constraints and whose behavior is determined by goals that motivate movement. The general functionality of an agent is defined by the abstract superclass [GKAgent](gkagent.md); however, you use instances of the [GKAgent2D](gkagent2d.md) class to implement agent-based gameplay in a 2D game (or in a 3D game where gameplay-relevant movement is restricted to two dimensions).

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Managing an Agent’s Position and Orientation

- [position](gkagent2d/position.md): The current position of the agent in 2D space.
- [rotation](gkagent2d/rotation.md): The rotation of the agent around the z-axis.

### Running the Agent Simulation

- [update(deltaTime:)](gkagent2d/update%28deltatime_%29.md): Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.
- [velocity](gkagent2d/velocity.md): The current velocity of the agent in 2D space.

## Relationships

### Inherits From

- [GKAgent](gkagent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.

# GKAgent2D (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An agent that operates in a two-dimensional space.

## Declaration

```objectivec
@interface GKAgent2D : GKAgent
```

<a id="overview"></a>

## Overview

Agents are game entities that move according to realistic constraints and whose behavior is determined by goals that motivate movement. The general functionality of an agent is defined by the abstract superclass [GKAgent](gkagent.md); however, you use instances of the [GKAgent2D](gkagent2d.md) class to implement agent-based gameplay in a 2D game (or in a 3D game where gameplay-relevant movement is restricted to two dimensions).

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Managing an Agent’s Position and Orientation

- [position](gkagent2d/position.md): The current position of the agent in 2D space.
- [rotation](gkagent2d/rotation.md): The rotation of the agent around the z-axis.

### Running the Agent Simulation

- [updateWithDeltaTime:](gkagent2d/update%28deltatime_%29.md): Causes the agent to evaluate its goals and update its position, rotation, and velocity accordingly.
- [velocity](gkagent2d/velocity.md): The current velocity of the agent in 2D space.

## Relationships

### Inherits From

- [GKAgent](gkagent.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.
