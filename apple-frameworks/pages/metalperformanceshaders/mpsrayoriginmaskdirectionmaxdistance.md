> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrayoriginmaskdirectionmaxdistance](https://developer.apple.com/documentation/metalperformanceshaders/mpsrayoriginmaskdirectionmaxdistance)

# MPSRayOriginMaskDirectionMaxDistance (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 3D ray with an origin, a direction, and a mask to filter out intersections.

## Declaration

```swift
struct MPSRayOriginMaskDirectionMaxDistance
```

## Topics

### Initializers

- [init()](mpsrayoriginmaskdirectionmaxdistance/init%28%29.md)
- [init(origin:mask:direction:maxDistance:)](mpsrayoriginmaskdirectionmaxdistance/init%28origin_mask_direction_maxdistance_%29.md)

### Instance Properties

- [direction](mpsrayoriginmaskdirectionmaxdistance/direction.md)
- [mask](mpsrayoriginmaskdirectionmaxdistance/mask.md)
- [maxDistance](mpsrayoriginmaskdirectionmaxdistance/maxdistance.md)
- [origin](mpsrayoriginmaskdirectionmaxdistance/origin.md)

## Relationships

### Conforms To

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

# MPSRayOriginMaskDirectionMaxDistance (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 3D ray with an origin, a direction, and a mask to filter out intersections.

## Declaration

```objectivec
typedef struct { ... } MPSRayOriginMaskDirectionMaxDistance;
```

## Topics

### Instance Properties

- [direction](mpsrayoriginmaskdirectionmaxdistance/direction.md)
- [mask](mpsrayoriginmaskdirectionmaxdistance/mask.md)
- [maxDistance](mpsrayoriginmaskdirectionmaxdistance/maxdistance.md)
- [origin](mpsrayoriginmaskdirectionmaxdistance/origin.md)

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
