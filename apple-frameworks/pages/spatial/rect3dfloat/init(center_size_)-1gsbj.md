> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/init(center:size:)-1gsbj](https://developer.apple.com/documentation/spatial/rect3dfloat/init(center:size:)-1gsbj)

# init(center:size:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle from single-precision vectors that describe the center and size.

## Declaration

```swift
init(center: simd_double3 = .zero, size: simd_double3)
```

## Parameters

- `center`: The center of the rectangle.
- `size`: The size of the rectangle.

<a id="discussion"></a>

## Discussion

> **Note**

> This function is provided as a convenience. All Spatial storage and calculations are single-precision.
