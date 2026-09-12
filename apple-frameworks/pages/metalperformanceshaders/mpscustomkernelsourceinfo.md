> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscustomkernelsourceinfo](https://developer.apple.com/documentation/metalperformanceshaders/mpscustomkernelsourceinfo)

# MPSCustomKernelSourceInfo (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct MPSCustomKernelSourceInfo
```

## Topics

### Initializers

- [init()](mpscustomkernelsourceinfo/init%28%29.md)
- [init(kernelOrigin:kernelPhase:kernelSize:offset:stride:dilationRate:featureChannelOffset:featureChannels:imageArrayOffset:imageArraySize:)](mpscustomkernelsourceinfo/init%28kernelorigin_kernelphase_kernelsize_offset_stride_dilationrate_featurechanneloffset_featurechannels_imagearrayoffset_imagearraysize_%29.md)

### Instance Properties

- [dilationRate](mpscustomkernelsourceinfo/dilationrate.md)
- [featureChannelOffset](mpscustomkernelsourceinfo/featurechanneloffset.md)
- [featureChannels](mpscustomkernelsourceinfo/featurechannels.md)
- [imageArrayOffset](mpscustomkernelsourceinfo/imagearrayoffset.md)
- [imageArraySize](mpscustomkernelsourceinfo/imagearraysize.md)
- [kernelOrigin](mpscustomkernelsourceinfo/kernelorigin.md)
- [kernelPhase](mpscustomkernelsourceinfo/kernelphase.md)
- [kernelSize](mpscustomkernelsourceinfo/kernelsize.md)
- [offset](mpscustomkernelsourceinfo/offset.md)
- [stride](mpscustomkernelsourceinfo/stride.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
- [MPSCustomKernelInfo](mpscustomkernelinfo.md)
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

# MPSCustomKernelSourceInfo (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef struct { ... } MPSCustomKernelSourceInfo;
```

## Topics

### Instance Properties

- [dilationRate](mpscustomkernelsourceinfo/dilationrate.md)
- [featureChannelOffset](mpscustomkernelsourceinfo/featurechanneloffset.md)
- [featureChannels](mpscustomkernelsourceinfo/featurechannels.md)
- [imageArrayOffset](mpscustomkernelsourceinfo/imagearrayoffset.md)
- [imageArraySize](mpscustomkernelsourceinfo/imagearraysize.md)
- [kernelOrigin](mpscustomkernelsourceinfo/kernelorigin.md)
- [kernelPhase](mpscustomkernelsourceinfo/kernelphase.md)
- [kernelSize](mpscustomkernelsourceinfo/kernelsize.md)
- [offset](mpscustomkernelsourceinfo/offset.md)
- [stride](mpscustomkernelsourceinfo/stride.md)

## See Also

### Structures

- [MPSAxisAlignedBoundingBox](mpsaxisalignedboundingbox-c.struct.md): An axis-aligned bounding box.
- [MPSCustomKernelArgumentCount](mpscustomkernelargumentcount.md): A structure that contains the number of destination, source, and broadcaset textures used by a custom kernel.
- [MPSCustomKernelInfo](mpscustomkernelinfo.md)
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
