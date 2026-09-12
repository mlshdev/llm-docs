> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceconverting/convert(rotation:from:to:)](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(rotation:from:to:))

# convert(rotation:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a quaternion from a RealityKit coordinate space to a Rotation3D in a defined SwiftUI coordinate space.

## Declaration

```swift
func convert(rotation: simd_quatf, from realitySpace: some RealityCoordinateSpace, to space: some CoordinateSpaceProtocol) -> Rotation3D
```

<a id="discussion"></a>

## Discussion

This function performs a change-of-basis operation, so the returned `Rotation3D` performs the same transformation in `space` that the specified quaternion performs in `realitySpace`.
