> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/weight(for:)](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/weight(for:))

# weight(for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight for the specified individual behavior’s influence on agents.

## Declaration

```swift
func weight(for behavior: GKBehavior) -> Float
```

## Parameters

- `behavior`: An individual behavior already included in the composite behavior.

<a id="return-value"></a>

## Return Value

The weight applied to that behavior’s influence on an agent’s speed and direction, or `0.0` if that behavior is not in the composite behavior.

<a id="Discussion"></a>

## Discussion

When an agent evaluates a composite behavior, it examines all goals across all of the individual behaviors it contains. For each goal, the agent calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step.

Weights modulate the effects of multiple goals in a behavior. Individual goals, or individual behaviors that group goals in a composite behavior, have more influence on an agent when given a greater weight.

## See Also

### Related Documentation

- [subscript(\_:)](subscript%28__%29-6jng9.md): Returns the weight associated with the behavior specified by subscript syntax.
- [subscript(\_:)](subscript%28__%29-6krdg.md): Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.

### Managing the Individual Behaviors in a Composite Behavior

- [setWeight(\_:for:)](setweight%28__for_%29.md): Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.
- [remove(\_:)](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.
- [behaviorCount](behaviorcount.md): The number of individual behaviors in the composite behavior.

# weightForBehavior: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the weight for the specified individual behavior’s influence on agents.

## Declaration

```objectivec
- (float) weightForBehavior:(GKBehavior *) behavior;
```

## Parameters

- `behavior`: An individual behavior already included in the composite behavior.

<a id="return-value"></a>

## Return Value

The weight applied to that behavior’s influence on an agent’s speed and direction, or `0.0` if that behavior is not in the composite behavior.

<a id="Discussion"></a>

## Discussion

When an agent evaluates a composite behavior, it examines all goals across all of the individual behaviors it contains. For each goal, the agent calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step.

Weights modulate the effects of multiple goals in a behavior. Individual goals, or individual behaviors that group goals in a composite behavior, have more influence on an agent when given a greater weight.

## See Also

### Related Documentation

- [objectForKeyedSubscript:](subscript%28__%29-6jng9.md): Returns the weight associated with the behavior specified by subscript syntax.
- [objectAtIndexedSubscript:](subscript%28__%29-6krdg.md): Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.

### Managing the Individual Behaviors in a Composite Behavior

- [setWeight:forBehavior:](setweight%28__for_%29.md): Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.
- [removeBehavior:](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.
- [behaviorCount](behaviorcount.md): The number of individual behaviors in the composite behavior.
