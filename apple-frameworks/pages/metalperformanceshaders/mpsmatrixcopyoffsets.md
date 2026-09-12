> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixcopyoffsets](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopyoffsets)

# MPSMatrixCopyOffsets (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of matrix copy operations.

## Declaration

```swift
struct MPSMatrixCopyOffsets
```

## Topics

### Initializers

- [init()](mpsmatrixcopyoffsets/init%28%29.md)
- [init(sourceRowOffset:sourceColumnOffset:destinationRowOffset:destinationColumnOffset:)](mpsmatrixcopyoffsets/init%28sourcerowoffset_sourcecolumnoffset_destinationrowoffset_destinationcolumnoffset_%29.md)

### Instance Properties

- [destinationColumnOffset](mpsmatrixcopyoffsets/destinationcolumnoffset.md)
- [destinationRowOffset](mpsmatrixcopyoffsets/destinationrowoffset.md)
- [sourceColumnOffset](mpsmatrixcopyoffsets/sourcecolumnoffset.md)
- [sourceRowOffset](mpsmatrixcopyoffsets/sourcerowoffset.md)

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
- [MPSIntersectionDistancePrimitiveIndexInstanceIndex](mpsintersectiondistanceprimitiveindexinstanceindex.md): An intersection result that contains the origin-intersection distance, and intersected primitive and instance indices.

# MPSMatrixCopyOffsets (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of matrix copy operations.

## Declaration

```objectivec
typedef struct { ... } MPSMatrixCopyOffsets;
```

## Topics

### Instance Properties

- [destinationColumnOffset](mpsmatrixcopyoffsets/destinationcolumnoffset.md)
- [destinationRowOffset](mpsmatrixcopyoffsets/destinationrowoffset.md)
- [sourceColumnOffset](mpsmatrixcopyoffsets/sourcecolumnoffset.md)
- [sourceRowOffset](mpsmatrixcopyoffsets/sourcerowoffset.md)

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
