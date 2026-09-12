> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgoal/init(tostayon:maxpredictiontime:)](https://developer.apple.com/documentation/gameplaykit/gkgoal/init(tostayon:maxpredictiontime:))

# init(toStayOn:maxPredictionTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to maintain an agent’s position within the specified path.

## Declaration

```swift
convenience init(toStayOn path: GKPath, maxPredictionTime: TimeInterval)
```

## Parameters

- `path`: A path object.
- `maxPredictionTime`: The amount of time for which to predict an affected agent’s movement.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

This goal uses the shape and the [radius](../gkpath/radius.md) property of the specified path to define the boundaries of an area for the agent to stay in. If an affected agent is outside that area, the agent will move into that area; if the agent is already in that area, this goal will not motivate the agent to move further.

The `maxPredictionTime` parameter determines how far ahead of time the agent will predict its own movement to fulfill this goal. For example, with a larger value, an agent moving toward the path will begin to slow gradually so as to stop gently within the path’s radius. With a smaller value, the agent will attempt to stop more abruptly as it reaches the path (and depending on its properties, it might not be able to stop quickly enough to avoid overshooting).

## See Also

### Creating Goals for Path-Following Behavior

- [init(toFollow:maxPredictionTime:forward:)](init%28tofollow_maxpredictiontime_forward_%29.md): Creates a goal whose effect is to both maintain position on and traverse the specified path.

# goalToStayOnPath:maxPredictionTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a goal whose effect is to maintain an agent’s position within the specified path.

## Declaration

```objectivec
+ (instancetype) goalToStayOnPath:(GKPath *) path maxPredictionTime:(NSTimeInterval) maxPredictionTime;
```

## Parameters

- `path`: A path object.
- `maxPredictionTime`: The amount of time for which to predict an affected agent’s movement.

<a id="return-value"></a>

## Return Value

A new goal object.

<a id="Discussion"></a>

## Discussion

This goal uses the shape and the [radius](../gkpath/radius.md) property of the specified path to define the boundaries of an area for the agent to stay in. If an affected agent is outside that area, the agent will move into that area; if the agent is already in that area, this goal will not motivate the agent to move further.

The `maxPredictionTime` parameter determines how far ahead of time the agent will predict its own movement to fulfill this goal. For example, with a larger value, an agent moving toward the path will begin to slow gradually so as to stop gently within the path’s radius. With a smaller value, the agent will attempt to stop more abruptly as it reaches the path (and depending on its properties, it might not be able to stop quickly enough to avoid overshooting).

## See Also

### Creating Goals for Path-Following Behavior

- [goalToFollowPath:maxPredictionTime:forward:](init%28tofollow_maxpredictiontime_forward_%29.md): Creates a goal whose effect is to both maintain position on and traverse the specified path.
