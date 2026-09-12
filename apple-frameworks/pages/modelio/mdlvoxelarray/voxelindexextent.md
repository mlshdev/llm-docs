> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/voxelindexextent](https://developer.apple.com/documentation/modelio/mdlvoxelarray/voxelindexextent)

# voxelIndexExtent (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The indexes that define the corners of the three-dimensional voxel grid.

## Declaration

```swift
var voxelIndexExtent: MDLVoxelIndexExtent { get }
```

<a id="Discussion"></a>

## Discussion

This property determines which [MDLVoxelIndex](../mdlvoxelindex.md) values are valid for referring to the contents of the voxel array using methods such as [setVoxelAtIndex(\_:)](setvoxelatindex%28__%29.md) or [voxelBoundingBox(atIndex:)](voxelboundingbox%28atindex_%29.md). For example, if the minimum extent is `{0, 0, 0, 0}` and the maximum extent is `{10, 10, 10, 0}`, the voxel index `{5, 5, 5, 0}` lies within the array but the voxel index `{0, 20, 10, 0}` does not.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelExists(atIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:)](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxels(within:)](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices()](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.

# voxelIndexExtent (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The indexes that define the corners of the three-dimensional voxel grid.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLVoxelIndexExtent voxelIndexExtent;
```

<a id="Discussion"></a>

## Discussion

This property determines which [MDLVoxelIndex](../mdlvoxelindex.md) values are valid for referring to the contents of the voxel array using methods such as [setVoxelAtIndex:](setvoxelatindex%28__%29.md) or [voxelBoundingBoxAtIndex:](voxelboundingbox%28atindex_%29.md). For example, if the minimum extent is `{0, 0, 0, 0}` and the maximum extent is `{10, 10, 10, 0}`, the voxel index `{5, 5, 5, 0}` lies within the array but the voxel index `{0, 20, 10, 0}` does not.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelExistsAtIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelsWithinExtent:](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
- [voxelIndices](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.
