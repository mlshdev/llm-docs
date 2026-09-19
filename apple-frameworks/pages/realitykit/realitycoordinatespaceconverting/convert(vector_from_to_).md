> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(vector:from:to:)

# convert(vector:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a 3D vector from a RealityKit coordinate space to one in a SwiftUI coordinate space.

## Declaration

```swift
func convert(vector: SIMD3<Float>, from realitySpace: some RealityCoordinateSpace, to space: some CoordinateSpaceProtocol) -> Vector3D
```
