> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/pose3dfloat/init(position:rotation:)-1r25j

# init(position:rotation:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a pose from double-precision simd primitives that describe the position and rotation.

## Declaration

```swift
init(position: simd_float3 = .zero, rotation: simd_quatf)
```

## Parameters

- `position`: The position of the pose.
- `rotation`: The rotation of the pose.
