> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform](https://developer.apple.com/documentation/modelio/mdltransform)

# MDLTransform (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the local coordinate space transformations for a 3D object.

## Declaration

```swift
class MDLTransform
```

<a id="overview"></a>

## Overview

Transform information can be static, or in the case of resources that describe animations, time based. You use transform objects to position, orient, shear, and scale the meshes, cameras, lights, and container objects in an asset using their [transform](mdlobject/transform.md) property.

## Topics

### Creating a Transform Object

- [init(identity:)](mdltransform/init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [init(matrix:)](mdltransform/init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [init(transformComponent:)](mdltransform/init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [init(matrix:resetsTransform:)](mdltransform/init%28matrix_resetstransform_%29.md)
- [init(transformComponent:resetsTransform:)](mdltransform/init%28transformcomponent_resetstransform_%29.md)

### Using Factors of a Static Transform

- [translation](mdltransform/translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](mdltransform/rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](mdltransform/scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](mdltransform/shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.
- [setIdentity()](mdltransform/setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.

### Using Factors of an Animated Transform

- [translation(atTime:)](mdltransform/translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation(\_:forTime:)](mdltransform/settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotation(atTime:)](mdltransform/rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrix(atTime:)](mdltransform/rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation(\_:forTime:)](mdltransform/setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scale(atTime:)](mdltransform/scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale(\_:forTime:)](mdltransform/setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shear(atTime:)](mdltransform/shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear(\_:forTime:)](mdltransform/setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix(\_:forTime:)](mdltransform/setmatrix%28__fortime_%29.md)

### Initializers

- [init()](mdltransform/init%28%29.md)

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
- [MDLTransformComponent](mdltransformcomponent.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLTransform (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of the local coordinate space transformations for a 3D object.

## Declaration

```objectivec
@interface MDLTransform : NSObject
```

<a id="overview"></a>

## Overview

Transform information can be static, or in the case of resources that describe animations, time based. You use transform objects to position, orient, shear, and scale the meshes, cameras, lights, and container objects in an asset using their [transform](mdlobject/transform.md) property.

## Topics

### Creating a Transform Object

- [initWithIdentity](mdltransform/init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [initWithMatrix:](mdltransform/init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [initWithTransformComponent:](mdltransform/init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [initWithMatrix:resetsTransform:](mdltransform/init%28matrix_resetstransform_%29.md)
- [initWithTransformComponent:resetsTransform:](mdltransform/init%28transformcomponent_resetstransform_%29.md)

### Using Factors of a Static Transform

- [translation](mdltransform/translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](mdltransform/rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](mdltransform/scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](mdltransform/shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.
- [setIdentity](mdltransform/setidentity%28%29.md): Sets all factors of the transform to those of the identity transformation.

### Using Factors of an Animated Transform

- [translationAtTime:](mdltransform/translation%28attime_%29.md): Returns the x-, y-, and z-axis offsets of the transform relative to its parent coordinate space, as of the specified time sample.
- [setTranslation:forTime:](mdltransform/settranslation%28__fortime_%29.md): Sets the x-, y-, and z-axis offsets of the transform for the specified time sample.
- [rotationAtTime:](mdltransform/rotation%28attime_%29.md): Returns the orientation of the transform relative to its parent coordinate space, as of the specified time sample.
- [rotationMatrixAtTime:](mdltransform/rotationmatrix%28attime_%29.md): Returns the orientation of the transform as a rotation matrix, as of the specified time sample.
- [setRotation:forTime:](mdltransform/setrotation%28__fortime_%29.md): Sets the orientation of the transform for the specified time sample.
- [scaleAtTime:](mdltransform/scale%28attime_%29.md): Returns the x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setScale:forTime:](mdltransform/setscale%28__fortime_%29.md): Sets the x-, y-, and z-axis scale factors of the transform for the specified time sample.
- [shearAtTime:](mdltransform/shear%28attime_%29.md): Returns the x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space, as of the specified time sample.
- [setShear:forTime:](mdltransform/setshear%28__fortime_%29.md): Sets the x-, y-, and z-axis shear factors of the transform for the specified time sample.
- [setMatrix:forTime:](mdltransform/setmatrix%28__fortime_%29.md)

### Instance Methods

- [init](mdltransform/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLTransformComponent](mdltransformcomponent.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
