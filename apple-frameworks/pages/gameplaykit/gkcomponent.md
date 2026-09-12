> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponent](https://developer.apple.com/documentation/gameplaykit/gkcomponent)

# GKComponent (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for creating objects that add specific gameplay functionality to an entity.

## Declaration

```swift
class GKComponent
```

<a id="overview"></a>

## Overview

[GKComponent](gkcomponent.md) is the abstract superclass for custom component classes you create when building a game with Entity-Component architecture. In this architecture, an *entity* is an object relevant to the game, and a *component* is an object that handles specific aspects of an entity’s behavior in a general way. Because a component’s scope of functionality is limited, you can reuse the same component class for many different kinds of entities.

You create components by subclassing [GKComponent](gkcomponent.md) to implement reusable behavior. Then, you build game entities by creating [GKEntity](gkentity.md) objects and using the [addComponent(\_:)](gkentity/addcomponent%28__%29.md) method to attach instances of your custom component classes.

At runtime, a component-based game needs to dispatch periodic logic—from an update/render loop method such as [update(\_:)](../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer(\_:updateAtTime:)](../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or a [CADisplayLink](../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLink](../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine—to each of its components. GameplayKit provides two mechanisms for dispatching updates:

- Per-entity. Call each entity’s [update(deltaTime:)](gkentity/update%28deltatime_%29.md) method, which will then forward to the [update(deltaTime:)](gkcomponent/update%28deltatime_%29.md) method of each component. This option can be quickly implemented in games with a small number of entities and components.
- Per-component. Use a [GKComponentSystem](gkcomponentsystem.md) object to handle all instances of a specific component class. When you call a component system’s [update(deltaTime:)](gkcomponentsystem/update%28deltatime_%29.md) method, it forwards to the [update(deltaTime:)](gkcomponent/update%28deltatime_%29.md) method of all the component objects it manages. Because a component system needs no knowledge of your game’s entity/component hierarchy, this option works well for games with complex object graphs.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Performing Periodic Updates

- [update(deltaTime:)](gkcomponent/update%28deltatime_%29.md): Performs any custom periodic actions defined by the component subclass.

### Working with Entities

- [entity](gkcomponent/entity.md): The entity that owns this component.
- [didAddToEntity()](gkcomponent/didaddtoentity%28%29.md): Notifies the component that it has been assigned to an entity.
- [willRemoveFromEntity()](gkcomponent/willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

### Initializers

- [init(coder:)](gkcomponent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKAgent](gkagent.md)
- [GKSCNNodeComponent](gkscnnodecomponent.md)
- [GKSKNodeComponent](gksknodecomponent.md)

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

### Entities and Components

- [GKEntity](gkentity.md): An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
- [GKComponentSystem](gkcomponentsystem.md): Manages periodic update messages for all component objects of a specified class.

# GKComponent (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for creating objects that add specific gameplay functionality to an entity.

## Declaration

```objectivec
@interface GKComponent : NSObject
```

<a id="overview"></a>

## Overview

[GKComponent](gkcomponent.md) is the abstract superclass for custom component classes you create when building a game with Entity-Component architecture. In this architecture, an *entity* is an object relevant to the game, and a *component* is an object that handles specific aspects of an entity’s behavior in a general way. Because a component’s scope of functionality is limited, you can reuse the same component class for many different kinds of entities.

You create components by subclassing [GKComponent](gkcomponent.md) to implement reusable behavior. Then, you build game entities by creating [GKEntity](gkentity.md) objects and using the [addComponent:](gkentity/addcomponent%28__%29.md) method to attach instances of your custom component classes.

At runtime, a component-based game needs to dispatch periodic logic—from an update/render loop method such as [update:](../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer:updateAtTime:](../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or a [CADisplayLink](../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLinkRef](../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine—to each of its components. GameplayKit provides two mechanisms for dispatching updates:

- Per-entity. Call each entity’s [updateWithDeltaTime:](gkentity/update%28deltatime_%29.md) method, which will then forward to the [updateWithDeltaTime:](gkcomponent/update%28deltatime_%29.md) method of each component. This option can be quickly implemented in games with a small number of entities and components.
- Per-component. Use a [GKComponentSystem](gkcomponentsystem.md) object to handle all instances of a specific component class. When you call a component system’s [updateWithDeltaTime:](gkcomponentsystem/update%28deltatime_%29.md) method, it forwards to the [updateWithDeltaTime:](gkcomponent/update%28deltatime_%29.md) method of all the component objects it manages. Because a component system needs no knowledge of your game’s entity/component hierarchy, this option works well for games with complex object graphs.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Performing Periodic Updates

- [updateWithDeltaTime:](gkcomponent/update%28deltatime_%29.md): Performs any custom periodic actions defined by the component subclass.

### Working with Entities

- [entity](gkcomponent/entity.md): The entity that owns this component.
- [didAddToEntity](gkcomponent/didaddtoentity%28%29.md): Notifies the component that it has been assigned to an entity.
- [willRemoveFromEntity](gkcomponent/willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [GKAgent](gkagent.md)
- [GKSCNNodeComponent](gkscnnodecomponent.md)
- [GKSKNodeComponent](gksknodecomponent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Entities and Components

- [GKEntity](gkentity.md): An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
- [GKComponentSystem](gkcomponentsystem.md): Manages periodic update messages for all component objects of a specified class.
