> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcircleobstacle](https://developer.apple.com/documentation/gameplaykit/gkcircleobstacle)

# GKCircleObstacle (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A circular impassable area to be avoided by agents.

## Declaration

```swift
class GKCircleObstacle
```

<a id="overview"></a>

## Overview

To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the [init(toAvoid:maxPredictionTime:)](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md) method. Agents affected by an avoid-obstacles goal will attempt to move such that their radius never overlaps that of a circular obstacle.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Obstacle

- [init(radius:)](gkcircleobstacle/init%28radius_%29.md): Initializes a circular obstacle with the specified radius.

### Placing an Obstacle

- [position](gkcircleobstacle/position.md): The position of the obstacle.
- [radius](gkcircleobstacle/radius.md): The radius of the obstacle.

## Relationships

### Inherits From

- [GKObstacle](gkobstacle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Obstacles

- [GKObstacle](gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.

# GKCircleObstacle (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A circular impassable area to be avoided by agents.

## Declaration

```objectivec
@interface GKCircleObstacle : GKObstacle
```

<a id="overview"></a>

## Overview

To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the [goalToAvoidObstacles:maxPredictionTime:](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md) method. Agents affected by an avoid-obstacles goal will attempt to move such that their radius never overlaps that of a circular obstacle.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Obstacle

- [initWithRadius:](gkcircleobstacle/init%28radius_%29.md): Initializes a circular obstacle with the specified radius.
- [obstacleWithRadius:](gkcircleobstacle/obstaclewithradius_.md): Creates a circular obstacle with the specified radius.

### Placing an Obstacle

- [position](gkcircleobstacle/position.md): The position of the obstacle.
- [radius](gkcircleobstacle/radius.md): The radius of the obstacle.

## Relationships

### Inherits From

- [GKObstacle](gkobstacle.md)

## See Also

### Obstacles

- [GKObstacle](gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.
