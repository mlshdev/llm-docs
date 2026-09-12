> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/renormalizationdata/update](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/renormalizationdata/update)

# USDPlayer.DeformationData.RenormalizationData.Update

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Delta update carrying only the adjacency fields that changed since the last frame.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [vertexAdjacencies](update/vertexadjacencies.md): Changed vertex adjacency data.
- [vertexAdjacencyEndIndices](update/vertexadjacencyendindices.md): Changed vertex adjacency end indices.
- [vertexIndicesPerTriangle](update/vertexindicespertriangle.md): Changed vertex indices per triangle.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
