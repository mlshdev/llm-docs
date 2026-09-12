> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/voxels(within:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/voxels(within:))

# voxels(within:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a data object containing all voxels within the specified volume.

## Declaration

```swift
func voxels(within extent: MDLVoxelIndexExtent) -> Data?
```

## Parameters

- `extent`: The minimum and maximum corners of the volume for which to retrieve voxel data.

<a id="return-value"></a>

## Return Value

A data object containing [MDLVoxelIndex](../mdlvoxelindex.md) values.

<a id="Discussion"></a>

## Discussion

The returned [NSData](../../foundation/nsdata.md) object contains an array of [MDLVoxelIndex](../mdlvoxelindex.md) values describing the locations of voxels within the specified volume as well as their volumetric relationship to the object modeled by the voxel array.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExists(atIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:)](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelIndices()](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.

# voxelsWithinExtent: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a data object containing all voxels within the specified volume.

## Declaration

```objectivec
- (NSData *) voxelsWithinExtent:(MDLVoxelIndexExtent) extent;
```

## Parameters

- `extent`: The minimum and maximum corners of the volume for which to retrieve voxel data.

<a id="return-value"></a>

## Return Value

A data object containing [MDLVoxelIndex](../mdlvoxelindex.md) values.

<a id="Discussion"></a>

## Discussion

The returned [NSData](../../foundation/nsdata.md) object contains an array of [MDLVoxelIndex](../mdlvoxelindex.md) values describing the locations of voxels within the specified volume as well as their volumetric relationship to the object modeled by the voxel array.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExistsAtIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelIndices](voxelindices%28%29.md): Returns a data object containing all voxels within the voxel array.
