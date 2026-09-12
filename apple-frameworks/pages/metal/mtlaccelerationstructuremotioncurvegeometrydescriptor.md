> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioncurvegeometrydescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioncurvegeometrydescriptor)

# MTLAccelerationStructureMotionCurveGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
class MTLAccelerationStructureMotionCurveGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Instance Properties

- [controlPointBuffers](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers.md)
- [controlPointCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointcount.md)
- [controlPointFormat](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointformat.md)
- [controlPointStride](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointstride.md)
- [curveBasis](mtlaccelerationstructuremotioncurvegeometrydescriptor/curvebasis.md)
- [curveEndCaps](mtlaccelerationstructuremotioncurvegeometrydescriptor/curveendcaps.md)
- [curveType](mtlaccelerationstructuremotioncurvegeometrydescriptor/curvetype.md)
- [indexBuffer](mtlaccelerationstructuremotioncurvegeometrydescriptor/indexbuffer.md)
- [indexBufferOffset](mtlaccelerationstructuremotioncurvegeometrydescriptor/indexbufferoffset.md)
- [indexType](mtlaccelerationstructuremotioncurvegeometrydescriptor/indextype.md)
- [radiusBuffers](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusbuffers.md)
- [radiusFormat](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusformat.md)
- [radiusStride](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusstride.md)
- [segmentControlPointCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/segmentcontrolpointcount.md)
- [segmentCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/segmentcount.md)

## Relationships

### Inherits From

- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.

# MTLAccelerationStructureMotionCurveGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MTLAccelerationStructureMotionCurveGeometryDescriptor : MTLAccelerationStructureGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Instance Properties

- [controlPointBuffers](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers.md)
- [controlPointCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointcount.md)
- [controlPointFormat](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointformat.md)
- [controlPointStride](mtlaccelerationstructuremotioncurvegeometrydescriptor/controlpointstride.md)
- [curveBasis](mtlaccelerationstructuremotioncurvegeometrydescriptor/curvebasis.md)
- [curveEndCaps](mtlaccelerationstructuremotioncurvegeometrydescriptor/curveendcaps.md)
- [curveType](mtlaccelerationstructuremotioncurvegeometrydescriptor/curvetype.md)
- [indexBuffer](mtlaccelerationstructuremotioncurvegeometrydescriptor/indexbuffer.md)
- [indexBufferOffset](mtlaccelerationstructuremotioncurvegeometrydescriptor/indexbufferoffset.md)
- [indexType](mtlaccelerationstructuremotioncurvegeometrydescriptor/indextype.md)
- [radiusBuffers](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusbuffers.md)
- [radiusFormat](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusformat.md)
- [radiusStride](mtlaccelerationstructuremotioncurvegeometrydescriptor/radiusstride.md)
- [segmentControlPointCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/segmentcontrolpointcount.md)
- [segmentCount](mtlaccelerationstructuremotioncurvegeometrydescriptor/segmentcount.md)

### Type Methods

- [descriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor/descriptor.md)

## Relationships

### Inherits From

- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.
