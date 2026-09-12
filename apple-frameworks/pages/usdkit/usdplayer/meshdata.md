> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/meshdata](https://developer.apple.com/documentation/usdkit/usdplayer/meshdata)

# USDPlayer.MeshData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Mesh geometry data from a USD mesh prim.

## Declaration

```swift
struct MeshData
```

## Topics

### Structures

- [USDPlayer.MeshData.Update](meshdata/update.md): Delta update carrying only the mesh fields that changed since the last frame.

### Instance Properties

- [assignedMaterials](meshdata/assignedmaterials.md): Material IDs bound to each mesh part, in order.
- [descriptor](meshdata/descriptor.md): Low-level mesh descriptor.
- [id](meshdata/id.md): Unique identifier for this mesh resource.
- [indexData](meshdata/indexdata.md): Index buffer data.
- [instanceTransforms](meshdata/instancetransforms.md): World-space transforms for each mesh instance.
- [meshType](meshdata/meshtype-swift.property.md): Whether the mesh is rigid or driven by a deformation resource.
- [parts](meshdata/parts.md): Low-level mesh parts.
- [primPath](meshdata/primpath.md): USD prim path this mesh corresponds to.
- [vertexData](meshdata/vertexdata.md): Vertex buffer data.

### Enumerations

- [USDPlayer.MeshData.MeshType](meshdata/meshtype-swift.enum.md): Distinguishes static and deformable mesh geometries.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
