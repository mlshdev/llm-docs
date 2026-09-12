> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/transform3dprotocol](https://developer.apple.com/documentation/spatial/transform3dprotocol)

# Transform3DProtocol

**Framework:** Spatial  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of methods that are common to transforms.

## Declaration

```swift
protocol Transform3DProtocol : SpatialTypeProtocol
```

## Topics

### Initializers

- [init(rotation:)](transform3dprotocol/init%28rotation_%29.md): Returns a new rotation transform.
- [init(scale:)](transform3dprotocol/init%28scale_%29.md): Returns a new scale transform.
- [init(scale:rotation:translation:)](transform3dprotocol/init%28scale_rotation_translation_%29.md): Returns a new scale, rotate, translate transform.
- [init(shear:)](transform3dprotocol/init%28shear_%29.md): Returns a new shear transform
- [init(translation:)](transform3dprotocol/init%28translation_%29.md): Returns a new translate transform.

### Instance Properties

- [inverse](transform3dprotocol/inverse.md): Returns a transform that’s constructed by inverting an existing transform.
- [isIdentity](transform3dprotocol/isidentity.md): Returns `true` if the transform is the identity transform.
- [isRectilinear](transform3dprotocol/isrectilinear.md): Returns `true` if the transform is rectilinear.
- [isTranslation](transform3dprotocol/istranslation.md): Returns `true` if the transform is a translation.
- [isUniform](transform3dprotocol/isuniform.md): Returns `true` if the transform is uniform over all dimensions.
- [rotation](transform3dprotocol/rotation.md): The transform’s rotation. This is `nil` if the transform isn’t scale-rotate-translate.
- [translation](transform3dprotocol/translation.md): The transform’s translation.

### Instance Methods

- [concatenating(\_:)](transform3dprotocol/concatenating%28__%29.md): Returns a transform that’s constructed by combining two existing transforms.
- [flip(along:)](transform3dprotocol/flip%28along_%29.md): Flips the transform along the specified axis.
- [flipped(along:)](transform3dprotocol/flipped%28along_%29.md): Returns the transform flipped along the specified axis.
- [isApproximatelyEqual(to:tolerance:)](transform3dprotocol/isapproximatelyequal%28to_tolerance_%29.md): Returns a Boolean value that indicates whether two transforms are equal within a specified tolerance.
- [isUniform(overDimensions:)](transform3dprotocol/isuniform%28overdimensions_%29.md): Returns `true` if the transform is uniform over the specified dimensions.

### Type Properties

- [identity](transform3dprotocol/identity.md): Returns the identity transform.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [SpatialTypeProtocol](spatialtypeprotocol.md)

### Conforming Types

- [AffineTransform3D](affinetransform3d.md)
- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [ProjectiveTransform3D](projectivetransform3d.md)
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md)
