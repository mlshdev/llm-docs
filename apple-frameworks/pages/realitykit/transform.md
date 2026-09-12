> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/transform](https://developer.apple.com/documentation/realitykit/transform)

# Transform

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that defines the scale, rotation, and translation of an entity.

## Declaration

```swift
@frozen struct Transform
```

## Mentioned In

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)

<a id="overview"></a>

## Overview

An entity acquires a [Transform](transform.md) component, as well as a set of methods for manipulating the transform, by adopting the [HasTransform](hastransform.md) protocol. This is true for all entities, because the [Entity](entity.md) base class adopts the protocol.

## Topics

### Creating a transform

- [init()](transform/init%28%29.md): Creates a transform with the values of the identity transform.
- [init(scale:rotation:translation:)](transform/init%28scale_rotation_translation_%29.md): Creates a new transformation using the given values.
- [init(pitch:yaw:roll:)](transform/init%28pitch_yaw_roll_%29.md): Creates a new transform from the specified Euler angles.
- [init(matrix:)](transform/init%28matrix_%29.md): Creates a new transform represented as a 4x4 matrix.

### Setting transform properties

- [scale](transform/scale.md): The scaling factor applied to the entity.
- [rotation](transform/rotation.md): The rotation of the entity specified as a unit quaternion.
- [translation](transform/translation.md): The position of the entity along the x, y, and z axes.
- [matrix](transform/matrix.md): The transform represented as a 4x4 matrix.

### Getting the identity transform

- [identity](transform/identity.md): The identity transform.

### Initializers

- [init(\_:)](transform/init%28__%29.md)
- [init(projectiveTransform:)](transform/init%28projectivetransform_%29.md): A convenience initializer for the Transform Component that takes a `ProjectiveTransform3D`

### Instance Methods

- [hash(into:)](transform/hash%28into_%29.md): Hashes the essential components of the transform by feeding them into the given hash function.

### Default Implementations

- [ProjectiveTransformable3DFloat Implementations](transform/projectivetransformable3dfloat-implementations.md)

## Relationships

### Conforms To

- [AnimatableData](animatabledata.md)
- [BindableData](bindabledata.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ProjectiveTransformable3D](../spatial/projectivetransformable3d.md)
- [ProjectiveTransformable3DFloat](../spatial/projectivetransformable3dfloat.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Positioning entities in space

- [HasTransform](hastransform.md): An interface that enables manipulating the scale, rotation, and translation of an entity.
- [transformMatrix(relativeTo:)](entity/transformmatrix%28relativeto_%29.md): Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.
- [Entity.CoordinateSpaceReference](entity/coordinatespacereference.md): Defines the coordinate space reference for transform conversion.
- [Entity.ForwardDirection](entity/forwarddirection.md): Defines the forward direction for an entity.
