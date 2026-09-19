> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkcircleobstacle/init(radius:)

# init(radius:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a circular obstacle with the specified radius.

## Declaration

```swift
init(radius: Float)
```

## Parameters

- `radius`: The radius for the new obstacle.

<a id="return-value"></a>

## Return Value

A circular obstacle.

<a id="Discussion"></a>

## Discussion

To make agents avoid the obstacle, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithRadius: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a circular obstacle with the specified radius.

## Declaration

```objectivec
- (instancetype) initWithRadius:(float) radius;
```

## Parameters

- `radius`: The radius for the new obstacle.

<a id="return-value"></a>

## Return Value

A circular obstacle.

<a id="Discussion"></a>

## Discussion

To make agents avoid the obstacle, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating an Obstacle

- [obstacleWithRadius:](obstaclewithradius_.md): Creates a circular obstacle with the specified radius.
