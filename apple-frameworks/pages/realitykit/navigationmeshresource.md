> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource](https://developer.apple.com/documentation/realitykit/navigationmeshresource)

# NavigationMeshResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A representation of a scene’s navigable surfaces that the system uses to compute paths.

## Declaration

```swift
class NavigationMeshResource
```

<a id="overview"></a>

## Overview

Build a navigation mesh from a model’s geometry or from raw vertex and polygon data, then mark areas and flags to describe where agents can travel and at what cost. Provide the resulting resource to a [NavigationMeshComponent](navigationmeshcomponent.md) so a [NavigationController](navigationcontroller.md) can find paths across it.

## Topics

### Creating a navigation mesh

- [init(mesh:offMeshConnections:configuration:)](navigationmeshresource/init%28mesh_offmeshconnections_configuration_%29-6xdta.md): Creates a NavigationMeshResource from a MeshResource. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(mesh:offMeshConnections:configuration:)](navigationmeshresource/init%28mesh_offmeshconnections_configuration_%29-7mj9i.md): Asynchronously creates a NavigationMeshResource from a MeshResource. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(meshDescriptor:offMeshConnections:configuration:)](navigationmeshresource/init%28meshdescriptor_offmeshconnections_configuration_%29-3n43t.md): Creates a NavigationMeshResource from a MeshDescriptor. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(meshDescriptor:offMeshConnections:configuration:)](navigationmeshresource/init%28meshdescriptor_offmeshconnections_configuration_%29-6zzvf.md): Asynchronously creates a NavigationMeshResource from a MeshDescriptor. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(triangleIndices:vertices:offMeshConnections:configuration:)](navigationmeshresource/init%28triangleindices_vertices_offmeshconnections_configuration_%29-2rrq1.md): Creates a NavigationMeshResource from triangle indices and vertices. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(triangleIndices:vertices:offMeshConnections:configuration:)](navigationmeshresource/init%28triangleindices_vertices_offmeshconnections_configuration_%29-480i3.md): Asynchronously creates a NavigationMeshResource from triangle indices and vertices. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(polygonIndices:vertices:offMeshConnections:configuration:areas:flags:heightData:)](navigationmeshresource/init%28polygonindices_vertices_offmeshconnections_configuration_areas_flags_heightdata_%29.md): Creates a NavigationMeshResource through existing Navigation Mesh data. This will not regenerate the Navigation Mesh. It will copy and save the input data to create a Navigation Mesh with this information.

### Marking areas and flags

- [markAreaInBox(boundingBox:area:)](navigationmeshresource/markareainbox%28boundingbox_area_%29.md): Marks all polygons in this box with an area.
- [markFlagInBox(boundingBox:flag:)](navigationmeshresource/markflaginbox%28boundingbox_flag_%29.md): Marks all polygons in this box with a flag.
- [markAreaInCylinder(position:radius:halfHeight:area:)](navigationmeshresource/markareaincylinder%28position_radius_halfheight_area_%29.md): Marks all polygons in this cylinder with an area.
- [markFlagInCylinder(position:radius:halfHeight:flag:)](navigationmeshresource/markflagincylinder%28position_radius_halfheight_flag_%29.md): Marks all polygons in this cylinder with a flag.
- [markAreaOnPolygons(polygonIndices:area:)](navigationmeshresource/markareaonpolygons%28polygonindices_area_%29.md): Marks the polygons at these indices with an area.
- [markFlagOnPolygons(polygonIndices:flag:)](navigationmeshresource/markflagonpolygons%28polygonindices_flag_%29.md): Marks the polygons at these indices with a flag.
- [markAreaOnOffMeshConnections(offMeshConnectionIndices:area:)](navigationmeshresource/markareaonoffmeshconnections%28offmeshconnectionindices_area_%29.md): Marks the off-mesh connections at these indices with an area.
- [markFlagOnOffMeshConnections(offMeshConnectionIndices:flag:)](navigationmeshresource/markflagonoffmeshconnections%28offmeshconnectionindices_flag_%29.md): Marks the off-mesh connections at these indices with a flag.

### Removing areas and flags

- [removeAreaInBox(boundingBox:area:)](navigationmeshresource/removeareainbox%28boundingbox_area_%29.md): Removes the area from all polygons in this box.
- [removeFlagInBox(boundingBox:flag:)](navigationmeshresource/removeflaginbox%28boundingbox_flag_%29.md): Removes the flag from all polygons in this box.
- [removeAreaInCylinder(position:radius:halfHeight:area:)](navigationmeshresource/removeareaincylinder%28position_radius_halfheight_area_%29.md): Removes the area from all polygons in this cylinder.
- [removeFlagInCylinder(position:radius:halfHeight:flag:)](navigationmeshresource/removeflagincylinder%28position_radius_halfheight_flag_%29.md): Removes the flag from all polygons in this cylinder.
- [removeAreaOnPolygons(polygonIndices:area:)](navigationmeshresource/removeareaonpolygons%28polygonindices_area_%29.md): Removes the area from the polygons at these indices.
- [removeFlagOnPolygons(polygonIndices:flag:)](navigationmeshresource/removeflagonpolygons%28polygonindices_flag_%29.md): Removes the flag from the polygons at these indices.
- [removeAreaOnOffMeshConnections(offMeshConnectionIndices:area:)](navigationmeshresource/removeareaonoffmeshconnections%28offmeshconnectionindices_area_%29.md): Removes the area from the off-mesh connections at these indices.
- [removeFlagOnOffMeshConnections(offMeshConnectionIndices:flag:)](navigationmeshresource/removeflagonoffmeshconnections%28offmeshconnectionindices_flag_%29.md): Removes the flag from the off-mesh connections at these indices.

### Accessing mesh data

- [vertices](navigationmeshresource/vertices.md): The vertices of the generated Navigation Mesh.
- [polygonIndices](navigationmeshresource/polygonindices.md): The polygon indices of the generated Navigation Mesh. Polygons may have different numbers of vertices, so each entry in the list is a list of indices into the vertices array for that polygon.
- [areas](navigationmeshresource/areas.md): The areas associated with each polygon in the generated Navigation Mesh.
- [flags](navigationmeshresource/flags.md): The flags associated with each polygon in the generated Navigation Mesh.
- [offMeshConnections](navigationmeshresource/offmeshconnections.md): The off-mesh connections of the generated Navigation Mesh.
- [heightData](navigationmeshresource/heightdata-swift.property.md): The detailed height data of the generated Navigation Mesh.
- [layer](navigationmeshresource/layer-swift.property.md): The identification of this NavigationMeshResource, used when entities are searching for a specific NavigationMeshResource in a scene.
- [configuration](navigationmeshresource/configuration-swift.property.md): The configuration this Navigation Mesh was created with.

### Supporting types

- [NavigationMeshResource.Configuration](navigationmeshresource/configuration-swift.struct.md): The NavigationMeshResource configuration that defines how the mesh is created.
- [NavigationMeshResource.Area](navigationmeshresource/area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](navigationmeshresource/flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.FlagGroup](navigationmeshresource/flaggroup.md): A collection of Flags.
- [NavigationMeshResource.OffMeshConnection](navigationmeshresource/offmeshconnection.md): A container for the data associated with an off-mesh connection.
- [NavigationMeshResource.HeightData](navigationmeshresource/heightdata-swift.struct.md): A container for the detailed height data of the NavigationMeshResource.
- [NavigationMeshResource.Layer](navigationmeshresource/layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
- [NavigationMeshResource.PathNode](navigationmeshresource/pathnode.md): A container for the path node data.

### Initializers

- [init(mesh:offMeshConnections:configuration:)](navigationmeshresource/init%28mesh_offmeshconnections_configuration_%29.md): Asynchronously creates a NavigationMeshResource from a MeshResource. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(meshDescriptor:offMeshConnections:configuration:)](navigationmeshresource/init%28meshdescriptor_offmeshconnections_configuration_%29.md): Asynchronously creates a NavigationMeshResource from a MeshDescriptor. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.
- [init(named:in:)](navigationmeshresource/init%28named_in_%29.md): Asynchronously creates a NavigationMeshResource by importing an existing one from a Bundle. The name is the path of the NavigationMeshResource within the bundle. The bundle is the app package that contains the NavigationMeshResource. If nothing is specified, then the main bundle is used. This loads an existing Navigation Mesh and will not process and create a new one.
- [init(triangleIndices:vertices:offMeshConnections:configuration:)](navigationmeshresource/init%28triangleindices_vertices_offmeshconnections_configuration_%29.md): Asynchronously creates a NavigationMeshResource from triangle indices and vertices. This will take the input geometry and configuration and process it into a Navigation Mesh. The input and final geometry of the Navigation Mesh may not match, as it strives to simplify regions and match the configuration to determine what areas are walkable.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Game development

- [Gaming sample code projects](game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Entity animations](game-development-entity-animations.md): Dynamically move, rotate, and scale entities at runtime.
- [Character control, skeletons, and inverse kinematics](game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationComponent](navigationcomponent.md): A component that defines which areas of a navigation mesh an entity can move through.
- [NavigationMeshComponent](navigationmeshcomponent.md): A component that provides the navigation meshes an entity uses to find paths through a scene.
- [NavigationController](navigationcontroller.md): An interface for finding paths for an entity moving across a scene’s navigation mesh.
