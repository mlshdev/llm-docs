> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/setweight(_:for:)](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/setweight(_:for:))

# setWeight(\_:for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.

## Declaration

```swift
func setWeight(_ weight: Float, for behavior: GKBehavior)
```

## Parameters

- `weight`: A weight to be applied to the individual behavior’s influence on an agent’s speed and direction.
- `behavior`: A behavior object.

<a id="Discussion"></a>

## Discussion

When an agent evaluates a composite behavior, it examines all goals across all of the individual behaviors it contains. For each goal, the agent calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step.

Weights modulate the effects of multiple goals in a behavior. Individual goals, or individual behaviors that group goals in a composite behavior, have more influence on an agent when given a greater weight.

You can use this method to vary the behaviors in your game in response to player actions or other events. For example, the behavior for a group of enemy agents may combine pursuing the player with a set of goals that keep them moving together as a flock. At various times during gameplay, you can adjust the weight of the flocking behaviors as a group to make the enemies more or less inclined to stick together while pursuing the player.

## See Also

### Managing the Individual Behaviors in a Composite Behavior

- [weight(for:)](weight%28for_%29.md): Returns the weight for the specified individual behavior’s influence on agents.
- [remove(\_:)](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.
- [behaviorCount](behaviorcount.md): The number of individual behaviors in the composite behavior.

# setWeight:forBehavior: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the specified individual behavior’s influence on agents, adding that behavior to the composite behavior if it is not already present.

## Declaration

```objectivec
- (void) setWeight:(float) weight forBehavior:(GKBehavior *) behavior;
```

## Parameters

- `weight`: A weight to be applied to the individual behavior’s influence on an agent’s speed and direction.
- `behavior`: A behavior object.

<a id="Discussion"></a>

## Discussion

When an agent evaluates a composite behavior, it examines all goals across all of the individual behaviors it contains. For each goal, the agent calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step.

Weights modulate the effects of multiple goals in a behavior. Individual goals, or individual behaviors that group goals in a composite behavior, have more influence on an agent when given a greater weight.

You can use this method to vary the behaviors in your game in response to player actions or other events. For example, the behavior for a group of enemy agents may combine pursuing the player with a set of goals that keep them moving together as a flock. At various times during gameplay, you can adjust the weight of the flocking behaviors as a group to make the enemies more or less inclined to stick together while pursuing the player.

## See Also

### Related Documentation

- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the weight for the behavior specified by subscript syntax.

### Managing the Individual Behaviors in a Composite Behavior

- [weightForBehavior:](weight%28for_%29.md): Returns the weight for the specified individual behavior’s influence on agents.
- [removeBehavior:](remove%28__%29.md): Removes the specified individual behavior from the composite behavior.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all individual behaviors from the composite behavior.
- [behaviorCount](behaviorcount.md): The number of individual behaviors in the composite behavior.
