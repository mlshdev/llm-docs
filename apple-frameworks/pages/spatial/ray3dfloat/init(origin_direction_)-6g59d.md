> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/ray3dfloat/init(origin:direction:)-6g59d](https://developer.apple.com/documentation/spatial/ray3dfloat/init(origin:direction:)-6g59d)

# init(origin:direction:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a ray from single-precision simd vectors that describe the origin and direction.

## Declaration

```swift
init(origin: simd_float3 = .zero, direction: simd_float3)
```

## Parameters

- `origin`: The origin of the ray.
- `direction`: Direction of the rectangle.

<a id="discussion"></a>

## Discussion

> **Note**

> This function normalizes the direction vector.
