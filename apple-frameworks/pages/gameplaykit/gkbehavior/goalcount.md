> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/goalcount](https://developer.apple.com/documentation/gameplaykit/gkbehavior/goalcount)

# goalCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of goals in the behavior.

## Declaration

```swift
var goalCount: Int { get }
```

## See Also

### Managing a Behavior’s Set of Goals

- [setWeight(\_:for:)](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weight(for:)](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [remove(\_:)](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals()](removeallgoals%28%29.md): Removes all goals from the behavior.

# goalCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of goals in the behavior.

## Declaration

```objectivec
@property (readonly) NSInteger goalCount;
```

## See Also

### Managing a Behavior’s Set of Goals

- [setWeight:forGoal:](setweight%28__for_%29.md): Sets the weight for the specified goal’s influence on agents, adding that goal to the behavior if not already present.
- [weightForGoal:](weight%28for_%29.md): Returns the weight for the specified goal’s influence on agents.
- [removeGoal:](remove%28__%29.md): Removes the specified goal from the behavior.
- [removeAllGoals](removeallgoals%28%29.md): Removes all goals from the behavior.
