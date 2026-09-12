> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3dfloat/smoothstep(edge0:edge1:x:)](https://developer.apple.com/documentation/spatial/vector3dfloat/smoothstep(edge0:edge1:x:))

# smoothstep(edge0:edge1:x:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Spatial vector that represents the smooth interpolation at `x` between two vectors.

## Declaration

```swift
static func smoothstep(edge0: Vector3DFloat, edge1: Vector3DFloat, x: Vector3DFloat) -> Vector3DFloat
```

## Parameters

- `edge0`: The lower edge of the interpolation function.
- `edge1`: The upper edge of the interpolation function.
- `x`: The value that the function interpolates at.

<a id="return-value"></a>

## Return Value

A new vector with each element set to `0` if `x <= edge0`, `1` if `x >= edge1`, and a Hermite interpolation between `0` and `1` if `edge0 < x < edge1`.
