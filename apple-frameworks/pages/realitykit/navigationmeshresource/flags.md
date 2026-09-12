> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/flags](https://developer.apple.com/documentation/realitykit/navigationmeshresource/flags)

# flags

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The flags associated with each polygon in the generated Navigation Mesh.

## Declaration

```swift
var flags: [[NavigationMeshResource.Flag]] { get }
```

## See Also

### Accessing mesh data

- [vertices](vertices.md): The vertices of the generated Navigation Mesh.
- [polygonIndices](polygonindices.md): The polygon indices of the generated Navigation Mesh. Polygons may have different numbers of vertices, so each entry in the list is a list of indices into the vertices array for that polygon.
- [areas](areas.md): The areas associated with each polygon in the generated Navigation Mesh.
- [offMeshConnections](offmeshconnections.md): The off-mesh connections of the generated Navigation Mesh.
- [heightData](heightdata-swift.property.md): The detailed height data of the generated Navigation Mesh.
- [layer](layer-swift.property.md): The identification of this NavigationMeshResource, used when entities are searching for a specific NavigationMeshResource in a scene.
- [configuration](configuration-swift.property.md): The configuration this Navigation Mesh was created with.
