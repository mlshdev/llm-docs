> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/entity](https://developer.apple.com/documentation/spritekit/sknode/entity)

# entity (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The GameplayKit entity this node represents.

## Declaration

```swift
weak var entity: GKEntity? { get set }
```

<a id="Discussion"></a>

## Discussion

The Entity-Component architecture in the GameplayKit framework is a way to more easily manage complex object graphs in your game. For more information on this architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

When you add entities (and their components) to a scene in the Xcode SpriteKit Scene Editor, Xcode automatically  archive those entities alongside the SpriteKit scene content. Use the [GKScene](../../gameplaykit/gkscene.md) class to load the SpriteKit scene with its associated GameplayKit objects. Each entity associated with a SpriteKit node has a [GKSKNodeComponent](../../gameplaykit/gksknodecomponent.md) object that manages the relationship between the node and the [GKEntity](../../gameplaykit/gkentity.md) object it represents.

## See Also

### Adding GameplayKit Behaviors

- [obstacles(fromNodeBounds:)](obstacles%28fromnodebounds_%29.md): Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.
- [obstacles(fromNodePhysicsBodies:)](obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstacles(fromSpriteTextures:accuracy:)](obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.

# entity (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The GameplayKit entity this node represents.

## Declaration

```objectivec
@property (nonatomic, weak) GKEntity * entity;
```

<a id="Discussion"></a>

## Discussion

The Entity-Component architecture in the GameplayKit framework is a way to more easily manage complex object graphs in your game. For more information on this architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

When you add entities (and their components) to a scene in the Xcode SpriteKit Scene Editor, Xcode automatically  archive those entities alongside the SpriteKit scene content. Use the [GKScene](../../gameplaykit/gkscene.md) class to load the SpriteKit scene with its associated GameplayKit objects. Each entity associated with a SpriteKit node has a [GKSKNodeComponent](../../gameplaykit/gksknodecomponent.md) object that manages the relationship between the node and the [GKEntity](../../gameplaykit/gkentity.md) object it represents.

## See Also

### Adding GameplayKit Behaviors

- [obstaclesFromNodeBounds:](obstacles%28fromnodebounds_%29.md): Converts each node into an obstacle by transforming its bounds into the scene’s coordinate system.
- [obstaclesFromNodePhysicsBodies:](obstacles%28fromnodephysicsbodies_%29.md): Converts each node into an obstacle by transforming the node’s physics body shape into the scene’s coordinate system.
- [obstaclesFromSpriteTextures:accuracy:](obstacles%28fromspritetextures_accuracy_%29.md): Turns each node into an obstacle by changing the node’s texture into a physics shape and converting it into the scene’s coordinate system.
