> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcircleobstacle/obstaclewithradius:](https://developer.apple.com/documentation/gameplaykit/gkcircleobstacle/obstaclewithradius:)

# obstacleWithRadius:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a circular obstacle with the specified radius.

## Declaration

```objectivec
+ (instancetype) obstacleWithRadius:(float) radius;
```

## Parameters

- `radius`: The radius for the new obstacle.

<a id="return-value"></a>

## Return Value

A circular obstacle.

<a id="Discussion"></a>

## Discussion

To make agents avoid the obstacle, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

## See Also

### Creating an Obstacle

- [initWithRadius:](init%28radius_%29.md): Initializes a circular obstacle with the specified radius.
