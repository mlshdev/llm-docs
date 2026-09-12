> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/count](https://developer.apple.com/documentation/modelio/mdlvoxelarray/count)

# count (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of voxels in the array.

## Declaration

```swift
var count: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property measures the number of grid positions in the array for which voxel data exists, not the total number of grid positions within the voxel array’s extent.

## See Also

### Examining Voxels

- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExists(atIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:)](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxels(within:)](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices()](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.

# count (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of voxels in the array.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger count;
```

<a id="Discussion"></a>

## Discussion

This property measures the number of grid positions in the array for which voxel data exists, not the total number of grid positions within the voxel array’s extent.

## See Also

### Examining Voxels

- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExistsAtIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelsWithinExtent:](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.
