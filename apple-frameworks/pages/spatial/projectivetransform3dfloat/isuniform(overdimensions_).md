> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/isuniform(overdimensions:)

# isUniform(overDimensions:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns `true` if the transform is affine and uniform over the specified dimensions.

## Declaration

```swift
func isUniform(overDimensions: Dimension3DSet) -> Bool
```

## Parameters

- `overDimensions`: The dimensions that the function tests are uniform.

<a id="discussion"></a>

## Discussion

If you specify `overDimensions` as `Dimension3DFloatSet.all`, the function returns the same result as `Transform3DFloat.getter:isUniform`. If you specify as `overDimensions` with zero or one dimension, the function returns the same result as `Transform3DFloat.getter:isRectilinear`.
