> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/voxelboundingbox(atindex:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/voxelboundingbox(atindex:))

# voxelBoundingBox(atIndex:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

## Declaration

```swift
func voxelBoundingBox(atIndex index: MDLVoxelIndex) -> MDLAxisAlignedBoundingBox
```

## Parameters

- `index`: An index describing the location of a voxel within the three-dimensional grid of the voxel array. (The w component is ignored for this query.)

<a id="return-value"></a>

## Return Value

The bounding box for the single voxel at the specified index, in the world coordinate space of the asset from which the voxel array was created.

<a id="Discussion"></a>

## Discussion

The coordinate space for spatial locations of voxels is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [init(data:boundingBox:voxelExtent:)](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [boundingBox](boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [index(ofSpatialLocation:)](index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocation(ofIndex:)](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.

# voxelBoundingBoxAtIndex: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

## Declaration

```objectivec
- (MDLAxisAlignedBoundingBox) voxelBoundingBoxAtIndex:(MDLVoxelIndex) index;
```

## Parameters

- `index`: An index describing the location of a voxel within the three-dimensional grid of the voxel array. (The w component is ignored for this query.)

<a id="return-value"></a>

## Return Value

The bounding box for the single voxel at the specified index, in the world coordinate space of the asset from which the voxel array was created.

<a id="Discussion"></a>

## Discussion

The coordinate space for spatial locations of voxels is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [initWithData:boundingBox:voxelExtent:](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [boundingBox](boundingbox.md): The extent of the voxel array’s volume in world coordinate space.
- [indexOfSpatialLocation:](index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocationOfIndex:](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
