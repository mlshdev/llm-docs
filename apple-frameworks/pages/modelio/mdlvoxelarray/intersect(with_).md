> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/intersect(with:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/intersect(with:))

# intersect(with:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Reduces the voxel array to cover only the volume within both it and another voxel array.

## Declaration

```swift
func intersect(with voxels: MDLVoxelArray)
```

## Parameters

- `voxels`: The voxel array to intersect with this voxel array.

<a id="Discussion"></a>

## Discussion

After an intersection operation, the voxel array contains only those voxels that were present in both the original array and the specified array. That is, an intersection operation creates a voxel array representing only the space where two volumes overlap.

Performing a union, intersection, or difference operation clears out shell level information from all voxels in the array. (That is, the w component of every [MDLVoxelIndex](../mdlvoxelindex.md) value in the voxel array is reset to 0.)

## See Also

### Performing Constructive Solid Geometry Operations

- [union(with:)](union%28with_%29.md): Extends the voxel array to also cover the volume of the specified voxel array.
- [difference(with:)](difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.

# intersectWithVoxels: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Reduces the voxel array to cover only the volume within both it and another voxel array.

## Declaration

```objectivec
- (void) intersectWithVoxels:(MDLVoxelArray *) voxels;
```

## Parameters

- `voxels`: The voxel array to intersect with this voxel array.

<a id="Discussion"></a>

## Discussion

After an intersection operation, the voxel array contains only those voxels that were present in both the original array and the specified array. That is, an intersection operation creates a voxel array representing only the space where two volumes overlap.

Performing a union, intersection, or difference operation clears out shell level information from all voxels in the array. (That is, the w component of every [MDLVoxelIndex](../mdlvoxelindex.md) value in the voxel array is reset to 0.)

## See Also

### Performing Constructive Solid Geometry Operations

- [unionWithVoxels:](union%28with_%29.md): Extends the voxel array to also cover the volume of the specified voxel array.
- [differenceWithVoxels:](difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.
