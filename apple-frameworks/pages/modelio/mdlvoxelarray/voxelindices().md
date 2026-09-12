> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/voxelindices()](https://developer.apple.com/documentation/modelio/mdlvoxelarray/voxelindices())

# voxelIndices() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a data object containing all voxels within the voxel array.

## Declaration

```swift
func voxelIndices() -> Data?
```

<a id="return-value"></a>

## Return Value

A data object containing [MDLVoxelIndex](../mdlvoxelindex.md) values.

<a id="Discussion"></a>

## Discussion

The returned [NSData](../../foundation/nsdata.md) object contains an array of [MDLVoxelIndex](../mdlvoxelindex.md) values describing the locations of voxels within the voxel array as well as their volumetric relationship to the object modeled by the voxel array.

Calling this method is equivalent to calling the [voxels(within:)](voxels%28within_%29.md) method with the value of the [voxelIndexExtent](voxelindexextent.md) property.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExists(atIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:)](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxels(within:)](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.

# voxelIndices (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a data object containing all voxels within the voxel array.

## Declaration

```objectivec
- (NSData *) voxelIndices;
```

<a id="return-value"></a>

## Return Value

A data object containing [MDLVoxelIndex](../mdlvoxelindex.md) values.

<a id="Discussion"></a>

## Discussion

The returned [NSData](../../foundation/nsdata.md) object contains an array of [MDLVoxelIndex](../mdlvoxelindex.md) values describing the locations of voxels within the voxel array as well as their volumetric relationship to the object modeled by the voxel array.

Calling this method is equivalent to calling the [voxelsWithinExtent:](voxels%28within_%29.md) method with the value of the [voxelIndexExtent](voxelindexextent.md) property.

## See Also

### Examining Voxels

- [count](count.md): The number of voxels in the array.
- [voxelIndexExtent](voxelindexextent.md): The indexes that define the corners of the three-dimensional voxel grid.
- [voxelExistsAtIndex:allowAnyX:allowAnyY:allowAnyZ:allowAnyShell:](voxelexists%28atindex_allowanyx_allowanyy_allowanyz_allowanyshell_%29.md): Returns a Boolean value indicating whether the voxel array contains voxel data for the specified index.
- [voxelsWithinExtent:](voxels%28within_%29.md): Returns a data object containing all voxels within the specified volume.
