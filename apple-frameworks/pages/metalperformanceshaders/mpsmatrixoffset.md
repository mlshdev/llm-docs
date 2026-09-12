> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixoffset](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixoffset)

# MPSMatrixOffset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of row and column offsets into a matrix.

## Declaration

```swift
struct MPSMatrixOffset
```

## Topics

### Initializers

- [init()](mpsmatrixoffset/init%28%29.md)
- [init(rowOffset:columnOffset:)](mpsmatrixoffset/init%28rowoffset_columnoffset_%29.md)

### Instance Properties

- [columnOffset](mpsmatrixoffset/columnoffset.md)
- [rowOffset](mpsmatrixoffset/rowoffset.md)

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

# MPSMatrixOffset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of row and column offsets into a matrix.

## Declaration

```objectivec
typedef struct { ... } MPSMatrixOffset;
```

## Topics

### Instance Properties

- [columnOffset](mpsmatrixoffset/columnoffset.md)
- [rowOffset](mpsmatrixoffset/rowoffset.md)

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
