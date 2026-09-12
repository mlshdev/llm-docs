> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/meshanchor/geometry-swift.struct](https://developer.apple.com/documentation/arkit/meshanchor/geometry-swift.struct)

# MeshAnchor.Geometry

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The shapes that make up a mesh anchor.

## Declaration

```swift
struct Geometry
```

## Topics

### Inspecting mesh geometry

- [faces](geometry-swift.struct/faces.md): The faces of the mesh.
- [vertices](geometry-swift.struct/vertices.md): The vertices of the mesh.
- [normals](geometry-swift.struct/normals.md): The normals of the mesh.
- [classifications](geometry-swift.struct/classifications.md): The classification of each face in the mesh.

### Instance Properties

- [description](geometry-swift.struct/description.md): A textual representation of this geometry.

### Default Implementations

- [Equatable Implementations](geometry-swift.struct/equatable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting mesh information

- [originFromAnchorTransform](originfromanchortransform.md): The location and orientation of a mesh in world space.
- [geometry](geometry-swift.property.md): The shape of a mesh anchor.
- [MeshAnchor.MeshClassification](meshclassification.md): Deprecated. The kinds of classification a face of a mesh can have.
