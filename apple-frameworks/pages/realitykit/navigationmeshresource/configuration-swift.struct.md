> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/configuration-swift.struct](https://developer.apple.com/documentation/realitykit/navigationmeshresource/configuration-swift.struct)

# NavigationMeshResource.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The NavigationMeshResource configuration that defines how the mesh is created.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(cellSize:cellHeight:walkableSlopeAngle:characterHeight:walkableClimb:characterRadius:)](configuration-swift.struct/init%28cellsize_cellheight_walkableslopeangle_characterheight_walkableclimb_characterradius_%29.md)

### Configuring agent movement

- [characterHeight](configuration-swift.struct/characterheight.md): The height of characters using this Navigation Mesh, representing the minimum height of obstacles above a surface to allow it to be walkable, in meters.
- [characterRadius](configuration-swift.struct/characterradius.md): The radius of characters using this Navigation Mesh, representing the minimum distance from edges or obstacles that can still be walkable, in meters.
- [walkableSlopeAngle](configuration-swift.struct/walkableslopeangle.md): The maximum slope angle that will allow a surface to be walkable, in degrees.
- [walkableClimb](configuration-swift.struct/walkableclimb.md): The maximum height difference between two surfaces that a character can walk through, in meters.

### Configuring voxelization

- [cellSize](configuration-swift.struct/cellsize.md): The x-z size of a cell, in meters.
- [cellHeight](configuration-swift.struct/cellheight.md): The height of a cell, in meters.

### Configuring region generation

- [partitionMethod](configuration-swift.struct/partitionmethod-swift.property.md): The partitioning method to use when creating the polygon regions of the Navigation Mesh.
- [NavigationMeshResource.Configuration.PartitionMethod](configuration-swift.struct/partitionmethod-swift.enum.md): The partitioning method to use for creating the polygons of the mesh.
- [minimumCellsPerRegion](configuration-swift.struct/minimumcellsperregion.md): The minimum number of cells allowed to generate isolated regions or islands in the Navigation Mesh.
- [minimumCellsToMergeRegions](configuration-swift.struct/minimumcellstomergeregions.md): The number of walkable cells in a region below which the region will be merged with nearby regions to simplify the Navigation Mesh.

### Configuring contour meshing

- [maximumEdgeLength](configuration-swift.struct/maximumedgelength.md): The maximum length of polygon edges in the generated Navigation Mesh, in meters. This value can help modify the resulting Navigation Mesh to have better-looking polygons on maps with long, uninterrupted edges.
- [maximumSimplificationError](configuration-swift.struct/maximumsimplificationerror.md): The maximum deviation that the contours of a generated Navigation Mesh can have from the original mesh, in meters.
- [maximumVerticesPerPolygon](configuration-swift.struct/maximumverticesperpolygon.md): The maximum vertices per polygon used when creating the Navigation Mesh.

### Configuring detail mesh

- [detailSampleDistance](configuration-swift.struct/detailsampledistance.md): The sampling distance used when generating the detailed Navigation Mesh heightmap, in meters.
- [detailSampleMaximumError](configuration-swift.struct/detailsamplemaximumerror.md): The maximum deviation from the original heightfield data allowed when creating the detailed heightmap, in meters.

## See Also

### Supporting types

- [NavigationMeshResource.Area](area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.FlagGroup](flaggroup.md): A collection of Flags.
- [NavigationMeshResource.OffMeshConnection](offmeshconnection.md): A container for the data associated with an off-mesh connection.
- [NavigationMeshResource.HeightData](heightdata-swift.struct.md): A container for the detailed height data of the NavigationMeshResource.
- [NavigationMeshResource.Layer](layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](../navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
- [NavigationMeshResource.PathNode](pathnode.md): A container for the path node data.
