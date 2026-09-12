> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gksknodecomponent](https://developer.apple.com/documentation/gameplaykit/gksknodecomponent)

# GKSKNodeComponent (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A component that manages a SpriteKit node.

## Declaration

```swift
class GKSKNodeComponent
```

<a id="overview"></a>

## Overview

Adding a [GKSKNodeComponent](gksknodecomponent.md) object to an entity automatically updates the [entity](../spritekit/sknode/entity.md) property of the component’s SpriteKit node (an [SKNode](../spritekit/sknode.md) object) to point to that entity.

When you add entities and components to a node in the Xcode SpriteKit scene editor, Xcode automatically creates a [GKSKNodeComponent](gksknodecomponent.md) object to manage the relationship between that SpriteKit node and the [GKEntity](gkentity.md) object that node represents. Load the scene file with the [GKScene](gkscene.md) class to access these entities and components.

> **Tip**

>  The [GKSKNodeComponent](gksknodecomponent.md) class adopts the [GKAgentDelegate](gkagentdelegate.md) protocol. If you use the [GKAgent2D](gkagent2d.md) class to drive the movement of game entities, set your [GKSKNodeComponent](gksknodecomponent.md) instance as the delegate for the entity’s agent, and GameplayKit will automatically synchronize the agent and its SpriteKit representation.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a SpriteKit Component

- [init(node:)](gksknodecomponent/init%28node_%29.md): Initializes a component to manage the specified SpriteKit node.

### Accessing the Component’s SpriteKit Node

- [node](gksknodecomponent/node.md): The SpriteKit node managed by the component.

## Relationships

### Inherits From

- [GKComponent](gkcomponent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKAgentDelegate](gkagentdelegate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Xcode and SpriteKit Integration

- [GKScene](gkscene.md): A container for associating GameplayKit objects with a SpriteKit scene.
- [GKSceneRootNodeType](gkscenerootnodetype.md): Identifies scene classes from other frameworks that support embedded GameplayKit information.

# GKSKNodeComponent (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A component that manages a SpriteKit node.

## Declaration

```objectivec
@interface GKSKNodeComponent : GKComponent
```

<a id="overview"></a>

## Overview

Adding a [GKSKNodeComponent](gksknodecomponent.md) object to an entity automatically updates the [entity](../spritekit/sknode/entity.md) property of the component’s SpriteKit node (an [SKNode](../spritekit/sknode.md) object) to point to that entity.

When you add entities and components to a node in the Xcode SpriteKit scene editor, Xcode automatically creates a [GKSKNodeComponent](gksknodecomponent.md) object to manage the relationship between that SpriteKit node and the [GKEntity](gkentity.md) object that node represents. Load the scene file with the [GKScene](gkscene.md) class to access these entities and components.

> **Tip**

>  The [GKSKNodeComponent](gksknodecomponent.md) class adopts the [GKAgentDelegate](gkagentdelegate.md) protocol. If you use the [GKAgent2D](gkagent2d.md) class to drive the movement of game entities, set your [GKSKNodeComponent](gksknodecomponent.md) instance as the delegate for the entity’s agent, and GameplayKit will automatically synchronize the agent and its SpriteKit representation.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a SpriteKit Component

- [componentWithNode:](gksknodecomponent/componentwithnode_.md): Creates a component to manage the specified SpriteKit node.
- [initWithNode:](gksknodecomponent/init%28node_%29.md): Initializes a component to manage the specified SpriteKit node.

### Accessing the Component’s SpriteKit Node

- [node](gksknodecomponent/node.md): The SpriteKit node managed by the component.

## Relationships

### Inherits From

- [GKComponent](gkcomponent.md)

### Conforms To

- [GKAgentDelegate](gkagentdelegate.md)

## See Also

### Xcode and SpriteKit Integration

- [GKScene](gkscene.md): A container for associating GameplayKit objects with a SpriteKit scene.
- [GKSceneRootNodeType](gkscenerootnodetype.md): Identifies scene classes from other frameworks that support embedded GameplayKit information.
