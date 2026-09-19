> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/ray3dfloat/rotated(by:)-3vmkj

# rotated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a ray that’s rotated by the specified quaternion.

## Declaration

```swift
func rotated(by quaternion: simd_quatf) -> Ray3DFloat
```

## Parameters

- `quaternion`: The quaternion that defines the rotation.

<a id="discussion"></a>

## Discussion

- Returns A ray with a direction that’s rotated by the specified quaternion.
