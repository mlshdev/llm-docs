> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat/init(_:)-4hh5z](https://developer.apple.com/documentation/spatial/scaledpose3dfloat/init(_:)-4hh5z)

# init(\_:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a scaled pose with the specified single-precision 4 x 4 matrix

## Declaration

```swift
init?(_ matrix: simd_float4x4)
```

## Parameters

- `matrix`: The source matrix

<a id="discussion"></a>

## Discussion

> **Note**

> This function can’t extract rotation from a non-scale-rotate-translate affine transform. In that case, the function returns `nil`.  If the specified matrix doesn’t have uniform scale the function returns `nil`.
