> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/isuniform(overdimensions:)](https://developer.apple.com/documentation/spatial/projectivetransform3d/isuniform(overdimensions:))

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

## See Also

### Checking characteristics

- [is3DProjection()](is3dprojection%28%29.md): Returns a Boolean value that indicates whether the transform is a 3D projection.
- [isAffine](isaffine.md): A Boolean value that indicates whether the transform is affine.
- [isInvertible](isinvertible.md): Returns a Boolean value that indicates whether the transform is invertible.
