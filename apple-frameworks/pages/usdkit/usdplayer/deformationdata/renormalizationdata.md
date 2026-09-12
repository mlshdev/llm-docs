> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/renormalizationdata](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/renormalizationdata)

# USDPlayer.DeformationData.RenormalizationData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Triangle adjacency data for post-deformation normal renormalization.

## Declaration

```swift
struct RenormalizationData
```

## Topics

### Structures

- [USDPlayer.DeformationData.RenormalizationData.Update](renormalizationdata/update.md): Delta update carrying only the adjacency fields that changed since the last frame.

### Instance Properties

- [vertexAdjacencies](renormalizationdata/vertexadjacencies.md): Flattened list of triangle face indices adjacent to each vertex.
- [vertexAdjacencyEndIndices](renormalizationdata/vertexadjacencyendindices.md): Cumulative end indices into `vertexAdjacencies`, one per vertex.
- [vertexIndicesPerTriangle](renormalizationdata/vertexindicespertriangle.md): Vertex indices for each triangle, stored as three consecutive indices per triangle.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
