> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gksphereobstacle](https://developer.apple.com/documentation/gameplaykit/gksphereobstacle)

# GKSphereObstacle (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A spherical impassable volume to be avoided by agents.

## Declaration

```swift
class GKSphereObstacle
```

<a id="overview"></a>

## Overview

To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the [init(toAvoid:maxPredictionTime:)](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md) method. Agents affected by an avoid-obstacles goal will attempt to move such that their radius never overlaps that of a spherical obstacle.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Obstacle

- [init(radius:)](gksphereobstacle/init%28radius_%29.md): Initializes a spherical obstacle with the specified radius.

### Placing an Obstacle

- [position](gksphereobstacle/position.md): The position of the obstacle.
- [radius](gksphereobstacle/radius.md): The radius of the obstacle.

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
- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.

# GKSphereObstacle (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A spherical impassable volume to be avoided by agents.

## Declaration

```objectivec
@interface GKSphereObstacle : GKObstacle
```

<a id="overview"></a>

## Overview

To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the [goalToAvoidObstacles:maxPredictionTime:](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md) method. Agents affected by an avoid-obstacles goal will attempt to move such that their radius never overlaps that of a spherical obstacle.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Obstacle

- [initWithRadius:](gksphereobstacle/init%28radius_%29.md): Initializes a spherical obstacle with the specified radius.
- [obstacleWithRadius:](gksphereobstacle/obstaclewithradius_.md): Creates a spherical obstacle with the specified radius.

### Placing an Obstacle

- [position](gksphereobstacle/position.md): The position of the obstacle.
- [radius](gksphereobstacle/radius.md): The radius of the obstacle.

## Relationships

### Inherits From

- [GKObstacle](gkobstacle.md)

## See Also

### Obstacles

- [GKObstacle](gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.
