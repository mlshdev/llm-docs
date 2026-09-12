> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkpolygonobstacle](https://developer.apple.com/documentation/gameplaykit/gkpolygonobstacle)

# GKPolygonObstacle (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A polygon-shaped impassable area in a 2D game world.

## Declaration

```swift
class GKPolygonObstacle
```

<a id="overview"></a>

## Overview

Polygon obstacles serve two purposes in GameplayKit: You can use polygon obstacles to construct a navigability graph of your game world (a [GKObstacleGraph](gkobstaclegraph.md) object) for use in pathfinding. You can also use polygon obstacles to define regions for agents ([GKAgent](gkagent.md) objects) to avoid, using the [GKGoal](gkgoal.md) method [init(toAvoid:maxPredictionTime:)](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md).

To easily create obstacles for use with a SpriteKit game, create and arrange a set of nodes that define the non-navigable regions of your game world. You can create such nodes programmatically, or use the SpriteKit Scene Editor in Xcode. If you’re already using nodes with physics bodies to keep sprites from entering those regions, you can reuse those nodes. Then, use the [obstacles(fromNodeBounds:)](../spritekit/sknode/obstacles%28fromnodebounds_%29.md), [obstacles(fromSpriteTextures:accuracy:)](../spritekit/sknode/obstacles%28fromspritetextures_accuracy_%29.md), or [obstacles(fromNodePhysicsBodies:)](../spritekit/sknode/obstacles%28fromnodephysicsbodies_%29.md) method to generate a set of [GKPolygonObstacle](gkpolygonobstacle.md) objects.

To learn more about both ways of using polygon obstacles, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) and [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Inspecting Vertices

- [vertexCount](gkpolygonobstacle/vertexcount.md): The number of vertices that define the polygon-shaped area of the obstacle.
- [vertex(at:)](gkpolygonobstacle/vertex%28at_%29.md): Returns the point coordinates of the specified vertex.

### Initializers

- [init(points:)](gkpolygonobstacle/init%28points_%29.md)
- [init(coder:)](gkpolygonobstacle/init%28coder_%29.md)

## Relationships

### Inherits From

- [GKObstacle](gkobstacle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Obstacles

- [GKObstacle](gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.

# GKPolygonObstacle (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A polygon-shaped impassable area in a 2D game world.

## Declaration

```objectivec
@interface GKPolygonObstacle : GKObstacle
```

<a id="overview"></a>

## Overview

Polygon obstacles serve two purposes in GameplayKit: You can use polygon obstacles to construct a navigability graph of your game world (a [GKObstacleGraph](gkobstaclegraph.md) object) for use in pathfinding. You can also use polygon obstacles to define regions for agents ([GKAgent](gkagent.md) objects) to avoid, using the [GKGoal](gkgoal.md) method [goalToAvoidObstacles:maxPredictionTime:](gkgoal/init%28toavoid_maxpredictiontime_%29-7oslq.md).

To easily create obstacles for use with a SpriteKit game, create and arrange a set of nodes that define the non-navigable regions of your game world. You can create such nodes programmatically, or use the SpriteKit Scene Editor in Xcode. If you’re already using nodes with physics bodies to keep sprites from entering those regions, you can reuse those nodes. Then, use the [obstaclesFromNodeBounds:](../spritekit/sknode/obstacles%28fromnodebounds_%29.md), [obstaclesFromSpriteTextures:accuracy:](../spritekit/sknode/obstacles%28fromspritetextures_accuracy_%29.md), or [obstaclesFromNodePhysicsBodies:](../spritekit/sknode/obstacles%28fromnodephysicsbodies_%29.md) method to generate a set of [GKPolygonObstacle](gkpolygonobstacle.md) objects.

To learn more about both ways of using polygon obstacles, see [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) and [Agents, Goals, and Behaviors](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Agent.html#//apple_ref/doc/uid/TP40015172-CH8) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Polygon Obstacle

- [initWithPoints:count:](gkpolygonobstacle/initwithpoints_count_.md): Initializes a polygon obstacle with the specified list of vertices.
- [obstacleWithPoints:count:](gkpolygonobstacle/obstaclewithpoints_count_.md): Creates a polygon obstacle with the specified list of vertices.

### Inspecting Vertices

- [vertexCount](gkpolygonobstacle/vertexcount.md): The number of vertices that define the polygon-shaped area of the obstacle.
- [vertexAtIndex:](gkpolygonobstacle/vertex%28at_%29.md): Returns the point coordinates of the specified vertex.

## Relationships

### Inherits From

- [GKObstacle](gkobstacle.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Obstacles

- [GKObstacle](gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKCircleObstacle](gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKSphereObstacle](gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
