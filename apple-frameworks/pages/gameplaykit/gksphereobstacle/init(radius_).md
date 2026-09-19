> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gksphereobstacle/init(radius:)

# init(radius:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a spherical obstacle with the specified radius.

## Declaration

```swift
init(radius: Float)
```

## Parameters

- `radius`: The radius for the new obstacle.

<a id="return-value"></a>

## Return Value

A spherical obstacle.

<a id="Discussion"></a>

## Discussion

To make agents avoid the obstacle, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

# initWithRadius: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a spherical obstacle with the specified radius.

## Declaration

```objectivec
- (instancetype) initWithRadius:(float) radius;
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

- [obstacleWithRadius:](obstaclewithradius_.md): Creates a spherical obstacle with the specified radius.
