> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/remove(_:)](https://developer.apple.com/documentation/gameplaykit/gkbehavior/remove(_:))

# remove(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified goal from the behavior.

## Declaration

```swift
func remove(_ goal: GKGoal)
```

## Parameters

- `goal`: A goal object.

## See Also

### Managing a Behavior’s Set of Goals

- [setWeight(\_:for:)](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weight(for:)](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [removeAllGoals()](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.

# removeGoal: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified goal from the behavior.

## Declaration

```objectivec
- (void) removeGoal:(GKGoal *) goal;
```

## Parameters

- `goal`: A goal object.

## See Also

### Managing a Behavior’s Set of Goals

- [setWeight:forGoal:](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weightForGoal:](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [removeAllGoals](removeallgoals%28%29.md): Removes all goals from the behavior.
- [goalCount](goalcount.md): The number of goals in the behavior.
