> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/meshdata/update

# USDPlayer.MeshData.Update

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Delta update carrying only the mesh fields that changed since the last frame.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [assignedMaterials](update/assignedmaterials.md): Updated material bindings.
- [id](update/id.md): Unique identifier for the mesh being updated.
- [indexData](update/indexdata.md): Updated index buffer data.
- [instanceTransforms](update/instancetransforms.md): Updated world-space instance transforms.
- [meshType](update/meshtype.md): Updated mesh type.
- [parts](update/parts.md): Updated mesh parts.
- [vertexData](update/vertexdata.md): Updated vertex buffer data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
