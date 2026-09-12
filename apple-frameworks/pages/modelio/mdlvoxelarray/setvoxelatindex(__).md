> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/setvoxelatindex(_:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/setvoxelatindex(_:))

# setVoxelAtIndex(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets voxel characteristics at the specified index in the array.

## Declaration

```swift
func setVoxelAtIndex(_ index: MDLVoxelIndex)
```

## Parameters

- `index`: A voxel index to update in the array.

<a id="Discussion"></a>

## Discussion

A [MDLVoxelIndex](../mdlvoxelindex.md) value describes both a location in the voxel array and the characteristics of the volume at that location. To set characteristics at a location, pass a [MDLVoxelIndex](../mdlvoxelindex.md) value whose first three components are the x, y, and z coordinates of that location and whose w coordinate specifies the *shell level* at that location.

Shell level describes the relationship of that location’s volume to the object modeled by the voxel array: 0 for a voxel on the object’s surface, a positive value for voxels outside of the object’s volume, and a negative value for voxels inside the object’s volume. For voxels inside or outside the object, the magnitude of shell level indicates the number of voxels between the index and a voxel on the surface of the object.

## See Also

### Modifying Voxels

- [setVoxelsFor(\_:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:)](setvoxelsfor%28__divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates voxel shells for the specified distances from the object’s surface.
- [setVoxelsFor(\_:divisions:interiorShells:exteriorShells:patchRadius:)](setvoxelsfor%28__divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates the specified number of voxel shells.

# setVoxelAtIndex: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets voxel characteristics at the specified index in the array.

## Declaration

```objectivec
- (void) setVoxelAtIndex:(MDLVoxelIndex) index;
```

## Parameters

- `index`: A voxel index to update in the array.

<a id="Discussion"></a>

## Discussion

A [MDLVoxelIndex](../mdlvoxelindex.md) value describes both a location in the voxel array and the characteristics of the volume at that location. To set characteristics at a location, pass a [MDLVoxelIndex](../mdlvoxelindex.md) value whose first three components are the x, y, and z coordinates of that location and whose w coordinate specifies the *shell level* at that location.

Shell level describes the relationship of that location’s volume to the object modeled by the voxel array: 0 for a voxel on the object’s surface, a positive value for voxels outside of the object’s volume, and a negative value for voxels inside the object’s volume. For voxels inside or outside the object, the magnitude of shell level indicates the number of voxels between the index and a voxel on the surface of the object.

## See Also

### Modifying Voxels

- [setVoxelsForMesh:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:](setvoxelsfor%28__divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates voxel shells for the specified distances from the object’s surface.
- [setVoxelsForMesh:divisions:interiorShells:exteriorShells:patchRadius:](setvoxelsfor%28__divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Sets voxel values in the array to model the volume of the specified mesh and creates the specified number of voxel shells.
