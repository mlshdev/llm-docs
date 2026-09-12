> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsintersectiondistanceprimitiveindexinstanceindex](https://developer.apple.com/documentation/metalperformanceshaders/mpsintersectiondistanceprimitiveindexinstanceindex)

# MPSIntersectionDistancePrimitiveIndexInstanceIndex (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An intersection result that contains the origin-intersection distance, and intersected primitive and instance indices.

## Declaration

```swift
struct MPSIntersectionDistancePrimitiveIndexInstanceIndex
```

## Topics

### Initializers

- [init()](mpsintersectiondistanceprimitiveindexinstanceindex/init%28%29.md)
- [init(distance:primitiveIndex:instanceIndex:)](mpsintersectiondistanceprimitiveindexinstanceindex/init%28distance_primitiveindex_instanceindex_%29.md)

### Instance Properties

- [distance](mpsintersectiondistanceprimitiveindexinstanceindex/distance.md)
- [instanceIndex](mpsintersectiondistanceprimitiveindexinstanceindex/instanceindex.md)
- [primitiveIndex](mpsintersectiondistanceprimitiveindexinstanceindex/primitiveindex.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
- [MPSCustomKernelInfo](mpscustomkernelinfo.md)
- [MPSCustomKernelSourceInfo](mpscustomkernelsourceinfo.md)
- [MPSDimensionSlice](mpsdimensionslice.md)
- [MPSImageCoordinate](mpsimagecoordinate.md)
- [MPSImageRegion](mpsimageregion.md)
- [MPSIntegerDivisionParams](mpsintegerdivisionparams.md): Parameters that define the parts of a division operation.
- [MPSIntersectionDistance](mpsintersectiondistance.md): An intersection result that contains the distance from the ray origin to the intersection point.
- [MPSIntersectionDistancePrimitiveIndex](mpsintersectiondistanceprimitiveindex.md): An intersection result that contains the distance from the ray origin to the intersection point, and the index of the intersected primitive.
- [MPSIntersectionDistancePrimitiveIndexBufferIndex](mpsintersectiondistanceprimitiveindexbufferindex.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexCoordinates](mpsintersectiondistanceprimitiveindexbufferindexcoordinates.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndex](mpsintersectiondistanceprimitiveindexbufferindexinstanceindex.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndexCoordinates](mpsintersectiondistanceprimitiveindexbufferindexinstanceindexcoordinates.md)
- [MPSIntersectionDistancePrimitiveIndexCoordinates](mpsintersectiondistanceprimitiveindexcoordinates.md): An intersection result that contains the origin-intersection distance, intersected primitive index, and intersection point coordinates.
- [MPSIntersectionDistancePrimitiveIndexInstanceIndexCoordinates](mpsintersectiondistanceprimitiveindexinstanceindexcoordinates.md): An intersection result that contains the origin-intersection distance, intersected primitive and instance indices, and intersection point coordinates.

# MPSIntersectionDistancePrimitiveIndexInstanceIndex (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An intersection result that contains the origin-intersection distance, and intersected primitive and instance indices.

## Declaration

```objectivec
typedef struct { ... } MPSIntersectionDistancePrimitiveIndexInstanceIndex;
```

## Topics

### Instance Properties

- [distance](mpsintersectiondistanceprimitiveindexinstanceindex/distance.md)
- [instanceIndex](mpsintersectiondistanceprimitiveindexinstanceindex/instanceindex.md)
- [primitiveIndex](mpsintersectiondistanceprimitiveindexinstanceindex/primitiveindex.md)

## See Also

### Structures

- [MPSAxisAlignedBoundingBox](mpsaxisalignedboundingbox-c.struct.md): An axis-aligned bounding box.
- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
- [MPSCustomKernelInfo](mpscustomkernelinfo.md)
- [MPSCustomKernelSourceInfo](mpscustomkernelsourceinfo.md)
- [MPSDimensionSlice](mpsdimensionslice.md)
- [MPSImageCoordinate](mpsimagecoordinate.md)
- [MPSImageRegion](mpsimageregion.md)
- [MPSIntegerDivisionParams](mpsintegerdivisionparams.md): Parameters that define the parts of a division operation.
- [MPSIntersectionDistance](mpsintersectiondistance.md): An intersection result that contains the distance from the ray origin to the intersection point.
- [MPSIntersectionDistancePrimitiveIndex](mpsintersectiondistanceprimitiveindex.md): An intersection result that contains the distance from the ray origin to the intersection point, and the index of the intersected primitive.
- [MPSIntersectionDistancePrimitiveIndexBufferIndex](mpsintersectiondistanceprimitiveindexbufferindex.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexCoordinates](mpsintersectiondistanceprimitiveindexbufferindexcoordinates.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndex](mpsintersectiondistanceprimitiveindexbufferindexinstanceindex.md)
- [MPSIntersectionDistancePrimitiveIndexBufferIndexInstanceIndexCoordinates](mpsintersectiondistanceprimitiveindexbufferindexinstanceindexcoordinates.md)
- [MPSIntersectionDistancePrimitiveIndexCoordinates](mpsintersectiondistanceprimitiveindexcoordinates.md): An intersection result that contains the origin-intersection distance, intersected primitive index, and intersection point coordinates.
