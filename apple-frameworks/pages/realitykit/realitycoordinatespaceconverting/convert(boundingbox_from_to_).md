> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(boundingbox:from:to:)

# convert(boundingBox:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a BoundingBox from a RealityKit coordinate space to a Rect3D in a defined SwiftUI coordinate space.

## Declaration

```swift
func convert(boundingBox: BoundingBox, from realitySpace: some RealityCoordinateSpace, to space: some CoordinateSpaceProtocol) -> Rect3D
```
