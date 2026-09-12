> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal](https://developer.apple.com/documentation/gameplaykit/gkgoal)

# GKGoal (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An influence that motivates the movement of one or more agents.

## Declaration

```swift
class GKGoal
```

<a id="overview"></a>

## Overview

Goals can motivate agents ([GKAgent](gkagent.md) objects) to actions such as moving toward a target, following a path, or staying aligned with a group of other agents. To give an agent one or more goals, combine those goals in a [GKBehavior](gkbehavior.md) object (which includes weights for the relative influence of each goal) and assign that object to the agent’s [behavior](gkagent/behavior.md) property.

Each time an agent’s [update(deltaTime:)](gkcomponent/update%28deltatime_%29.md) method runs, the agent evaluates each goal in its behavior to find the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the time delta and the agent’s maximum speed and turn rate). It then combines the effects from all the goals in its behavior, using the weights in the behavior to modulate the influence of each goal, to produce a total change in its direction and speed.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating Goals for General Movement Behavior

- [init(toSeekAgent:)](gkgoal/init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [init(toFleeAgent:)](gkgoal/init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [init(toReachTargetSpeed:)](gkgoal/init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.
- [init(toWander:)](gkgoal/init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

### Creating Goals for Avoidance and Interception Behavior

- [init(toAvoid:maxPredictionTime:)](gkgoal/init%28toavoid_maxpredictiontime_%29-96a0i.md): Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.
- [init(toAvoid:maxPredictionTime:)](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.
- [init(toInterceptAgent:maxPredictionTime:)](gkgoal/init%28tointerceptagent_maxpredictiontime_%29.md): Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.

### Creating Goals for Flocking Behavior

- [init(toSeparateFrom:maxDistance:maxAngle:)](gkgoal/init%28toseparatefrom_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent maintain the specified distance from other agents in a specified group.
- [init(toAlignWith:maxDistance:maxAngle:)](gkgoal/init%28toalignwith_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent align its orientation with that of other agents in a specified group.
- [init(toCohereWith:maxDistance:maxAngle:)](gkgoal/init%28tocoherewith_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent stay near the other agents in a specified group.

### Creating Goals for Path-Following Behavior

- [init(toStayOn:maxPredictionTime:)](gkgoal/init%28tostayon_maxpredictiontime_%29.md): Creates a goal whose effect is to maintain an agent’s position within the specified path.
- [init(toFollow:maxPredictionTime:forward:)](gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md): Creates a goal whose effect is to both maintain position on and traverse the specified path.

### Initializers

- [init(toAlignWithAgents:maxDistance:maxAngle:)](gkgoal/init%28toalignwithagents_maxdistance_maxangle_%29.md)
- [init(toAvoidAgents:maxPredictionTime:)](gkgoal/init%28toavoidagents_maxpredictiontime_%29.md)
- [init(toAvoidObstacles:maxPredictionTime:)](gkgoal/init%28toavoidobstacles_maxpredictiontime_%29.md)
- [init(toCohereWithAgents:maxDistance:maxAngle:)](gkgoal/init%28tocoherewithagents_maxdistance_maxangle_%29.md)
- [init(toFollowPath:maxPredictionTime:forward:)](gkgoal/init%28tofollowpath_maxpredictiontime_forward_%29.md)
- [init(toSeparateFromAgents:maxDistance:maxAngle:)](gkgoal/init%28toseparatefromagents_maxdistance_maxangle_%29.md)
- [init(toStayOnPath:maxPredictionTime:)](gkgoal/init%28tostayonpath_maxpredictiontime_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.

# GKGoal (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An influence that motivates the movement of one or more agents.

## Declaration

```objectivec
@interface GKGoal : NSObject
```

<a id="overview"></a>

## Overview

Goals can motivate agents ([GKAgent](gkagent.md) objects) to actions such as moving toward a target, following a path, or staying aligned with a group of other agents. To give an agent one or more goals, combine those goals in a [GKBehavior](gkbehavior.md) object (which includes weights for the relative influence of each goal) and assign that object to the agent’s [behavior](gkagent/behavior.md) property.

Each time an agent’s [updateWithDeltaTime:](gkcomponent/update%28deltatime_%29.md) method runs, the agent evaluates each goal in its behavior to find the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the time delta and the agent’s maximum speed and turn rate). It then combines the effects from all the goals in its behavior, using the weights in the behavior to modulate the influence of each goal, to produce a total change in its direction and speed.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating Goals for General Movement Behavior

- [goalToSeekAgent:](gkgoal/init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [goalToFleeAgent:](gkgoal/init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [goalToReachTargetSpeed:](gkgoal/init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.
- [goalToWander:](gkgoal/init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

### Creating Goals for Avoidance and Interception Behavior

- [goalToAvoidAgents:maxPredictionTime:](gkgoal/init%28toavoid_maxpredictiontime_%29-96a0i.md): Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.
- [goalToAvoidObstacles:maxPredictionTime:](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.
- [goalToInterceptAgent:maxPredictionTime:](gkgoal/init%28tointerceptagent_maxpredictiontime_%29.md): Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.

### Creating Goals for Flocking Behavior

- [goalToSeparateFromAgents:maxDistance:maxAngle:](gkgoal/init%28toseparatefrom_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent maintain the specified distance from other agents in a specified group.
- [goalToAlignWithAgents:maxDistance:maxAngle:](gkgoal/init%28toalignwith_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent align its orientation with that of other agents in a specified group.
- [goalToCohereWithAgents:maxDistance:maxAngle:](gkgoal/init%28tocoherewith_maxdistance_maxangle_%29.md): Creates a goal whose effect is to make an agent stay near the other agents in a specified group.

### Creating Goals for Path-Following Behavior

- [goalToStayOnPath:maxPredictionTime:](gkgoal/init%28tostayon_maxpredictiontime_%29.md): Creates a goal whose effect is to maintain an agent’s position within the specified path.
- [goalToFollowPath:maxPredictionTime:forward:](gkgoal/init%28tofollow_maxpredictiontime_forward_%29.md): Creates a goal whose effect is to both maintain position on and traverse the specified path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKBehavior](gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.
