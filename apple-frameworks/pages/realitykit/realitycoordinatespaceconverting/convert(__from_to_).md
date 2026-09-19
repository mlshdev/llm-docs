> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(_:from:to:)

# convert(\_:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a `Point3D` from a defined SwiftUI coordinate space to a 3D point in a RealityKit coordinate space.

## Declaration

```swift
func convert(_ point: Point3D, from space: some CoordinateSpaceProtocol, to realitySpace: some RealityCoordinateSpace) -> SIMD3<Float>
```
