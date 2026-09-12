> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal/init(toseekagent:)](https://developer.apple.com/documentation/gameplaykit/gkgoal/init(toseekagent:))

# init(toSeekAgent:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to move an agent toward the current position of the specified other agent.

## Declaration

```swift
convenience init(toSeekAgent agent: GKAgent)
```

## Parameters

- `agent`: An agent whose position affected agents will attempt to move toward.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

This goal is similar to one produced by the [init(toInterceptAgent:maxPredictionTime:)](init%28tointerceptagent_maxpredictiontime_%29.md) method with a `maxPredictionTime` parameter of zero. Affected agents will attempt to move toward the target agent, but without taking the target’s movement into account.

You can also use this goal when you want an agent to move toward a target point, such as the current mouse or touch location. Create another agent that remains stationary at the target point (that is, has no velocity and no goals), and use that agent as the parameter when creating a goal with this method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating Goals for General Movement Behavior

- [init(toFleeAgent:)](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [init(toReachTargetSpeed:)](init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.
- [init(toWander:)](init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.

# goalToSeekAgent: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to move an agent toward the current position of the specified other agent.

## Declaration

```objectivec
+ (instancetype) goalToSeekAgent:(GKAgent *) agent;
```

## Parameters

- `agent`: An agent whose position affected agents will attempt to move toward.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

This goal is similar to one produced by the [goalToInterceptAgent:maxPredictionTime:](init%28tointerceptagent_maxpredictiontime_%29.md) method with a `maxPredictionTime` parameter of zero. Affected agents will attempt to move toward the target agent, but without taking the target’s movement into account.

You can also use this goal when you want an agent to move toward a target point, such as the current mouse or touch location. Create another agent that remains stationary at the target point (that is, has no velocity and no goals), and use that agent as the parameter when creating a goal with this method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating Goals for General Movement Behavior

- [goalToFleeAgent:](init%28tofleeagent_%29.md): Creates a goal whose effect is to move an agent away from the current position of the specified other agent.
- [goalToReachTargetSpeed:](init%28toreachtargetspeed_%29.md): Creates a goal whose effect is to accelerate or decelerate an agent until it reaches the specified speed.
- [goalToWander:](init%28towander_%29.md): Creates a goal whose effect is to make an agent wander aimlessly, moving forward and turning at random.
