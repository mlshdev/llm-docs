> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/entity](https://developer.apple.com/documentation/scenekit/scnnode/entity)

# entity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The GameplayKit entity this node represents.

## Declaration

```swift
weak var entity: GKEntity? { get set }
```

<a id="Discussion"></a>

## Discussion

The Entity-Component architecture in the GameplayKit framework is a way to more easily manage complex object graphs in your game. For more information on this architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

When you add entities (and their components) to a scene in the Xcode SceneKit Scene Editor, Xcode automatically archive those entities alongside the SceneKit scene content. Use the [GKScene](../../gameplaykit/gkscene.md) class to load the SceneKit scene with its associated GameplayKit objects. Each entity associated with a SceneKit node has a [GKSCNNodeComponent](../../gameplaykit/gkscnnodecomponent.md) object that manages the relationship between the node and the [GKEntity](../../gameplaykit/gkentity.md) object it represents.

# entity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The GameplayKit entity this node represents.

## Declaration

```objectivec
@property (nonatomic, weak) GKEntity * entity;
```

<a id="Discussion"></a>

## Discussion

The Entity-Component architecture in the GameplayKit framework is a way to more easily manage complex object graphs in your game. For more information on this architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

When you add entities (and their components) to a scene in the Xcode SceneKit Scene Editor, Xcode automatically archive those entities alongside the SceneKit scene content. Use the [GKScene](../../gameplaykit/gkscene.md) class to load the SceneKit scene with its associated GameplayKit objects. Each entity associated with a SceneKit node has a [GKSCNNodeComponent](../../gameplaykit/gkscnnodecomponent.md) object that manages the relationship between the node and the [GKEntity](../../gameplaykit/gkentity.md) object it represents.
