> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/obstacles(fromnodebounds:)](https://developer.apple.com/documentation/spritekit/sknode/obstacles(fromnodebounds:))

# obstacles(fromNodeBounds:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.

## Declaration

```swift
class func obstacles(fromNodeBounds nodes: [SKNode]) -> [GKPolygonObstacle]
```

## Parameters

- `nodes`: An array of [SKNode](../sknode.md) objects.

<a id="return-value"></a>

## Return Value

An array of [GKPolygonObstacle](../../gameplaykit/gkpolygonobstacle.md) objects.

<a id="Discussion"></a>

## Discussion

Use the array of obstacles to create an obstacle graph ([GKObstacleGraph](../../gameplaykit/gkobstaclegraph.md)) in GameplayKit. See [GameplayKit](../../gameplaykit.md) and [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Adding GameplayKit Behaviors

- [entity](entity.md): The GameplayKit entity this node represents.
- [obstacles(fromNodePhysicsBodies:)](obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstacles(fromSpriteTextures:accuracy:)](obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.

# obstaclesFromNodeBounds: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.

## Declaration

```objectivec
+ (NSArray<GKPolygonObstacle *> *) obstaclesFromNodeBounds:(NSArray<SKNode *> *) nodes;
```

## Parameters

- `nodes`: An array of [SKNode](../sknode.md) objects.

<a id="return-value"></a>

## Return Value

An array of [GKPolygonObstacle](../../gameplaykit/gkpolygonobstacle.md) objects.

<a id="Discussion"></a>

## Discussion

Use the array of obstacles to create an obstacle graph ([GKObstacleGraph](../../gameplaykit/gkobstaclegraph.md)) in GameplayKit. See [GameplayKit](../../gameplaykit.md) and [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Adding GameplayKit Behaviors

- [entity](entity.md): The GameplayKit entity this node represents.
- [obstaclesFromNodePhysicsBodies:](obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstaclesFromSpriteTextures:accuracy:](obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.
