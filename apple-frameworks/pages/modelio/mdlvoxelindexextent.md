> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelindexextent](https://developer.apple.com/documentation/modelio/mdlvoxelindexextent)

# MDLVoxelIndexExtent (Swift)

**Framework:** Model I/O  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The corner voxel indices defining a solid rectangular volume of voxels. Used by the [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md) property and [voxels(within:)](mdlvoxelarray/voxels%28within_%29.md) method.

## Declaration

```swift
struct MDLVoxelIndexExtent
```

## Topics

### Initializers

- [init()](mdlvoxelindexextent/init%28%29.md)
- [init(minimumExtent:maximumExtent:)](mdlvoxelindexextent/init%28minimumextent_maximumextent_%29.md)

### Instance Properties

- [maximumExtent](mdlvoxelindexextent/maximumextent.md): The highest x, y, and z coordinates in the volume.
- [minimumExtent](mdlvoxelindexextent/minimumextent.md): The lowest x, y, and z coordinates in the volume.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Constants

- [MDLVoxelIndex](mdlvoxelindex.md): A 4-component vector encoding the location of a voxel in a voxel array and describing its relation to an object’s volume.

# MDLVoxelIndexExtent (Objective-C)

**Framework:** Model I/O  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The corner voxel indices defining a solid rectangular volume of voxels. Used by the [voxelIndexExtent](mdlvoxelarray/voxelindexextent.md) property and [voxelsWithinExtent:](mdlvoxelarray/voxels%28within_%29.md) method.

## Declaration

```objectivec
typedef struct { ... } MDLVoxelIndexExtent;
```

## Topics

### Instance Properties

- [maximumExtent](mdlvoxelindexextent/maximumextent.md): The highest x, y, and z coordinates in the volume.
- [minimumExtent](mdlvoxelindexextent/minimumextent.md): The lowest x, y, and z coordinates in the volume.

## See Also

### Constants

- [MDLVoxelIndex](mdlvoxelindex.md): A 4-component vector encoding the location of a voxel in a voxel array and describing its relation to an object’s volume.
