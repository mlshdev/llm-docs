> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/replacingbydestinationpositions(positions:)](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/replacingbydestinationpositions(positions:))

# replacingByDestinationPositions(positions:)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Returns a copy of this grid, updated with the argument destination positions.

## Declaration

```swift
func replacingByDestinationPositions(positions destination: [SIMD2<Float>]) -> SKWarpGeometryGrid
```

<a id="return-value"></a>

## Return Value

A new warp geometry grid.

## See Also

### Accessing or Setting Grid Vertices

- [destPosition(at:)](destposition%28at_%29.md): Returns the destination position of a vertex.
- [replacingBySourcePositions(positions:)](replacingbysourcepositions%28positions_%29.md): Returns a copy of this grid, updated with the argument source positions.
- [sourcePosition(at:)](sourceposition%28at_%29.md): Returns the source position of a vertex.
