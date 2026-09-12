> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gksphereobstacle/obstaclewithradius:](https://developer.apple.com/documentation/gameplaykit/gksphereobstacle/obstaclewithradius:)

# obstacleWithRadius:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a spherical obstacle with the specified radius.

## Declaration

```objectivec
+ (instancetype) obstacleWithRadius:(float) radius;
```

## Parameters

- `radius`: The radius for the new obstacle.

<a id="return-value"></a>

## Return Value

A spherical obstacle.

<a id="Discussion"></a>

## Discussion

To make agents avoid the obstacle, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

## See Also

### Creating an Obstacle

- [initWithRadius:](init%28radius_%29.md): Initializes a spherical obstacle with the specified radius.
