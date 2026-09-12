> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotionboundingboxgeometrydescriptor)

# MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.

## Declaration

```swift
class MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Specifying the number of bounding boxes

- [boundingBoxCount](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxcount.md): The number of bounding boxes in each bounding box buffer.

### Specifying bounding boxes data

- [boundingBoxBuffers](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxbuffers.md): A array of motion keyframes, each containing bounding box data.
- [boundingBoxStride](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxstride.md): The stride, in bytes, between bounding boxes in each buffer.

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
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.

# MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.

## Declaration

```objectivec
@interface MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor : MTLAccelerationStructureGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Creating a motion bounding box geometry descriptor

- [descriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/descriptor.md): Creates a new bounding box descriptor.

### Specifying the number of bounding boxes

- [boundingBoxCount](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxcount.md): The number of bounding boxes in each bounding box buffer.

### Specifying bounding boxes data

- [boundingBoxBuffers](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxbuffers.md): A array of motion keyframes, each containing bounding box data.
- [boundingBoxStride](mtlaccelerationstructuremotionboundingboxgeometrydescriptor/boundingboxstride.md): The stride, in bytes, between bounding boxes in each buffer.

## Relationships

### Inherits From

- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.
