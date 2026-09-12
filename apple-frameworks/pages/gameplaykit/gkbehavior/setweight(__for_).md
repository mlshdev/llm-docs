> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/setweight(_:for:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/setweight(_:for:))

# setWeight(\_:for:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.

## Declaration

```swift
func setWeight(_ weight: Float, for goal: GKGoal)
```

## Parameters

- `weight`: A weight to be applied to the goal’s influence on an agent’s speed and direction.
- `goal`: A goal object.

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. To modulate the effects of multiple goals in a behavior, use this method to increase or decrease the relative influence of each.

You can use this method to vary the behaviors in your game in response to player actions or other events. For example, an enemy agent’s behavior may combine pursuing the player ([init(toInterceptAgent:maxPredictionTime:)](../gkgoal/init%28tointerceptagent_maxpredictiontime_%29.md)) with a bit of wandering ([init(toWander:)](../gkgoal/init%28towander_%29.md)) to make its movement appear natural. When the enemy has not yet sighted the player, you might reduce the weight of the pursue goal to zero; when the player attacks the enemy, you might increase the weight of the wander goal for a short time to make the enemy act dazed.

## See Also

### Managing a Behavior’s Set of Goals

- [weight(for:)](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [remove(\_:)](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals()](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.

# setWeight:forGoal: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.

## Declaration

```objectivec
- (void) setWeight:(float) weight forGoal:(GKGoal *) goal;
```

## Parameters

- `weight`: A weight to be applied to the goal’s influence on an agent’s speed and direction.
- `goal`: A goal object.

<a id="Discussion"></a>

## Discussion

When an agent evaluates its behavior, it examines each goal and calculates the change in direction and speed necessary to move toward fulfilling that goal (within the limits of the current time step and the agent’s maximum speed and turn rate). The agent then combines these influences to determine the total change in direction and speed for the current time step. To modulate the effects of multiple goals in a behavior, use this method to increase or decrease the relative influence of each.

You can use this method to vary the behaviors in your game in response to player actions or other events. For example, an enemy agent’s behavior may combine pursuing the player ([goalToInterceptAgent:maxPredictionTime:](../gkgoal/init%28tointerceptagent_maxpredictiontime_%29.md)) with a bit of wandering ([goalToWander:](../gkgoal/init%28towander_%29.md)) to make its movement appear natural. When the enemy has not yet sighted the player, you might reduce the weight of the pursue goal to zero; when the player attacks the enemy, you might increase the weight of the wander goal for a short time to make the enemy act dazed.

## See Also

### Managing a Behavior’s Set of Goals

- [weightForGoal:](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [removeGoal:](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.
