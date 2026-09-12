> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/heightdata-swift.struct](https://developer.apple.com/documentation/realitykit/navigationmeshresource/heightdata-swift.struct)

# NavigationMeshResource.HeightData

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A container for the detailed height data of the NavigationMeshResource.

## Declaration

```swift
struct HeightData
```

## Topics

### Creating height data

- [init(vertices:triangleIndices:polygonTriangleIndices:)](heightdata-swift.struct/init%28vertices_triangleindices_polygontriangleindices_%29.md)

### Accessing mesh geometry

- [vertices](heightdata-swift.struct/vertices.md): The vertices of the detailed height data mesh.
- [triangleIndices](heightdata-swift.struct/triangleindices.md): The triangle indices of the detailed height data mesh.
- [polygonTriangleIndices](heightdata-swift.struct/polygontriangleindices.md): The groups of triangles that make up a polygon in the detailed height data mesh, used to get the corresponding triangles for a given polygon in the generated Navigation Mesh.

## See Also

### Supporting types

- [NavigationMeshResource.Configuration](configuration-swift.struct.md): The NavigationMeshResource configuration that defines how the mesh is created.
- [NavigationMeshResource.Area](area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.FlagGroup](flaggroup.md): A collection of Flags.
- [NavigationMeshResource.OffMeshConnection](offmeshconnection.md): A container for the data associated with an off-mesh connection.
- [NavigationMeshResource.Layer](layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](../navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
- [NavigationMeshResource.PathNode](pathnode.md): A container for the path node data.
