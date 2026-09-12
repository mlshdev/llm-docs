> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/init(data:boundingbox:voxelextent:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/init(data:boundingbox:voxelextent:))

# init(data:boundingBox:voxelExtent:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a voxel array with the specified voxel data.

## Declaration

```swift
init(data voxelData: Data, boundingBox: MDLAxisAlignedBoundingBox, voxelExtent: Float)
```

## Parameters

- `voxelData`: A data object containing an array of [MDLVoxelIndex](../mdlvoxelindex.md) values, each of which describes the locations of voxels within the specified volume as well as their volumetric relationship to the object modeled by the voxel array.
- `boundingBox`: The extent of the voxel array’s volume in world coordinate space.
- `voxelExtent`: The size of a single voxel in world coordinate space.

<a id="return-value"></a>

## Return Value

A new voxel array.

<a id="Discussion"></a>

## Discussion

The `boundingBox` parameter relates the integer grid of the newly created voxel array to a continuous Cartesian space. The methods listed in Relating Voxels to Scene Space and Creating a Mesh from Voxels operate with respect to this bounding volume.

## See Also

### Creating a Voxel Array

- [init(asset:divisions:interiorShells:exteriorShells:patchRadius:)](init%28asset_divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset and creates the specified number of voxel shells.
- [init(asset:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:)](init%28asset_divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset, creating voxel shells for the specified distances from the object’s surface.

# initWithData:boundingBox:voxelExtent: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a voxel array with the specified voxel data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) voxelData boundingBox:(MDLAxisAlignedBoundingBox) boundingBox voxelExtent:(float) voxelExtent;
```

## Parameters

- `voxelData`: A data object containing an array of [MDLVoxelIndex](../mdlvoxelindex.md) values, each of which describes the locations of voxels within the specified volume as well as their volumetric relationship to the object modeled by the voxel array.
- `boundingBox`: The extent of the voxel array’s volume in world coordinate space.
- `voxelExtent`: The size of a single voxel in world coordinate space.

<a id="return-value"></a>

## Return Value

A new voxel array.

<a id="Discussion"></a>

## Discussion

The `boundingBox` parameter relates the integer grid of the newly created voxel array to a continuous Cartesian space. The methods listed in Relating Voxels to Scene Space and Creating a Mesh from Voxels operate with respect to this bounding volume.

## See Also

### Creating a Voxel Array

- [initWithAsset:divisions:interiorShells:exteriorShells:patchRadius:](init%28asset_divisions_interiorshells_exteriorshells_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset and creates the specified number of voxel shells.
- [initWithAsset:divisions:interiorNBWidth:exteriorNBWidth:patchRadius:](init%28asset_divisions_interiornbwidth_exteriornbwidth_patchradius_%29.md): Deprecated. Initializes a voxel array that models the volume of 3D objects in the specified asset, creating voxel shells for the specified distances from the object’s surface.
