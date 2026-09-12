> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal/init(toavoid:maxpredictiontime:)-96a0i](https://developer.apple.com/documentation/gameplaykit/gkgoal/init(toavoid:maxpredictiontime:)-96a0i)

# init(toAvoid:maxPredictionTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.

## Declaration

```swift
convenience init(toAvoid agents: [GKAgent], maxPredictionTime: TimeInterval)
```

## Parameters

- `agents`: The agents with which to avoid collisions.
- `maxPredictionTime`: The amount of time during which to predict collisions.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

The `agents` array can safely include the agent(s) affected by the goal—an agent pursuing this goal will ignore itself in the array. Therefore, you can use a single goal created with this method to cause an entire group of agents to mutually avoid one another.

The `maxPredictionTime` parameter controls how far in the future a predicted collision must be in order for the agent to take action to avoid it. For example, if this parameter has a low value, two agents speeding toward one another will not swerve or slow until a collision is imminent (and depending on the properties of those agents, they might not be able to move quickly enough to avoid colliding). If this parameter has a high value, the agents will change course leisurely, well before colliding.

## See Also

### Creating Goals for Avoidance and Interception Behavior

- [init(toAvoid:maxPredictionTime:)](init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.
- [init(toInterceptAgent:maxPredictionTime:)](init%28tointerceptagent_maxpredictiontime_%29.md): Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.

# goalToAvoidAgents:maxPredictionTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.

## Declaration

```objectivec
+ (instancetype) goalToAvoidAgents:(NSArray<GKAgent *> *) agents maxPredictionTime:(NSTimeInterval) maxPredictionTime;
```

## Parameters

- `agents`: The agents with which to avoid collisions.
- `maxPredictionTime`: The amount of time during which to predict collisions.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

The `agents` array can safely include the agent(s) affected by the goal—an agent pursuing this goal will ignore itself in the array. Therefore, you can use a single goal created with this method to cause an entire group of agents to mutually avoid one another.

The `maxPredictionTime` parameter controls how far in the future a predicted collision must be in order for the agent to take action to avoid it. For example, if this parameter has a low value, two agents speeding toward one another will not swerve or slow until a collision is imminent (and depending on the properties of those agents, they might not be able to move quickly enough to avoid colliding). If this parameter has a high value, the agents will change course leisurely, well before colliding.

## See Also

### Creating Goals for Avoidance and Interception Behavior

- [goalToAvoidObstacles:maxPredictionTime:](init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.
- [goalToInterceptAgent:maxPredictionTime:](init%28tointerceptagent_maxpredictiontime_%29.md): Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.
