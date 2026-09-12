> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/scaledpose3dfloat/rotated(by:)-8d0z0](https://developer.apple.com/documentation/spatial/scaledpose3dfloat/rotated(by:)-8d0z0)

# rotated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a scaled pose with a rotation that’s rotated by the specified quaternion.

## Declaration

```swift
func rotated(by quaternion: simd_quatf) -> ScaledPose3DFloat
```

## Parameters

- `quaternion`: The quaternion that defines the rotation.

<a id="discussion"></a>

## Discussion

- Returns A scaled pose with a rotation that’s rotated by the specified quaternion.
