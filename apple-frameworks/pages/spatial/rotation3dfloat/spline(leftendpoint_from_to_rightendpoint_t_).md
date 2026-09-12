> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/spline(leftendpoint:from:to:rightendpoint:t:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/spline(leftendpoint:from:to:rightendpoint:t:))

# spline(leftEndpoint:from:to:rightEndpoint:t:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an interpolated value between two rotations along a spherical cubic spline.

## Declaration

```swift
static func spline(leftEndpoint r0: Rotation3DFloat, from r1: Rotation3DFloat, to r2: Rotation3DFloat, rightEndpoint r3: Rotation3DFloat, t: Float) -> Rotation3DFloat
```

<a id="return-value"></a>

## Return Value

A new rotation that’s the interpolated value between the two rotations along a spherical cubic spline.

<a id="discussion"></a>

## Discussion

Use this function to smoothly interpolate between a sequence of rotations.
