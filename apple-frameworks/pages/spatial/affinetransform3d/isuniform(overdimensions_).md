> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/isuniform(overdimensions:)](https://developer.apple.com/documentation/spatial/affinetransform3d/isuniform(overdimensions:))

# isUniform(overDimensions:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Boolean value that indicates whether the transform scales equally over the specified dimensions.

## Declaration

```swift
func isUniform(overDimensions: Dimension3DSet) -> Bool
```

## Parameters

- `overDimensions`: The dimensions that the function checks over.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform scales equally over the specified dimensions.

## See Also

### Checking characteristics

- [Dimension3DSet](../dimension3dset.md): A set of dimensions.
- [isInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
- [matrix](matrix.md): The affine transform’s underlying matrix.
- [matrix3x3](matrix3x3.md): The first three columns of an affine transform’s underlying matrix.
- [matrix4x4](matrix4x4.md): A 4 x 4 matrix that results from constructing the affine transform’s underlying matrix.
