> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/union(with:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/union(with:))

# union(with:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Extends the voxel array to also cover the volume of the specified voxel array.

## Declaration

```swift
func union(with voxels: MDLVoxelArray)
```

## Parameters

- `voxels`: The voxel array to combine with this voxel array.

<a id="Discussion"></a>

## Discussion

After a union operation, the voxel array contains voxels that were present either in the original array or in the specified array. That is, a union operation creates a voxel array that combines two volumes.

Performing a union, intersection, or difference operation clears out shell level information from all voxels in the array. (That is, the w component of every [MDLVoxelIndex](../mdlvoxelindex.md) value in the voxel array is reset to 0.)

## See Also

### Performing Constructive Solid Geometry Operations

- [intersect(with:)](intersect%28with_%29.md): Reduces the voxel array to cover only the volume within both it and another voxel array.
- [difference(with:)](difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.

# unionWithVoxels: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Extends the voxel array to also cover the volume of the specified voxel array.

## Declaration

```objectivec
- (void) unionWithVoxels:(MDLVoxelArray *) voxels;
```

## Parameters

- `voxels`: The voxel array to combine with this voxel array.

<a id="Discussion"></a>

## Discussion

After a union operation, the voxel array contains voxels that were present either in the original array or in the specified array. That is, a union operation creates a voxel array that combines two volumes.

Performing a union, intersection, or difference operation clears out shell level information from all voxels in the array. (That is, the w component of every [MDLVoxelIndex](../mdlvoxelindex.md) value in the voxel array is reset to 0.)

## See Also

### Performing Constructive Solid Geometry Operations

- [intersectWithVoxels:](intersect%28with_%29.md): Reduces the voxel array to cover only the volume within both it and another voxel array.
- [differenceWithVoxels:](difference%28with_%29.md): Reduces the voxel array to cover only the portion of its volume not covered by another voxel array.
