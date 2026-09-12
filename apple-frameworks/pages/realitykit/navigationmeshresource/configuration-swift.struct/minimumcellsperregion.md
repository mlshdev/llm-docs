> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/configuration-swift.struct/minimumcellsperregion](https://developer.apple.com/documentation/realitykit/navigationmeshresource/configuration-swift.struct/minimumcellsperregion)

# minimumCellsPerRegion

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The minimum number of cells allowed to generate isolated regions or islands in the Navigation Mesh.

## Declaration

```swift
var minimumCellsPerRegion: Int
```

## See Also

### Configuring region generation

- [partitionMethod](partitionmethod-swift.property.md): The partitioning method to use when creating the polygon regions of the Navigation Mesh.
- [NavigationMeshResource.Configuration.PartitionMethod](partitionmethod-swift.enum.md): The partitioning method to use for creating the polygons of the mesh.
- [minimumCellsToMergeRegions](minimumcellstomergeregions.md): The number of walkable cells in a region below which the region will be merged with nearby regions to simplify the Navigation Mesh.
