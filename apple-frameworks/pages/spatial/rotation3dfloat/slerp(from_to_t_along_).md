> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/slerp(from:to:t:along:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/slerp(from:to:t:along:))

# slerp(from:to:t:along:)

**Framework:** Spatial  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the spherical linear interpolation along the either the shortest or longest arc between two rotations.

## Declaration

```swift
static func slerp(from: Rotation3DFloat, to: Rotation3DFloat, t: Float, along path: Rotation3D.SlerpPath = .shortest) -> Rotation3DFloat
```
