> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/init(goals:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/init(goals:))

# init(goals:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified goals.

## Declaration

```swift
convenience init(goals: [GKGoal])
```

## Parameters

- `goals`: An array of goal objects.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

<a id="Discussion"></a>

## Discussion

The new behavior contains the specified goals, each with a weight of `1.0`. To change a goal’s weight after creating the behavior, keep a reference to that goal and use the [setWeight(\_:for:)](setweight%28__for_%29.md) method.

## See Also

### Creating a Behavior

- [init(goal:weight:)](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [init(goals:andWeights:)](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [init(weightedGoals:)](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.

# behaviorWithGoals: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified goals.

## Declaration

```objectivec
+ (instancetype) behaviorWithGoals:(NSArray<GKGoal *> *) goals;
```

## Parameters

- `goals`: An array of goal objects.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

<a id="Discussion"></a>

## Discussion

The new behavior contains the specified goals, each with a weight of `1.0`. To change a goal’s weight after creating the behavior, keep a reference to that goal and use the [setWeight:forGoal:](setweight%28__for_%29.md) method.

## See Also

### Creating a Behavior

- [behaviorWithGoal:weight:](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [behaviorWithGoals:andWeights:](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
- [behaviorWithWeightedGoals:](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.
