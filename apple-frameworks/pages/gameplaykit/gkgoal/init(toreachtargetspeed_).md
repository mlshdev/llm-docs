> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkgoal/init(toreachtargetspeed:)

# init(toReachTargetSpeed:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.

## Declaration

```swift
convenience init(toReachTargetSpeed targetSpeed: Float)
```

## Parameters

- `targetSpeed`: The speed for affected agents to reach.

<a id="return-value"></a>

## Return Value

A new goal object.

## See Also

### Creating Goals for General Movement Behavior

- [init(toSeekAgent:)](init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [init(toFleeAgent:)](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [init(toWander:)](init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

# goalToReachTargetSpeed: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.

## Declaration

```objectivec
+ (instancetype) goalToReachTargetSpeed:(float) targetSpeed;
```

## Parameters

- `targetSpeed`: The speed for affected agents to reach.

<a id="return-value"></a>

## Return Value

A new goal object.

## See Also

### Creating Goals for General Movement Behavior

- [goalToSeekAgent:](init%28toseekagent_%29.md): Creates a goal whose effect is to move an agent toward the current position of the specified other agent.
- [goalToFleeAgent:](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [goalToWander:](init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.
