> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal/init(towander:)](https://developer.apple.com/documentation/gameplaykit/gkgoal/init(towander:))

# init(toWander:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

## Declaration

```swift
convenience init(toWander speed: Float)
```

## Parameters

- `speed`: The forward speed for affected agents to maintain while turning at random.

<a id="return-value"></a>

## Return Value

A new goal object.

## See Also

### Creating Goals for General Movement Behavior

- [init(toSeekAgent:)](init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [init(toFleeAgent:)](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [init(toReachTargetSpeed:)](init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.

# goalToWander: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

## Declaration

```objectivec
+ (instancetype) goalToWander:(float) speed;
```

## Parameters

- `speed`: The forward speed for affected agents to maintain while turning at random.

<a id="return-value"></a>

## Return Value

A new goal object.

## See Also

### Creating Goals for General Movement Behavior

- [goalToSeekAgent:](init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [goalToFleeAgent:](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [goalToReachTargetSpeed:](init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.
