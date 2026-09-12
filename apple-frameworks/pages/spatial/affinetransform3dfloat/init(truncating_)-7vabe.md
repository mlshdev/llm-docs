> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/init(truncating:)-7vabe](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/init(truncating:)-7vabe)

# init(truncating:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new affine transform from a double-precision 4 x 4 matrix truncated to a  4 x 3 matrix.

## Declaration

```swift
init(truncating matrix: simd_double4x4)
```

## Parameters

- `matrix`: The source matrix.

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
