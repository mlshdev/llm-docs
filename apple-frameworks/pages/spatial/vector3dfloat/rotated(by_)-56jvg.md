> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3dfloat/rotated(by:)-56jvg](https://developer.apple.com/documentation/spatial/vector3dfloat/rotated(by:)-56jvg)

# rotated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the vector rotated by the specified quaternion around the origin.

## Declaration

```swift
func rotated(by quaternion: simd_quatf) -> Vector3DFloat
```

## Parameters

- `quaternion`: The quaternion that defines the rotation.

<a id="discussion"></a>

## Discussion

- Returns The rotated vector.
