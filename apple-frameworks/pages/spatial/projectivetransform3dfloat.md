> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat)

# ProjectiveTransform3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A single-precision 3D projective transformation matrix.

## Declaration

```swift
struct ProjectiveTransform3DFloat
```

## Topics

### Operators

- [\*(\_:\_:)](projectivetransform3dfloat/_%28____%29.md): Returns the product of two projective transforms.
- [\*=(\_:\_:)](projectivetransform3dfloat/_=%28____%29.md): Calculates the concatenation of two projective transforms and stores the result in the left-hand-side variable.

### Initializers

- [init()](projectivetransform3dfloat/init%28%29-89m3y.md): Returns a new identity projective transform.
- [init()](projectivetransform3dfloat/init%28%29-c35e.md): Returns a new identity projective transform.
- [init(\_:)](projectivetransform3dfloat/init%28__%29-43p4e.md): Returns a new affine transform structure from the specified double-precision 4 x 3 matrix.
- [init(\_:)](projectivetransform3dfloat/init%28__%29-56itt.md): Returns a new transform from the specified 4 x 4 matrix.
- [init(\_:)](projectivetransform3dfloat/init%28__%29-6ffxa.md): Returns a new transform from the specified affine transform.
- [init(\_:)](projectivetransform3dfloat/init%28__%29-9r5ov.md): Returns a single-precision projective transformation from a double-precision projective transformation.
- [init(fovY:aspectRatio:nearZ:farZ:)](projectivetransform3dfloat/init%28fovy_aspectratio_nearz_farz_%29.md)
- [init(fovY:aspectRatio:nearZ:farZ:reverseZ:)](projectivetransform3dfloat/init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [init(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)](projectivetransform3dfloat/init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md)
- [init(matrix:)](projectivetransform3dfloat/init%28matrix_%29.md)
- [init(pose:)](projectivetransform3dfloat/init%28pose_%29.md): Returns a new transform from the specified pose.
- [init(scaledPose:)](projectivetransform3dfloat/init%28scaledpose_%29.md): Returns a new transform from the specified scaled pose.

### Instance Properties

- [isAffine](projectivetransform3dfloat/isaffine.md)
- [isInvertible](projectivetransform3dfloat/isinvertible.md)
- [matrix](projectivetransform3dfloat/matrix.md)
- [scaleComponent](projectivetransform3dfloat/scalecomponent.md): The projective transform’s scale component.

### Instance Methods

- [is3DFloatProjection()](projectivetransform3dfloat/is3dfloatprojection%28%29.md)

### Default Implementations

- [CustomReflectable Implementations](projectivetransform3dfloat/customreflectable-implementations.md)
- [Scalable3DProtocol Implementations](projectivetransform3dfloat/scalable3dprotocol-implementations.md)
- [Shearable3DProtocol Implementations](projectivetransform3dfloat/shearable3dprotocol-implementations.md)
- [Transform3DProtocol Implementations](projectivetransform3dfloat/transform3dprotocol-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Rotatable3DProtocol](rotatable3dprotocol.md)
- [Scalable3DProtocol](scalable3dprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shearable3DProtocol](shearable3dprotocol.md)
- [SpatialTypeProtocol](spatialtypeprotocol.md)
- [Transform3DProtocol](transform3dprotocol.md)
- [Translatable3DProtocol](translatable3dprotocol.md)

## See Also

### Affine and projective transforms

- [AffineTransform3D](affinetransform3d.md): A 3D affine transformation matrix.
- [AffineTransform3DFloat](affinetransform3dfloat.md)
- [ProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.

# SPProjectiveTransform3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A single-precision 3D projective transformation matrix.

## Declaration

```objectivec
typedef struct { ... } SPProjectiveTransform3DFloat;
```

## Topics

### Instance Properties

- [matrix](projectivetransform3dfloat/matrix.md)

## See Also

### Affine and projective transforms

- [SPAffineTransform3D](affinetransform3d.md): A 3D affine transformation matrix.
- [SPAffineTransform3DFloat](affinetransform3dfloat.md)
- [SPProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.
