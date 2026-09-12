> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor/geometry-swift.struct](https://developer.apple.com/documentation/arkit/planeanchor/geometry-swift.struct)

# PlaneAnchor.Geometry

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The geometry of a plane anchor.

## Declaration

```swift
struct Geometry
```

## Topics

### Inspecting plane geometry

- [meshFaces](geometry-swift.struct/meshfaces.md): The faces in the mesh that describes a plane.
- [meshVertices](geometry-swift.struct/meshvertices.md): The vertices in the mesh that describes a plane.
- [extent](geometry-swift.struct/extent-swift.property.md): The size of a plane.
- [PlaneAnchor.Geometry.Extent](geometry-swift.struct/extent-swift.struct.md): The size of a plane.

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

### Getting the shape of a plane anchor

- [geometry](geometry-swift.property.md): Get the geometry of the plane in the anchor’s coordinate system.
