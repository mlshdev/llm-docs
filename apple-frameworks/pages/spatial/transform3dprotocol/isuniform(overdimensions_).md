> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/transform3dprotocol/isuniform(overdimensions:)](https://developer.apple.com/documentation/spatial/transform3dprotocol/isuniform(overdimensions:))

# isUniform(overDimensions:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns `true` if the transform is uniform over the specified dimensions.

## Declaration

```swift
func isUniform(overDimensions: Dimension3DSet) -> Bool
```

## Parameters

- `overDimensions`: The dimensions that the function tests are uniform.

<a id="discussion"></a>

## Discussion

If you specify `overDimensions` as `Dimension3DSet.all`, the function returns the same result as `Transform3D.getter:isUniform`. If you specify as `overDimensions` with zero or one dimension, the function returns the same result as `Transform3D.getter:isRectilinear`.
