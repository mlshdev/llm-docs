> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkobstacle](https://developer.apple.com/documentation/gameplaykit/gkobstacle)

# GKObstacle (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract base class for objects representing impassable areas in a game world.

## Declaration

```swift
class GKObstacle
```

<a id="overview"></a>

## Overview

You do not use this class directly; instead, create instances of its concrete subclasses [GKCircleObstacle](gkcircleobstacle.md), [GKSphereObstacle](gksphereobstacle.md), and [GKPolygonObstacle](gkpolygonobstacle.md). To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCircleObstacle](gkcircleobstacle.md)
- [GKPolygonObstacle](gkpolygonobstacle.md)
- [GKSphereObstacle](gksphereobstacle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Obstacles

- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.

# GKObstacle (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract base class for objects representing impassable areas in a game world.

## Declaration

```objectivec
@interface GKObstacle : NSObject
```

<a id="overview"></a>

## Overview

You do not use this class directly; instead, create instances of its concrete subclasses [GKCircleObstacle](gkcircleobstacle.md), [GKSphereObstacle](gksphereobstacle.md), and [GKPolygonObstacle](gkpolygonobstacle.md). To make agents ([GKAgent](gkagent.md) objects) avoid obstacles, create a goal with the goalToAvoidObstacles:timeBeforeCollisionToAvoid: method.

To learn more about using goals and agents, see [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKCircleObstacle](gkcircleobstacle.md)
- [GKPolygonObstacle](gkpolygonobstacle.md)
- [GKSphereObstacle](gksphereobstacle.md)

## See Also

### Obstacles

- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
- [GKPolygonObstacle](gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.
