> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/init(goals:andweights:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/init(goals:andweights:))

# init(goals:andWeights:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified goals and weights.

## Declaration

```swift
convenience init(goals: [GKGoal], andWeights weights: [NSNumber])
```

## Parameters

- `goals`: An array of goal objects.
- `weights`: An array of numbers, each the weight to be applied to the goal at the corresponding index in the `goals` array.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Behavior

- [init(goal:weight:)](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [init(goals:)](init%28goals_%29.md): Creates a behavior with the specified goals.
- [init(weightedGoals:)](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.

# behaviorWithGoals:andWeights: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a behavior with the specified goals and weights.

## Declaration

```objectivec
+ (instancetype) behaviorWithGoals:(NSArray<GKGoal *> *) goals andWeights:(NSArray<NSNumber *> *) weights;
```

## Parameters

- `goals`: An array of goal objects.
- `weights`: An array of numbers, each the weight to be applied to the goal at the corresponding index in the `goals` array.

<a id="return-value"></a>

## Return Value

A new behavior object. To assign a set of goals to an agent, use its [behavior](../gkagent/behavior.md) property.

## See Also

### Creating a Behavior

- [behaviorWithGoal:weight:](init%28goal_weight_%29.md): Creates a behavior with a single goal.
- [behaviorWithGoals:](init%28goals_%29.md): Creates a behavior with the specified goals.
- [behaviorWithWeightedGoals:](init%28weightedgoals_%29.md): Creates a behavior with the specified mapping of goals to their weights.
