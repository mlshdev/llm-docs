> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/init(meshdescriptor:offmeshconnections:configuration:)-3n43t](https://developer.apple.com/documentation/realitykit/navigationmeshresource/init(meshdescriptor:offmeshconnections:configuration:)-3n43t)

# init(meshDescriptor:offMeshConnections:configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a NavigationMeshResource from a MeshDescriptor. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.

## Declaration

```swift
convenience init(meshDescriptor: MeshDescriptor, offMeshConnections: [NavigationMeshResource.OffMeshConnection] = [], configuration: NavigationMeshResource.Configuration) throws
```

## See Also

### Creating a navigation mesh

- [init(mesh:offMeshConnections:configuration:)](init%28mesh_offmeshconnections_configuration_%29-6xdta.md): Creates a NavigationMeshResource from a MeshResource. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(mesh:offMeshConnections:configuration:)](init%28mesh_offmeshconnections_configuration_%29-7mj9i.md): Asynchronously creates a NavigationMeshResource from a MeshResource. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(meshDescriptor:offMeshConnections:configuration:)](init%28meshdescriptor_offmeshconnections_configuration_%29-6zzvf.md): Asynchronously creates a NavigationMeshResource from a MeshDescriptor. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(triangleIndices:vertices:offMeshConnections:configuration:)](init%28triangleindices_vertices_offmeshconnections_configuration_%29-2rrq1.md): Creates a NavigationMeshResource from triangle indices and vertices. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(triangleIndices:vertices:offMeshConnections:configuration:)](init%28triangleindices_vertices_offmeshconnections_configuration_%29-480i3.md): Asynchronously creates a NavigationMeshResource from triangle indices and vertices. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(polygonIndices:vertices:offMeshConnections:configuration:areas:flags:heightData:)](init%28polygonindices_vertices_offmeshconnections_configuration_areas_flags_heightdata_%29.md): Creates a NavigationMeshResource through existing Navigation Mesh data. This will not regenerate the Navigation Mesh. It will copy and save the input data to create a Navigation Mesh with this information.
