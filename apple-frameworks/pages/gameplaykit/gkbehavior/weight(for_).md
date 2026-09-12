> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/weight(for:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/weight(for:))

# weight(for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight for the specified goal’s influence on agents.

## Declaration

```swift
func weight(for goal: GKGoal) -> Float
```

## Parameters

- `goal`: A goal already included in the behavior’s set of goals.

<a id="return-value"></a>

## Return Value

The weight to be applied to the goal’s influence on an agent’s speed and direction, or `0.0` if the goal is not in the behavior.

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. Weights modulate the effects of multiple goals in a behavior.

## See Also

### Related Documentation

- [subscript(\_:)](subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.

### Managing a Behavior’s Set of Goals

- [setWeight(\_:for:)](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [remove(\_:)](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals()](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.

# weightForGoal: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight for the specified goal’s influence on agents.

## Declaration

```objectivec
- (float) weightForGoal:(GKGoal *) goal;
```

## Parameters

- `goal`: A goal already included in the behavior’s set of goals.

<a id="return-value"></a>

## Return Value

The weight to be applied to the goal’s influence on an agent’s speed and direction, or `0.0` if the goal is not in the behavior.

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. Weights modulate the effects of multiple goals in a behavior.

## See Also

### Related Documentation

- [objectForKeyedSubscript:](subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.

### Managing a Behavior’s Set of Goals

- [setWeight:forGoal:](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [removeGoal:](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.
