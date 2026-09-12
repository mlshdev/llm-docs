> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/boundingbox](https://developer.apple.com/documentation/modelio/mdlvoxelarray/boundingbox)

# boundingBox (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The extent of the voxel array’s volume in world coordinate space.

## Declaration

```swift
var boundingBox: MDLAxisAlignedBoundingBox { get }
```

<a id="Discussion"></a>

## Discussion

The coordinate space for the bounding box is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [init(data:boundingBox:voxelExtent:)](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [index(ofSpatialLocation:)](index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocation(ofIndex:)](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBox(atIndex:)](voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.

# boundingBox (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The extent of the voxel array’s volume in world coordinate space.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLAxisAlignedBoundingBox boundingBox;
```

<a id="Discussion"></a>

## Discussion

The coordinate space for the bounding box is the world space of the asset from which the voxel array was created, or for voxel arrays created with the [initWithData:boundingBox:voxelExtent:](init%28data_boundingbox_voxelextent_%29.md) initializer, the bounding box specified at initialization.

## See Also

### Relating Voxels to Scene Space

- [indexOfSpatialLocation:](index%28ofspatiallocation_%29.md): Returns voxel information corresponding to the specified point in the world coordinate space of the asset from which the voxel array was created.
- [spatialLocationOfIndex:](spatiallocation%28ofindex_%29.md): Returns the location of the specified voxel in world coordinate space.
- [voxelBoundingBoxAtIndex:](voxelboundingbox%28atindex_%29.md): Returns the extent of the specified voxel’s volume in the world coordinate space of the asset from which the voxel array was created.
