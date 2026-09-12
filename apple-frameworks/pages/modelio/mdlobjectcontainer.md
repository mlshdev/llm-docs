> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlobjectcontainer](https://developer.apple.com/documentation/modelio/mdlobjectcontainer)

# MDLObjectContainer (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A default implementation for handling object hierarchy relationships in a 3D asset.

## Declaration

```swift
class MDLObjectContainer
```

<a id="overview"></a>

## Overview

Model I/O uses the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol to create object hierarchy relationships for meshes, lights, cameras, and containers loaded from a [MDLAsset](mdlasset.md) instance. To create your own containers—for example, to reference in-memory representations, offline databases, or custom asset file formats—create [MDLObjectContainer](mdlobjectcontainer.md) subclasses and add them to a [MDLObject](mdlobject.md) instance using its [setComponent(\_:for:)](mdlobject/setcomponent%28__for_%29.md) method.

All methods of this class are defined by the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol. For discussion of these methods, see [MDLObjectContainerComponent](mdlobjectcontainercomponent.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLComponent](mdlcomponent.md)
- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md): The general interface for classes that can act as containers in an object hierarchy.
- [MDLTransformComponent](mdltransformcomponent.md): The general interface for classes that manage local coordinate space transforms for 3D objects

# MDLObjectContainer (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A default implementation for handling object hierarchy relationships in a 3D asset.

## Declaration

```objectivec
@interface MDLObjectContainer : NSObject
```

<a id="overview"></a>

## Overview

Model I/O uses the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol to create object hierarchy relationships for meshes, lights, cameras, and containers loaded from a [MDLAsset](mdlasset.md) instance. To create your own containers—for example, to reference in-memory representations, offline databases, or custom asset file formats—create [MDLObjectContainer](mdlobjectcontainer.md) subclasses and add them to a [MDLObject](mdlobject.md) instance using its [setComponent:forProtocol:](mdlobject/setcomponent%28__for_%29.md) method.

All methods of this class are defined by the [MDLObjectContainerComponent](mdlobjectcontainercomponent.md) protocol. For discussion of these methods, see [MDLObjectContainerComponent](mdlobjectcontainercomponent.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md): The general interface for classes that can act as containers in an object hierarchy.
- [MDLTransformComponent](mdltransformcomponent.md): The general interface for classes that manage local coordinate space transforms for 3D objects
