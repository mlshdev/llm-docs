> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformcomponent](https://developer.apple.com/documentation/modelio/mdltransformcomponent)

# MDLTransformComponent (Swift)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for classes that manage local coordinate space transforms for 3D objects

## Declaration

```swift
protocol MDLTransformComponent : MDLComponent
```

<a id="overview"></a>

## Overview

Transform information—that is, the combination of an object’s position, orientation, shear, and scale—can be static, or in the case of resources that describe animations, time-based. By default, the [MDLTransform](mdltransform.md) class manages transform information for objects loaded from a [MDLAsset](mdlasset.md) instance. By providing your own class that adopts this protocol, you can support other ways to associate transform information with objects—for example, when defining a custom asset file format.

## Topics

### Working with Static Transforms

- [matrix](mdltransformcomponent/matrix.md): The transform matrix that defines the local coordinate space relative to a parent coordinate space.
- [setLocalTransform(\_:)](mdltransformcomponent/setlocaltransform%28__%29.md): Sets a new static transform matrix, overriding any time-based transform information.

### Working with Animated Transforms

- [minimumTime](mdltransformcomponent/minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](mdltransformcomponent/maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [localTransform(atTime:)](mdltransformcomponent/localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.
- [setLocalTransform(\_:forTime:)](mdltransformcomponent/setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.

### Deriving a Global Transformation

- [globalTransform(with:atTime:)](mdltransformcomponent/globaltransform%28with_attime_%29.md): Returns the absolute coordinate transformation for an object in a transform hierarchy.

### Instance Properties

- [keyTimes](mdltransformcomponent/keytimes.md)
- [resetsTransform](mdltransformcomponent/resetstransform.md)

## Relationships

### Inherits From

- [MDLComponent](mdlcomponent.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MDLTransform](mdltransform.md)
- [MDLTransformStack](mdltransformstack.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainer](mdlobjectcontainer.md): A default implementation for handling object hierarchy relationships in a 3D asset.
- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md): The general interface for classes that can act as containers in an object hierarchy.

# MDLTransformComponent (Objective-C)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The general interface for classes that manage local coordinate space transforms for 3D objects

## Declaration

```objectivec
@protocol MDLTransformComponent <MDLComponent>
```

<a id="overview"></a>

## Overview

Transform information—that is, the combination of an object’s position, orientation, shear, and scale—can be static, or in the case of resources that describe animations, time-based. By default, the [MDLTransform](mdltransform.md) class manages transform information for objects loaded from a [MDLAsset](mdlasset.md) instance. By providing your own class that adopts this protocol, you can support other ways to associate transform information with objects—for example, when defining a custom asset file format.

## Topics

### Working with Static Transforms

- [matrix](mdltransformcomponent/matrix.md): The transform matrix that defines the local coordinate space relative to a parent coordinate space.
- [setLocalTransform:](mdltransformcomponent/setlocaltransform%28__%29.md): Sets a new static transform matrix, overriding any time-based transform information.

### Working with Animated Transforms

- [minimumTime](mdltransformcomponent/minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](mdltransformcomponent/maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [localTransformAtTime:](mdltransformcomponent/localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.
- [setLocalTransform:forTime:](mdltransformcomponent/setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.

### Deriving a Global Transformation

- [globalTransformWithObject:atTime:](mdltransformcomponent/globaltransform%28with_attime_%29.md): Returns the absolute coordinate transformation for an object in a transform hierarchy.

### Instance Properties

- [keyTimes](mdltransformcomponent/keytimes.md)
- [resetsTransform](mdltransformcomponent/resetstransform.md)

## Relationships

### Inherits From

- [MDLComponent](mdlcomponent.md)

### Conforming Types

- [MDLTransform](mdltransform.md)
- [MDLTransformStack](mdltransformstack.md)

## See Also

### Extensible Asset Format Support

- [MDLComponent](mdlcomponent.md): The base protocol for extensible file format support in Model I/O.
- [MDLObjectContainer](mdlobjectcontainer.md): A default implementation for handling object hierarchy relationships in a 3D asset.
- [MDLObjectContainerComponent](mdlobjectcontainercomponent.md): The general interface for classes that can act as containers in an object hierarchy.
