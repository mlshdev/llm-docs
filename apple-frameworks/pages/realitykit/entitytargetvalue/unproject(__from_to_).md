> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entitytargetvalue/unproject(_:from:to:)

# unproject(\_:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Unproject `point` from a 2D coordinate space into 3D world coordinates.

## Declaration

```swift
func unproject(_ point: CGPoint, from space: some CoordinateSpaceProtocol, to realitySpace: some RealityCoordinateSpace) -> SIMD3<Float>?
```

## Parameters

- `point`: A point in the provided coordinate space.
- `space`: The 2D coordinate space in which to interpret the `point`.
- `realitySpace`: The 3D coordinate space of the returned point.

<a id="return-value"></a>

## Return Value

3D position in `realitySpace`.
