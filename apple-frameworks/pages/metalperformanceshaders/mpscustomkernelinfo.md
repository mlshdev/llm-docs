> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscustomkernelinfo](https://developer.apple.com/documentation/metalperformanceshaders/mpscustomkernelinfo)

# MPSCustomKernelInfo (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct MPSCustomKernelInfo
```

## Topics

### Initializers

- [init()](mpscustomkernelinfo/init%28%29.md)
- [init(clipOrigin:clipSize:destinationFeatureChannels:destImageArraySize:sourceImageCount:threadgroupSize:subbatchIndex:subbatchStride:idiv:)](mpscustomkernelinfo/init%28cliporigin_clipsize_destinationfeaturechannels_destimagearraysize_sourceimagecount_threadgroupsize_subbatchindex_subbatchstride_idiv_%29.md)

### Instance Properties

- [clipOrigin](mpscustomkernelinfo/cliporigin.md)
- [clipSize](mpscustomkernelinfo/clipsize.md)
- [destImageArraySize](mpscustomkernelinfo/destimagearraysize.md)
- [destinationFeatureChannels](mpscustomkernelinfo/destinationfeaturechannels.md)
- [idiv](mpscustomkernelinfo/idiv.md)
- [sourceImageCount](mpscustomkernelinfo/sourceimagecount.md)
- [subbatchIndex](mpscustomkernelinfo/subbatchindex.md)
- [subbatchStride](mpscustomkernelinfo/subbatchstride.md)
- [threadgroupSize](mpscustomkernelinfo/threadgroupsize.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
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
- [MPSIntersectionDistancePrimitiveIndexInstanceIndexCoordinates](mpsintersectiondistanceprimitiveindexinstanceindexcoordinates.md): An intersection result that contains the origin-intersection distance, intersected primitive and instance indices, and intersection point coordinates.

# MPSCustomKernelInfo (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef struct { ... } MPSCustomKernelInfo;
```

## Topics

### Instance Properties

- [clipOrigin](mpscustomkernelinfo/cliporigin.md)
- [clipSize](mpscustomkernelinfo/clipsize.md)
- [destImageArraySize](mpscustomkernelinfo/destimagearraysize.md)
- [destinationFeatureChannels](mpscustomkernelinfo/destinationfeaturechannels.md)
- [idiv](mpscustomkernelinfo/idiv.md)
- [sourceImageCount](mpscustomkernelinfo/sourceimagecount.md)
- [subbatchIndex](mpscustomkernelinfo/subbatchindex.md)
- [subbatchStride](mpscustomkernelinfo/subbatchstride.md)
- [threadgroupSize](mpscustomkernelinfo/threadgroupsize.md)

## See Also

### Structures

- [MPSAxisAlignedBoundingBox](mpsaxisalignedboundingbox-c.struct.md): An axis-aligned bounding box.
- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
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
