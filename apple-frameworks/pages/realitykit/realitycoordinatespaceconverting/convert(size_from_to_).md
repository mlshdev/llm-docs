> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(size:from:to:)

# convert(size:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a 3D size vector from a RealityKit coordinate space to a Size3D in a defined SwiftUI coordinate space.

## Declaration

```swift
func convert(size: SIMD3<Float>, from realitySpace: some RealityCoordinateSpace, to space: some CoordinateSpaceProtocol) -> Size3D
```
