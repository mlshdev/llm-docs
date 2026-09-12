> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/affinetransform](https://developer.apple.com/documentation/foundation/affinetransform)

# AffineTransform

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** macOS 10.10+

A graphics coordinate transformation.

## Declaration

```swift
struct AffineTransform
```

## Topics

### Creating Transforms

- [init()](affinetransform/init%28%29.md): Creates an affine transformation matrix with identity values.
- [init(rotationByDegrees:)](affinetransform/init%28rotationbydegrees_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(rotationByRadians:)](affinetransform/init%28rotationbyradians_%29.md): Creates an affine transformation matrix from a rotation angle.
- [init(scale:)](affinetransform/init%28scale_%29.md): Creates an affine transformation matrix from scaling a single value.
- [init(scaleByX:byY:)](affinetransform/init%28scalebyx_byy_%29.md): Creates an affine transformation matrix from scaling values.
- [init(translationByX:byY:)](affinetransform/init%28translationbyx_byy_%29.md): Creates an affine transformation matrix from translation values.
- [init(m11:m12:m21:m22:tX:tY:)](affinetransform/init%28m11_m12_m21_m22_tx_ty_%29.md): Creates an affine transformation.

### Getting the Identity Transform

- [identity](affinetransform/identity.md): An identity affine transformation matrix.

### Accumulating Tranformations

- [rotate(byDegrees:)](affinetransform/rotate%28bydegrees_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [rotate(byRadians:)](affinetransform/rotate%28byradians_%29.md): Mutates an affine transformation matrix to apply a rotation.
- [scale(\_:)](affinetransform/scale%28__%29.md): Mutates an affine transformation matrix to apply scaling in both x and y dimensions.
- [scale(x:y:)](affinetransform/scale%28x_y_%29.md): Mutates an affine transformation matrix to apply scaling in each of the x and y dimensions.
- [translate(x:y:)](affinetransform/translate%28x_y_%29.md): Mutates an affine transformation matrix to perform the specified translation.
- [append(\_:)](affinetransform/append%28__%29.md): Mutates an affine transformation by appending another affine transform.
- [prepend(\_:)](affinetransform/prepend%28__%29.md): Mutates an affine transformation by prepending another affine transform.
- [invert()](affinetransform/invert%28%29.md): Inverts the transformation matrix, if possible.
- [inverted()](affinetransform/inverted%28%29.md): Returns an inverted version of the matrix, if possible, or nil if not.

### Transforming Data and Objects

- [transform(\_:)](affinetransform/transform%28__%29-1ozpp.md): Applies the affine transform to the specified point.
- [transform(\_:)](affinetransform/transform%28__%29-6fze6.md): Applies the affine transform to the specified size.

### Accessing the Transformation Matrix

- [m11](affinetransform/m11.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m12](affinetransform/m12.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m21](affinetransform/m21.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [m22](affinetransform/m22.md): An element of the transform matrix that contributes scaling, rotation, and shear.
- [tX](affinetransform/tx.md): An element of the transform matrix that contributes translation.
- [tY](affinetransform/ty.md): An element of the transform matrix that contributes translation.

### Using Reference Types

- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.
