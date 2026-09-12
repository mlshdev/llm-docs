> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/init(weightedgoals:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/init(weightedgoals:))

# init(weightedGoals:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified mapping of goals to their weights.

## Declaration

```swift
convenience init(weightedGoals: [GKGoal : NSNumber])
```

## Parameters

- `weightedGoals`: A dictionary whose keys are goal objects, where each value is the weight to be applied to the corresponding goal’s influence on an agent’s speed and direction.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Behavior

- [init(goal:weight:)](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [init(goals:)](init%28goals_%29.md): Creates a behavior with the specified goals.
- [init(goals:andWeights:)](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.

# behaviorWithWeightedGoals: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified mapping of goals to their weights.

## Declaration

```objectivec
+ (instancetype) behaviorWithWeightedGoals:(NSDictionary<GKGoal *,NSNumber *> *) weightedGoals;
```

## Parameters

- `weightedGoals`: A dictionary whose keys are goal objects, where each value is the weight to be applied to the corresponding goal’s influence on an agent’s speed and direction.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Behavior

- [behaviorWithGoal:weight:](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [behaviorWithGoals:](init%28goals_%29.md): Creates a behavior with the specified goals.
- [behaviorWithGoals:andWeights:](init%28goals_andweights_%29.md): Creates a behavior with the specified goals and weights.
