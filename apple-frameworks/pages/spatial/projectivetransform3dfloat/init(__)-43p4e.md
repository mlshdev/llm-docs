> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/init(_:)-43p4e

# init(\_:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new affine transform structure from the specified double-precision 4 x 3 matrix.

## Declaration

```swift
init(_ matrix: simd_double4x4)
```

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
