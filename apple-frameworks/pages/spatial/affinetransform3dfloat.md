> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat](https://developer.apple.com/documentation/spatial/affinetransform3dfloat)

# AffineTransform3DFloat (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct AffineTransform3DFloat
```

<a id="overview"></a>

## Overview

A single-precision 3D affine transformation matrix.

## Topics

### Operators

- [\*(\_:\_:)](affinetransform3dfloat/_%28____%29.md): Returns the concatenation of two affine transforms.
- [\*=(\_:\_:)](affinetransform3dfloat/_=%28____%29.md): Calculates the concatenation of two affine transforms and stores the result in the left-hand-side variable.

### Initializers

- [init()](affinetransform3dfloat/init%28%29-6ek9q.md): Returns a new identity affine transform.
- [init()](affinetransform3dfloat/init%28%29-8li4c.md): Returns a new identity affine transform.
- [init(\_:)](affinetransform3dfloat/init%28__%29-2c2os.md): Returns a single-precision affine transformation from a double-precision affine transformation.
- [init(\_:)](affinetransform3dfloat/init%28__%29-3a23d.md): Returns a new affine transform structure from the specified double-precision 4 x 3 matrix.
- [init(\_:)](affinetransform3dfloat/init%28__%29-5ajh4.md)
- [init(matrix:)](affinetransform3dfloat/init%28matrix_%29.md)
- [init(pose:)](affinetransform3dfloat/init%28pose_%29.md): Returns a new transform from the specified pose.
- [init(scaledPose:)](affinetransform3dfloat/init%28scaledpose_%29.md): Returns a new transform from the specified scaled pose.
- [init(truncating:)](affinetransform3dfloat/init%28truncating_%29-1jfno.md)
- [init(truncating:)](affinetransform3dfloat/init%28truncating_%29-7vabe.md): Returns a new affine transform from a double-precision 4 x 4 matrix truncated to a 4 x 3 matrix.
- [init(truncating:)](affinetransform3dfloat/init%28truncating_%29-8jfn6.md)

### Instance Properties

- [columns](affinetransform3dfloat/columns.md): The columns of the underlying matrix.
- [isInvertible](affinetransform3dfloat/isinvertible.md)
- [matrix](affinetransform3dfloat/matrix.md)
- [matrix3x3](affinetransform3dfloat/matrix3x3.md)
- [matrix4x4](affinetransform3dfloat/matrix4x4.md)
- [scale](affinetransform3dfloat/scale.md)

### Instance Methods

- [changeBasis(from:to:)](affinetransform3dfloat/changebasis%28from_to_%29.md): Returns a new affine transform structure by applying a change-of-basis.

### Default Implementations

- [CustomReflectable Implementations](affinetransform3dfloat/customreflectable-implementations.md)
- [Decodable Implementations](affinetransform3dfloat/decodable-implementations.md)
- [Encodable Implementations](affinetransform3dfloat/encodable-implementations.md)
- [Equatable Implementations](affinetransform3dfloat/equatable-implementations.md)
- [Hashable Implementations](affinetransform3dfloat/hashable-implementations.md)
- [Scalable3DProtocol Implementations](affinetransform3dfloat/scalable3dprotocol-implementations.md)
- [Shearable3DProtocol Implementations](affinetransform3dfloat/shearable3dprotocol-implementations.md)
- [Transform3DProtocol Implementations](affinetransform3dfloat/transform3dprotocol-implementations.md)

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
- [ProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.
- [ProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.

# SPAffineTransform3DFloat (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } SPAffineTransform3DFloat;
```

<a id="overview"></a>

## Overview

A single-precision 3D affine transformation matrix.

## Topics

### Instance Properties

- [matrix](affinetransform3dfloat/matrix.md)

## See Also

### Affine and projective transforms

- [SPAffineTransform3D](affinetransform3d.md): A 3D affine transformation matrix.
- [SPProjectiveTransform3D](projectivetransform3d.md): A 3D projective transformation matrix.
- [SPProjectiveTransform3DFloat](projectivetransform3dfloat.md): A single-precision 3D projective transformation matrix.
