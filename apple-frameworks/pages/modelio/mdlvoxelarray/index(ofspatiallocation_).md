> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/index(ofspatiallocation:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/index(ofspatiallocation:))

# index(ofSpatialLocation:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.

## Declaration

```swift
func index(ofSpatialLocation location: vector_float3) -> MDLVoxelIndex
```

## Parameters

- `location`: A point in the world coordinate space of the asset from which the voxel array was created.

<a id="return-value"></a>

## Return Value

An index describing both the location of the voxel within the three-dimensional grid of the voxel array and its relationship to the volume of the object modeled by the voxel array.

<a id="Discussion"></a>

## Discussion

The coordinate space for spatial locations of voxels is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [init(data:boundingBox:voxelExtent:)](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [boundingBox](boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [spatialLocation(ofIndex:)](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBox(atIndex:)](voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

# indexOfSpatialLocation: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.

## Declaration

```objectivec
- (MDLVoxelIndex) indexOfSpatialLocation:(vector_float3) location;
```

## Parameters

- `location`: A point in the world coordinate space of the asset from which the voxel array was created.

<a id="return-value"></a>

## Return Value

An index describing both the location of the voxel within the three-dimensional grid of the voxel array and its relationship to the volume of the object modeled by the voxel array.

<a id="Discussion"></a>

## Discussion

The coordinate space for spatial locations of voxels is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [initWithData:boundingBox:voxelExtent:](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [boundingBox](boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [spatialLocationOfIndex:](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBoxAtIndex:](voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.
