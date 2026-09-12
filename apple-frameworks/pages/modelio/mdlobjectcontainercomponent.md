> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobjectcontainercomponent](https://developer.apple.com/documentation/modelio/mdlobjectcontainercomponent)

# MDLObjectContainerComponent (Swift)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for classes that can act as containers in an object hierarchy.

## Declaration

```swift
protocol MDLObjectContainerComponent : NSFastEnumeration, MDLComponent
```

<a id="overview"></a>

## Overview

Model I/O uses this interface to represent content loaded from an asset file. Various asset file formats define collections of information to describe their contents, such as a hierarchy of transforms to model the spatial relationships between models, lights, and meshes contained in an asset. When Model I/O imports such asset formats, the contents of the asset are objects implementing this protocol. You can also adopt this protocol in your own classes to describe your own custom asset formats—for example, one that includes collections of scripts and their triggers associated with the objects in a scene.

## Topics

### Working with Child Objects

- [objects](mdlobjectcontainercomponent/objects.md): This object’s array of child objects.
- [add(\_:)](mdlobjectcontainercomponent/add%28__%29.md): Adds the specified object as a child of this object.
- [remove(\_:)](mdlobjectcontainercomponent/remove%28__%29.md): Removes the specified object from this object’s array of children.

### Instance Properties

- [count](mdlobjectcontainercomponent/count.md)

### Subscripts

- [subscript(\_:)](mdlobjectcontainercomponent/subscript%28__%29.md)

## Relationships

### Inherits From

- [MDLComponent](mdlcomponent.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLObjectContainer](mdlobjectcontainer.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainer](mdlobjectcontainer.md): A default implementation for handling object hierarchy relationships in a 3D asset.
- [MDLTransformComponent](mdltransformcomponent.md): The general interface for classes that manage local coordinate space transforms for 3D objects

# MDLObjectContainerComponent (Objective-C)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for classes that can act as containers in an object hierarchy.

## Declaration

```objectivec
@protocol MDLObjectContainerComponent <MDLComponent, NSFastEnumeration>
```

<a id="overview"></a>

## Overview

Model I/O uses this interface to represent content loaded from an asset file. Various asset file formats define collections of information to describe their contents, such as a hierarchy of transforms to model the spatial relationships between models, lights, and meshes contained in an asset. When Model I/O imports such asset formats, the contents of the asset are objects implementing this protocol. You can also adopt this protocol in your own classes to describe your own custom asset formats—for example, one that includes collections of scripts and their triggers associated with the objects in a scene.

## Topics

### Working with Child Objects

- [objects](mdlobjectcontainercomponent/objects.md): This object’s array of child objects.
- [addObject:](mdlobjectcontainercomponent/add%28__%29.md): Adds the specified object as a child of this object.
- [removeObject:](mdlobjectcontainercomponent/remove%28__%29.md): Removes the specified object from this object’s array of children.

### Instance Properties

- [count](mdlobjectcontainercomponent/count.md)

### Instance Methods

- [objectAtIndexedSubscript:](mdlobjectcontainercomponent/subscript%28__%29.md)

## Relationships

### Inherits From

- [MDLComponent](mdlcomponent.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

### Conforming Types

- [MDLObjectContainer](mdlobjectcontainer.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainer](mdlobjectcontainer.md): A default implementation for handling object hierarchy relationships in a 3D asset.
- [MDLTransformComponent](mdltransformcomponent.md): The general interface for classes that manage local coordinate space transforms for 3D objects
