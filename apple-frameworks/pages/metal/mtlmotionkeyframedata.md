> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmotionkeyframedata](https://developer.apple.com/documentation/metal/mtlmotionkeyframedata)

# MTLMotionKeyframeData (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Geometry data for a specific keyframe to use in a moving instance.

## Declaration

```swift
class MTLMotionKeyframeData
```

<a id="overview"></a>

## Overview

An [MTLMotionKeyframeData](mtlmotionkeyframedata.md) instance describes the location of geometry data for a keyframe. The exact type of data can vary, depending on which kind of motion descriptor you create. For an [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md) instance, the buffer data is a list of bounding boxes. For an [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md), the buffer data is a list of vertices.

## Topics

### Specifying the keyframe data

- [buffer](mtlmotionkeyframedata/buffer.md): The buffer that holds the geometry data.
- [offset](mtlmotionkeyframedata/offset.md): The offset, in bytes, to the keyframe data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.

# MTLMotionKeyframeData (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Geometry data for a specific keyframe to use in a moving instance.

## Declaration

```objectivec
@interface MTLMotionKeyframeData : NSObject
```

<a id="overview"></a>

## Overview

An [MTLMotionKeyframeData](mtlmotionkeyframedata.md) instance describes the location of geometry data for a keyframe. The exact type of data can vary, depending on which kind of motion descriptor you create. For an [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md) instance, the buffer data is a list of bounding boxes. For an [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md), the buffer data is a list of vertices.

## Topics

### Creating a motion keyframe data instance

- [data](mtlmotionkeyframedata/data.md): Creates a new keyframe object.

### Specifying the keyframe data

- [buffer](mtlmotionkeyframedata/buffer.md): The buffer that holds the geometry data.
- [offset](mtlmotionkeyframedata/offset.md): The offset, in bytes, to the keyframe data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
