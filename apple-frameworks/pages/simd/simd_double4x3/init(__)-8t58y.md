> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double4x3/init(_:)-8t58y](https://developer.apple.com/documentation/simd/simd_double4x3/init(_:)-8t58y)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new matrix from a Spatial affine transform.

## Declaration

```swift
init(_ affineTransform: AffineTransform3DFloat)
```

<a id="discussion"></a>

## Discussion

Values rounded to a representable value, if necessary.

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
