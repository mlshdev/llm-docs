> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/pathnode](https://developer.apple.com/documentation/realitykit/navigationmeshresource/pathnode)

# NavigationMeshResource.PathNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A container for the path node data.

## Declaration

```swift
struct PathNode
```

## Topics

### Creating a path node

- [init(position:category:label:)](pathnode/init%28position_category_label_%29.md)

### Categorizing path nodes

- [category](pathnode/category-swift.property.md): The category of the node.
- [NavigationMeshResource.PathNode.Category](pathnode/category-swift.enum.md): The categories of path nodes.

### Instance Properties

- [label](pathnode/label.md): The label of the node.
- [position](pathnode/position.md): The position of the node.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [NavigationMeshResource.Configuration](configuration-swift.struct.md): The NavigationMeshResource configuration that defines how the mesh is created.
- [NavigationMeshResource.Area](area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.FlagGroup](flaggroup.md): A collection of Flags.
- [NavigationMeshResource.OffMeshConnection](offmeshconnection.md): A container for the data associated with an off-mesh connection.
- [NavigationMeshResource.HeightData](heightdata-swift.struct.md): A container for the detailed height data of the NavigationMeshResource.
- [NavigationMeshResource.Layer](layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](../navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
