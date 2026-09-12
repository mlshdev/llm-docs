> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity](https://developer.apple.com/documentation/gameplaykit/gkentity)

# GKEntity (Swift)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object relevant to gameplay, with functionality entirely provided by a collection of component objects.

## Declaration

```swift
class GKEntity
```

<a id="overview"></a>

## Overview

A [GKEntity](gkentity.md) object represents an entity in games with Entity-Component architecture. In this design, an *entity* is a general type for objects relevant to the game. Entities typically define no functionality of their own—instead, you define an entity’s features through composition, by adding *components* that each handle specific aspects of an entity’s behavior in a general way. Because components ([GKComponent](gkcomponent.md) subclasses) are general and reusable, you can add many kinds of entities to a game by combining components in different ways, without needing to design new entity classes.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Entity

- [init()](gkentity/init%28%29.md): Initializes a new entity object.

### Managing an Entity’s List of Components

- [components](gkentity/components.md): The entity’s list of components.
- [addComponent(\_:)](gkentity/addcomponent%28__%29.md): Adds a component to the entity.

### Performing Periodic Updates

- [update(deltaTime:)](gkentity/update%28deltatime_%29.md): Performs periodic updates for each of the entity’s components.

### Instance Methods

- [component(ofType:)](gkentity/component%28oftype_%29.md)
- [removeComponent(ofType:)](gkentity/removecomponent%28oftype_%29.md)

### Initializers

- [init(coder:)](gkentity/init%28coder_%29.md)

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

### Entities and Components

- [GKComponent](gkcomponent.md): The abstract superclass for creating objects that add specific gameplay functionality to an entity.
- [GKComponentSystem](gkcomponentsystem.md): Manages periodic update messages for all component objects of a specified class.

# GKEntity (Objective-C)

**Framework:** GameplayKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object relevant to gameplay, with functionality entirely provided by a collection of component objects.

## Declaration

```objectivec
@interface GKEntity : NSObject
```

<a id="overview"></a>

## Overview

A [GKEntity](gkentity.md) object represents an entity in games with Entity-Component architecture. In this design, an *entity* is a general type for objects relevant to the game. Entities typically define no functionality of their own—instead, you define an entity’s features through composition, by adding *components* that each handle specific aspects of an entity’s behavior in a general way. Because components ([GKComponent](gkcomponent.md) subclasses) are general and reusable, you can add many kinds of entities to a game by combining components in different ways, without needing to design new entity classes.

For more information on Entity-Component architecture, read [Entities and Components](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/EntityComponent.html#//apple_ref/doc/uid/TP40015172-CH6) in [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Topics

### Creating an Entity

- [init](gkentity/init%28%29.md): Initializes a new entity object.
- [entity](gkentity/entity.md): Creates a new entity object.

### Managing an Entity’s List of Components

- [components](gkentity/components.md): The entity’s list of components.
- [componentForClass:](gkentity/componentforclass_.md): Returns the entity’s component for the specified component class.
- [addComponent:](gkentity/addcomponent%28__%29.md): Adds a component to the entity.
- [removeComponentForClass:](gkentity/removecomponentforclass_.md): Removes the component of the specified class from the entity.

### Performing Periodic Updates

- [updateWithDeltaTime:](gkentity/update%28deltatime_%29.md): Performs periodic updates for each of the entity’s components.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Entities and Components

- [GKComponent](gkcomponent.md): The abstract superclass for creating objects that add specific gameplay functionality to an entity.
- [GKComponentSystem](gkcomponentsystem.md): Manages periodic update messages for all component objects of a specified class.
