> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/init(goal:weight:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/init(goal:weight:))

# init(goal:weight:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with a single goal.

## Declaration

```swift
convenience init(goal: GKGoal, weight: Float)
```

## Parameters

- `goal`: A goal object.
- `weight`: A weight to be applied to the goal’s influence on an agent’s speed and direction.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Behavior

- [init(goals:)](init%28goals_%29.md): Creates a behavior with the specified goals.
- [init(goals:andWeights:)](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [init(weightedGoals:)](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.

# behaviorWithGoal:weight: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with a single goal.

## Declaration

```objectivec
+ (instancetype) behaviorWithGoal:(GKGoal *) goal weight:(float) weight;
```

## Parameters

- `goal`: A goal object.
- `weight`: A weight to be applied to the goal’s influence on an agent’s speed and direction.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Behavior

- [behaviorWithGoals:](init%28goals_%29.md): Creates a behavior with the specified goals.
- [behaviorWithGoals:andWeights:](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [behaviorWithWeightedGoals:](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.
