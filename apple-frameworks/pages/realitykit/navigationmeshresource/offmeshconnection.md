> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/offmeshconnection](https://developer.apple.com/documentation/realitykit/navigationmeshresource/offmeshconnection)

# NavigationMeshResource.OffMeshConnection

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A container for the data associated with an off-mesh connection.

## Declaration

```swift
struct OffMeshConnection
```

## Topics

### Creating a connection

- [init(startPoint:endPoint:radius:isBidirectional:label:)](offmeshconnection/init%28startpoint_endpoint_radius_isbidirectional_label_%29.md)

### Defining the path

- [startPoint](offmeshconnection/startpoint.md): The start point of the off-mesh connection.
- [endPoint](offmeshconnection/endpoint.md): The end point of the off-mesh connection.
- [isBidirectional](offmeshconnection/isbidirectional.md): Whether the connection is bidirectional. If false, pathfinds will only allow going from startPoint to endPoint. If true, pathfinds will allow going in both directions.

### Instance Properties

- [label](offmeshconnection/label.md): The label on the connection for other systems to know what type of movement should occur here.
- [radius](offmeshconnection/radius.md): The distance to the connection that counts as being close enough to use it.

## See Also

### Supporting types

- [NavigationMeshResource.Configuration](configuration-swift.struct.md): The NavigationMeshResource configuration that defines how the mesh is created.
- [NavigationMeshResource.Area](area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.FlagGroup](flaggroup.md): A collection of Flags.
- [NavigationMeshResource.HeightData](heightdata-swift.struct.md): A container for the detailed height data of the NavigationMeshResource.
- [NavigationMeshResource.Layer](layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](../navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
- [NavigationMeshResource.PathNode](pathnode.md): A container for the path node data.
