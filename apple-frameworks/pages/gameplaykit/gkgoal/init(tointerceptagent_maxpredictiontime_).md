> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal/init(tointerceptagent:maxpredictiontime:)](https://developer.apple.com/documentation/gameplaykit/gkgoal/init(tointerceptagent:maxpredictiontime:))

# init(toInterceptAgent:maxPredictionTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.

## Declaration

```swift
convenience init(toInterceptAgent target: GKAgent, maxPredictionTime: TimeInterval)
```

## Parameters

- `target`: An agent whose position affected agents will attempt to move toward.
- `maxPredictionTime`: The amount of time for which to predict the target agent’s movement.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

The `maxPredictionTime` parameter controls how far in the future the agent will plan to intercept its target. A larger value causes an affected agent to pursue its quarry more efficently, catching up with the target’s motion using fewer course corrections. A smaller value causes an affected agent to more closely follow the target’s current position despite the target’s current speed (and depending on the properties of the affected agent, it might not be able to move quickly enough to catch its target).

## See Also

### Creating Goals for Avoidance and Interception Behavior

- [init(toAvoid:maxPredictionTime:)](init%28toavoid_maxpredictiontime_%29-96a0i.md): Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.
- [init(toAvoid:maxPredictionTime:)](init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.

# goalToInterceptAgent:maxPredictionTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to make an agent pursue the specified other agent, taking into account the target’s movement.

## Declaration

```objectivec
+ (instancetype) goalToInterceptAgent:(GKAgent *) target maxPredictionTime:(NSTimeInterval) maxPredictionTime;
```

## Parameters

- `target`: An agent whose position affected agents will attempt to move toward.
- `maxPredictionTime`: The amount of time for which to predict the target agent’s movement.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

The `maxPredictionTime` parameter controls how far in the future the agent will plan to intercept its target. A larger value causes an affected agent to pursue its quarry more efficently, catching up with the target’s motion using fewer course corrections. A smaller value causes an affected agent to more closely follow the target’s current position despite the target’s current speed (and depending on the properties of the affected agent, it might not be able to move quickly enough to catch its target).

## See Also

### Creating Goals for Avoidance and Interception Behavior

- [goalToAvoidAgents:maxPredictionTime:](init%28toavoid_maxpredictiontime_%29-96a0i.md): Creates a goal whose effect is to make an agent avoid colliding with the specified other agents, taking into account the other agents’ movement.
- [goalToAvoidObstacles:maxPredictionTime:](init%28toavoid_maxpredictiontime_%29-7oslq.md): Creates a goal whose effect is to make an agent avoid colliding with the specified static obstacles.
