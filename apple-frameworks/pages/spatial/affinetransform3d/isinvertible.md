> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/isinvertible](https://developer.apple.com/documentation/spatial/affinetransform3d/isinvertible)

# isInvertible (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the transform is invertible.

## Declaration

```swift
var isInvertible: Bool { get }
```

## See Also

### Checking characteristics

- [Dimension3DSet](../dimension3dset.md): A set of dimensions.
- [isUniform(overDimensions:)](isuniform%28overdimensions_%29.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [matrix](matrix.md): The affine transform’s underlying matrix.
- [matrix3x3](matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [matrix4x4](matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.

# SPAffineTransform3DIsInvertible (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value that indicates whether the transform is invertible.

## Declaration

```objectivec
static bool SPAffineTransform3DIsInvertible(SPAffineTransform3D transform);
```

## See Also

### Checking characteristics

- [matrix](matrix.md): The affine transform’s underlying matrix.
- [SPAffineTransform3DGet3x3Matrix](matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [SPAffineTransform3DGet4x4Matrix](matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.
- [SPAffineTransform3DIsUniformOverDimensions](../spaffinetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
- [SPAffineTransform3DIsValid](../spaffinetransform3disvalid.md): A Boolean value that indicates whether the transform is a valid transform.
