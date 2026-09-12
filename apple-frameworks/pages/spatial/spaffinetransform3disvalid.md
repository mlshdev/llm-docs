> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3disvalid](https://developer.apple.com/documentation/spatial/spaffinetransform3disvalid)

# SPAffineTransform3DIsValid

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the transform is a valid transform.

## Declaration

```objectivec
static bool SPAffineTransform3DIsValid(SPAffineTransform3D transform);
```

## See Also

### Checking characteristics

- [SPAffineTransform3DIsInvertible](affinetransform3d/isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [matrix](affinetransform3d/matrix.md): The affine transform’s underlying matrix.
- [SPAffineTransform3DGet3x3Matrix](affinetransform3d/matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [SPAffineTransform3DGet4x4Matrix](affinetransform3d/matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.
- [SPAffineTransform3DIsUniformOverDimensions](spaffinetransform3disuniformoverdimensions.md): Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.
