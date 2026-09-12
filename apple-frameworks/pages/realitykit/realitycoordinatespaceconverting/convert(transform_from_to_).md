> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceconverting/convert(transform:from:to:)](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting/convert(transform:from:to:))

# convert(transform:from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Returns an AffineTransform3D converted from a RealityKit coordinate space to a defined SwiftUI coordinate space.

## Declaration

```swift
func convert(transform: Transform, from realitySpace: some RealityCoordinateSpace, to space: some CoordinateSpaceProtocol) -> AffineTransform3D
```

<a id="discussion"></a>

## Discussion

This function performs a change-of-basis operation, so the returned `AffineTransform3D` performs the same transformation in `space` that the specified [Transform](../transform.md) performs in `realitySpace`.
