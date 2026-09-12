> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor)

# MTL4AccelerationStructureMotionCurveGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes motion curve geometry, suitable for motion ray tracing.

## Declaration

```swift
class MTL4AccelerationStructureMotionCurveGeometryDescriptor
```

<a id="overview"></a>

## Overview

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [controlPointBuffers](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers.md): Assigns a reference to a buffer where each entry contains a reference to a buffer of control points.
- [controlPointCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointcount.md): Specifies the number of control points in the buffers the control point buffers reference.
- [controlPointFormat](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointformat.md): Declares the format of the control points in the buffers that the control point buffers reference.
- [controlPointStride](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointstride.md): Sets the stride, in bytes, between control points in the control point buffer.
- [curveBasis](mtl4accelerationstructuremotioncurvegeometrydescriptor/curvebasis.md): Sets the curve basis function, determining how Metal interpolates the control points.
- [curveEndCaps](mtl4accelerationstructuremotioncurvegeometrydescriptor/curveendcaps.md): Configures the type of curve end caps.
- [curveType](mtl4accelerationstructuremotioncurvegeometrydescriptor/curvetype.md): Controls the curve type.
- [indexBuffer](mtl4accelerationstructuremotioncurvegeometrydescriptor/indexbuffer.md): Assigns an optional index buffer containing references to control points in the control point buffers.
- [indexType](mtl4accelerationstructuremotioncurvegeometrydescriptor/indextype.md): Configures the size of the indices the `indexBuffer` contains, which is typically either 16 or 32-bits for each index.
- [radiusBuffers](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusbuffers.md): Assigns a reference to a buffer containing, in turn, references to curve radii buffers.
- [radiusFormat](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusformat.md): Sets the format of the radii in the radius buffer.
- [radiusStride](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusstride.md): Sets the stride, in bytes, between radii in the radius buffer.
- [segmentControlPointCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/segmentcontrolpointcount.md): Controls the number of control points per curve segment.
- [segmentCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/segmentcount.md): Declares the number of curve segments.

## Relationships

### Inherits From

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md)

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
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.

# MTL4AccelerationStructureMotionCurveGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes motion curve geometry, suitable for motion ray tracing.

## Declaration

```objectivec
@interface MTL4AccelerationStructureMotionCurveGeometryDescriptor : MTL4AccelerationStructureGeometryDescriptor
```

<a id="overview"></a>

## Overview

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [controlPointBuffers](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointbuffers.md): Assigns a reference to a buffer where each entry contains a reference to a buffer of control points.
- [controlPointCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointcount.md): Specifies the number of control points in the buffers the control point buffers reference.
- [controlPointFormat](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointformat.md): Declares the format of the control points in the buffers that the control point buffers reference.
- [controlPointStride](mtl4accelerationstructuremotioncurvegeometrydescriptor/controlpointstride.md): Sets the stride, in bytes, between control points in the control point buffer.
- [curveBasis](mtl4accelerationstructuremotioncurvegeometrydescriptor/curvebasis.md): Sets the curve basis function, determining how Metal interpolates the control points.
- [curveEndCaps](mtl4accelerationstructuremotioncurvegeometrydescriptor/curveendcaps.md): Configures the type of curve end caps.
- [curveType](mtl4accelerationstructuremotioncurvegeometrydescriptor/curvetype.md): Controls the curve type.
- [indexBuffer](mtl4accelerationstructuremotioncurvegeometrydescriptor/indexbuffer.md): Assigns an optional index buffer containing references to control points in the control point buffers.
- [indexType](mtl4accelerationstructuremotioncurvegeometrydescriptor/indextype.md): Configures the size of the indices the `indexBuffer` contains, which is typically either 16 or 32-bits for each index.
- [radiusBuffers](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusbuffers.md): Assigns a reference to a buffer containing, in turn, references to curve radii buffers.
- [radiusFormat](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusformat.md): Sets the format of the radii in the radius buffer.
- [radiusStride](mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusstride.md): Sets the stride, in bytes, between radii in the radius buffer.
- [segmentControlPointCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/segmentcontrolpointcount.md): Controls the number of control points per curve segment.
- [segmentCount](mtl4accelerationstructuremotioncurvegeometrydescriptor/segmentcount.md): Declares the number of curve segments.

## Relationships

### Inherits From

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionTriangleGeometryDescriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor.md): A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.
