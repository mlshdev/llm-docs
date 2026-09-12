> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscene](https://developer.apple.com/documentation/gameplaykit/gkscene)

# GKScene (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A container for associating GameplayKit objects with a SpriteKit scene.

## Declaration

```swift
class GKScene
```

<a id="overview"></a>

## Overview

When you create a scene in the Xcode SpriteKit scene editor, Xcode automatically creates a [GKScene](gkscene.md) object to manage any GameplayKit objects you add to the scene (entities, components, or pathfinding graphs) and archive them alongside the SpriteKit scene content.

To use a SpriteKit scene that contains GameplayKit objects, load the scene file with the [GKScene](gkscene.md) [init(fileNamed:)](gkscene/init%28filenamed_%29.md) method. You can then use the [entities](gkscene/entities.md) and [graphs](gkscene/graphs.md) properties to access the [GKEntity](gkentity.md) (and associated [GKComponent](gkcomponent.md)) objects and [GKGraph](gkgraph.md) objects in the scene, and the [rootNode](gkscene/rootnode.md) property to access the scene’s SpriteKit content.

> **Note**

>  Any SpriteKit node in the scene to which you’ve attached an entity or components automatically has a [GKSKNodeComponent](gksknodecomponent.md) object to manage the relationship between the node and the the [GKEntity](gkentity.md) object it represents.

For more information on Entity-Component architecture and pathfinding graphs, see [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) and [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Loading a Scene File

- [init(fileNamed:)](gkscene/init%28filenamed_%29.md): Loads the specified SpriteKit scene file, creating a [GKScene](gkscene.md) object containing the SpriteKit scene and associated GameplayKit objects.

### Accessing the SpriteKit Scene

- [rootNode](gkscene/rootnode.md): The SpriteKit scene managed by this [GKScene](gkscene.md) object.

### Managing Entities and Components

- [entities](gkscene/entities.md): The list of GameplayKit entities managed by the scene.
- [addEntity(\_:)](gkscene/addentity%28__%29.md): Adds a GameplayKit entity to the list of entities managed by the scene.
- [removeEntity(\_:)](gkscene/removeentity%28__%29.md): Removes a GameplayKit entity from the list of entities managed by the scene.

### Managing Pathfinding Graphs

- [graphs](gkscene/graphs.md): The list of pathfinding graph objects managed by the scene.
- [removeGraph(\_:)](gkscene/removegraph%28__%29.md): Removes a pathfinding graph from the list of graphs managed by the scene.

### Initializers

- [init(fileNamed:rootNode:)](gkscene/init%28filenamed_rootnode_%29.md)
- [init(coder:)](gkscene/init%28coder_%29.md)

### Instance Methods

- [addGraph(\_:name:)](gkscene/addgraph%28__name_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Xcode and SpriteKit Integration

- [GKSceneRootNodeType](gkscenerootnodetype.md): Identifies scene classes from other frameworks that support embedded GameplayKit information.
- [GKSKNodeComponent](gksknodecomponent.md): A component that manages a SpriteKit node.

# GKScene (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A container for associating GameplayKit objects with a SpriteKit scene.

## Declaration

```objectivec
@interface GKScene : NSObject
```

<a id="overview"></a>

## Overview

When you create a scene in the Xcode SpriteKit scene editor, Xcode automatically creates a [GKScene](gkscene.md) object to manage any GameplayKit objects you add to the scene (entities, components, or pathfinding graphs) and archive them alongside the SpriteKit scene content.

To use a SpriteKit scene that contains GameplayKit objects, load the scene file with the [GKScene](gkscene.md) [sceneWithFileNamed:](gkscene/init%28filenamed_%29.md) method. You can then use the [entities](gkscene/entities.md) and [graphs](gkscene/graphs.md) properties to access the [GKEntity](gkentity.md) (and associated [GKComponent](gkcomponent.md)) objects and [GKGraph](gkgraph.md) objects in the scene, and the [rootNode](gkscene/rootnode.md) property to access the scene’s SpriteKit content.

> **Note**

>  Any SpriteKit node in the scene to which you’ve attached an entity or components automatically has a [GKSKNodeComponent](gksknodecomponent.md) object to manage the relationship between the node and the the [GKEntity](gkentity.md) object it represents.

For more information on Entity-Component architecture and pathfinding graphs, see [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) and [Pathfinding](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/Pathfinding.html#//apple_ref/doc/uid/TP40015172-CH3) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Loading a Scene File

- [sceneWithFileNamed:](gkscene/init%28filenamed_%29.md): Loads the specified SpriteKit scene file, creating a [GKScene](gkscene.md) object containing the SpriteKit scene and associated GameplayKit objects.

### Accessing the SpriteKit Scene

- [rootNode](gkscene/rootnode.md): The SpriteKit scene managed by this [GKScene](gkscene.md) object.

### Managing Entities and Components

- [entities](gkscene/entities.md): The list of GameplayKit entities managed by the scene.
- [addEntity:](gkscene/addentity%28__%29.md): Adds a GameplayKit entity to the list of entities managed by the scene.
- [removeEntity:](gkscene/removeentity%28__%29.md): Removes a GameplayKit entity from the list of entities managed by the scene.

### Managing Pathfinding Graphs

- [graphs](gkscene/graphs.md): The list of pathfinding graph objects managed by the scene.
- [removeGraph:](gkscene/removegraph%28__%29.md): Removes a pathfinding graph from the list of graphs managed by the scene.

### Initializers

- [sceneWithFileNamed:rootNode:](gkscene/init%28filenamed_rootnode_%29.md)

### Instance Methods

- [addGraph:name:](gkscene/addgraph%28__name_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Xcode and SpriteKit Integration

- [GKSceneRootNodeType](gkscenerootnodetype.md): Identifies scene classes from other frameworks that support embedded GameplayKit information.
- [GKSKNodeComponent](gksknodecomponent.md): A component that manages a SpriteKit node.
