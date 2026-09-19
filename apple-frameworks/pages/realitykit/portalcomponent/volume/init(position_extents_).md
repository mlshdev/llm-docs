> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/portalcomponent/volume/init(position:extents:)

# init(position:extents:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a volume with the given center position and extents.

## Declaration

```swift
init(position: SIMD3<Float> = .zero, extents: SIMD3<Float>)
```

## Parameters

- `position`: The center of the volume in portal-local space, in meters. Defaults to `.zero`.
- `extents`: The full lengths (width, height, depth) of the volume in portal-local space, in meters.
