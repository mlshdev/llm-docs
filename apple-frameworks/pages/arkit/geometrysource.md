> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/geometrysource](https://developer.apple.com/documentation/arkit/geometrysource)

# GeometrySource

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A container for geometrical vector data.

## Declaration

```swift
struct GeometrySource
```

<a id="overview"></a>

## Overview

Mesh-anchor geometry ([MeshDescriptor](../realitykit/meshdescriptor.md)) uses geometry sources to hold 3D data like vertices and normals in an efficent, array-like format. A Metal buffer wraps the data and other properties specify how to interpret that data.

If [componentsPerVector](geometrysource/componentspervector.md) is greater than one, the element type of the geometry-source array is itself a sequence (pairs, triplets, and so on).

## Topics

### Inspecting geometry data

- [buffer](geometrysource/buffer.md): A Metal buffer that contains per-vector data for a geometry source.
- [count](geometrysource/count.md): The number of vectors in a geometry source.
- [format](geometrysource/format.md): The vertex format for data in a geometry source’s buffer.
- [componentsPerVector](geometrysource/componentspervector.md): The number of scalar components in each vector in a geometry source.
- [offset](geometrysource/offset.md): The offset, in bytes, from the beginning of a geometry source’s buffer.
- [stride](geometrysource/stride.md): The number of bytes between one vector and another in a geometry source’s buffer.
- [description](geometrysource/description.md): A textual representation of this geometry source.

### Default Implementations

- [Equatable Implementations](geometrysource/equatable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Geometry

- [GeometryElement](geometryelement.md): A container for vertex indices of lines or triangles.
