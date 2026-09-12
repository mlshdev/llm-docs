> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior](https://developer.apple.com/documentation/gameplaykit/gkbehavior)

# GKBehavior (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of goals that together influence the movement of an agent.

## Declaration

```swift
class GKBehavior
```

<a id="overview"></a>

## Overview

By combining multiple goals ([GKGoal](gkgoal.md) objects) you can create complex behavior, such as groups of agents  ([GKAgent](gkagent.md) objects) that move together naturally. To assign a set of goals to an agent, use its [behavior](gkagent/behavior.md) property.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Behavior

- [init(goal:weight:)](gkbehavior/init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [init(goals:)](gkbehavior/init%28goals_%29.md): Creates a behavior with the specified goals.
- [init(goals:andWeights:)](gkbehavior/init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [init(weightedGoals:)](gkbehavior/init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.

### Managing a Behavior’s Set of Goals

- [setWeight(\_:for:)](gkbehavior/setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weight(for:)](gkbehavior/weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [remove(\_:)](gkbehavior/remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals()](gkbehavior/removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](gkbehavior/goalcount.md): The number of goals in the behavior.

### Working with Goals Using Subscript Syntax

- [subscript(\_:)](gkbehavior/subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.
- [subscript(\_:)](gkbehavior/subscript%28__%29-997a9.md): Returns the goal at the specified index in the behavior’s list of goals.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCompositeBehavior](gkcompositebehavior.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.

# GKBehavior (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A set of goals that together influence the movement of an agent.

## Declaration

```objectivec
@interface GKBehavior : NSObject
```

<a id="overview"></a>

## Overview

By combining multiple goals ([GKGoal](gkgoal.md) objects) you can create complex behavior, such as groups of agents  ([GKAgent](gkagent.md) objects) that move together naturally. To assign a set of goals to an agent, use its [behavior](gkagent/behavior.md) property.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Behavior

- [behaviorWithGoal:weight:](gkbehavior/init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [behaviorWithGoals:](gkbehavior/init%28goals_%29.md): Creates a behavior with the specified goals.
- [behaviorWithGoals:andWeights:](gkbehavior/init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [behaviorWithWeightedGoals:](gkbehavior/init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.

### Managing a Behavior’s Set of Goals

- [setWeight:forGoal:](gkbehavior/setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weightForGoal:](gkbehavior/weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [removeGoal:](gkbehavior/remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals](gkbehavior/removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](gkbehavior/goalcount.md): The number of goals in the behavior.

### Working with Goals Using Subscript Syntax

- [objectForKeyedSubscript:](gkbehavior/subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.
- [setObject:forKeyedSubscript:](gkbehavior/setobject_forkeyedsubscript_.md): Sets the weight for the goal specified by subscript syntax.
- [objectAtIndexedSubscript:](gkbehavior/subscript%28__%29-997a9.md): Returns the goal at the specified index in the behavior’s list of goals.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCompositeBehavior](gkcompositebehavior.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Agents, Goals, and Behaviors

- [GKAgent](gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKCompositeBehavior](gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.
