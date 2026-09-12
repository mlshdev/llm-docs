> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem)

# GKComponentSystem (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Manages periodic update messages for all component objects of a specified class.

## Declaration

```swift
class GKComponentSystem<ComponentType> where ComponentType : GKComponent
```

<a id="overview"></a>

## Overview

A [GKComponentSystem](gkcomponentsystem.md) object manages periodic update messages for components in a game that uses Entity-Component architecture. Use a component system to perform per-frame logic for all components of a specific class without traversing your game’s object hierarchy to dispatch update messages.

Each [GKComponentSystem](gkcomponentsystem.md) object manages components of a specific [GKComponent](gkcomponent.md) subclass. You create a component system with the [init(componentClass:)](gkcomponentsystem/init%28componentclass_%29.md) initializer, specifying the component class it will work with. Then, you register the components used by the entities in your game with the [addComponent(\_:)](gkcomponentsystem/addcomponent%28__%29.md) or [addComponent(foundIn:)](gkcomponentsystem/addcomponent%28foundin_%29.md) methods. The component system will then forward any component-specific messages it receives to all registered instances of its component class.

The most important of the component-specific messages is the [update(deltaTime:)](gkcomponentsystem/update%28deltatime_%29.md) method. Call this method from your game’s update/render loop—that is, from a method such as [update(\_:)](../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer(\_:updateAtTime:)](../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or from a [CADisplayLink](../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLink](../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine. The component system then forwards to the [update(deltaTime:)](gkcomponent/update%28deltatime_%29.md) method of all the [GKComponent](gkcomponent.md) subclass instances it manages, allowing those objects to perform per-frame update logic.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Component System

- [init(componentClass:)](gkcomponentsystem/init%28componentclass_%29.md): Initializes a component system to manage components of the specified class.

### Managing a List of Components

- [componentClass](gkcomponentsystem/componentclass.md): The class of components managed by the component system.
- [components](gkcomponentsystem/components.md): The component system’s list of components.
- [addComponent(\_:)](gkcomponentsystem/addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponent(foundIn:)](gkcomponentsystem/addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent(\_:)](gkcomponentsystem/removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponent(foundIn:)](gkcomponentsystem/removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

### Performing Periodic Updates

- [update(deltaTime:)](gkcomponentsystem/update%28deltatime_%29.md): Tells all component instances managed by the system to perform their custom periodic actions.

### Accessing Components With Subscript Syntax

- [subscript(\_:)](gkcomponentsystem/subscript%28__%29.md): Returns the component at the specified index in the system’s list of components.

### Instance Methods

- [classForGenericArgument(at:)](gkcomponentsystem/classforgenericargument%28at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Entities and Components

- [GKEntity](gkentity.md): An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
- [GKComponent](gkcomponent.md): The abstract superclass for creating objects that add specific gameplay functionality to an entity.

# GKComponentSystem (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Manages periodic update messages for all component objects of a specified class.

## Declaration

```objectivec
@interface GKComponentSystem : NSObject
```

<a id="overview"></a>

## Overview

A [GKComponentSystem](gkcomponentsystem.md) object manages periodic update messages for components in a game that uses Entity-Component architecture. Use a component system to perform per-frame logic for all components of a specific class without traversing your game’s object hierarchy to dispatch update messages.

Each [GKComponentSystem](gkcomponentsystem.md) object manages components of a specific [GKComponent](gkcomponent.md) subclass. You create a component system with the [initWithComponentClass:](gkcomponentsystem/init%28componentclass_%29.md) initializer, specifying the component class it will work with. Then, you register the components used by the entities in your game with the [addComponent:](gkcomponentsystem/addcomponent%28__%29.md) or [addComponentWithEntity:](gkcomponentsystem/addcomponent%28foundin_%29.md) methods. The component system will then forward any component-specific messages it receives to all registered instances of its component class.

The most important of the component-specific messages is the [updateWithDeltaTime:](gkcomponentsystem/update%28deltatime_%29.md) method. Call this method from your game’s update/render loop—that is, from a method such as [update:](../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer:updateAtTime:](../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or from a [CADisplayLink](../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLinkRef](../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine. The component system then forwards to the [updateWithDeltaTime:](gkcomponent/update%28deltatime_%29.md) method of all the [GKComponent](gkcomponent.md) subclass instances it manages, allowing those objects to perform per-frame update logic.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating a Component System

- [initWithComponentClass:](gkcomponentsystem/init%28componentclass_%29.md): Initializes a component system to manage components of the specified class.

### Managing a List of Components

- [componentClass](gkcomponentsystem/componentclass.md): The class of components managed by the component system.
- [components](gkcomponentsystem/components.md): The component system’s list of components.
- [addComponent:](gkcomponentsystem/addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponentWithEntity:](gkcomponentsystem/addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent:](gkcomponentsystem/removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponentWithEntity:](gkcomponentsystem/removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

### Performing Periodic Updates

- [updateWithDeltaTime:](gkcomponentsystem/update%28deltatime_%29.md): Tells all component instances managed by the system to perform their custom periodic actions.

### Accessing Components With Subscript Syntax

- [objectAtIndexedSubscript:](gkcomponentsystem/subscript%28__%29.md): Returns the component at the specified index in the system’s list of components.

### Instance Methods

- [classForGenericArgumentAtIndex:](gkcomponentsystem/classforgenericargument%28at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Entities and Components

- [GKEntity](gkentity.md): An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
- [GKComponent](gkcomponent.md): The abstract superclass for creating objects that add specific gameplay functionality to an entity.
