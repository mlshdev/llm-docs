> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3dfloat/lerp(from:to:t:)](https://developer.apple.com/documentation/spatial/vector3dfloat/lerp(from:to:t:))

# lerp(from:to:t:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a Spatial vector that represents the linear interpolation at `t` between two vectors.

## Declaration

```swift
static func lerp(from: Vector3DFloat, to: Vector3DFloat, t: Vector3DFloat) -> Vector3DFloat
```

## Parameters

- `from`: The starting vector.
- `to`: The ending vector.
- `t`: The value, between `0` and `1`, that the function interpolates at.

<a id="return-value"></a>

## Return Value

A new rotation. When `t=0`, the result is the `from` vector. When `t=1.0`, the result is the `to` vector. For any other value of `t`, the result is a linear linear interpolation between the two vectors.
