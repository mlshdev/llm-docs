> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/spline(leftendpoint:from:to:rightendpoint:t:)](https://developer.apple.com/documentation/spatial/rotation3d/spline(leftendpoint:from:to:rightendpoint:t:))

# spline(leftEndpoint:from:to:rightEndpoint:t:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns an interpolated value between two rotations along a spherical cubic spline.

## Declaration

```swift
static func spline(leftEndpoint r0: Rotation3D, from r1: Rotation3D, to r2: Rotation3D, rightEndpoint r3: Rotation3D, t: Double) -> Rotation3D
```
