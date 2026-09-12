> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotiontrianglegeometrydescriptor)

# MTLAccelerationStructureMotionTriangleGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.

## Declaration

```swift
class MTLAccelerationStructureMotionTriangleGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Specifying the number of triangles

- [triangleCount](mtlaccelerationstructuremotiontrianglegeometrydescriptor/trianglecount.md): The number of triangles in the buffers.

### Specifying index data

- [indexBuffer](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexType](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indextype.md): The data type of indices in the index buffer.
- [indexBufferOffset](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.

### Specifying vertex data

- [vertexBuffers](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexbuffers.md): An array of motion keyframes, each containing triangle data.
- [vertexStride](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexstride.md): The stride, in bytes, between vertices in each vertex buffer.

### Instance Properties

- [transformationMatrixBuffer](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbuffer.md)
- [transformationMatrixBufferOffset](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbufferoffset.md)
- [transformationMatrixLayout](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixlayout.md)
- [vertexFormat](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexformat.md)

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
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.

# MTLAccelerationStructureMotionTriangleGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of triangle primitives, as motion keyframe data, to turn into an acceleration structure.

## Declaration

```objectivec
@interface MTLAccelerationStructureMotionTriangleGeometryDescriptor : MTLAccelerationStructureGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Creating a triangle motion geometry descriptor

- [descriptor](mtlaccelerationstructuremotiontrianglegeometrydescriptor/descriptor.md): Creates a new triangle descriptor.

### Specifying the number of triangles

- [triangleCount](mtlaccelerationstructuremotiontrianglegeometrydescriptor/trianglecount.md): The number of triangles in the buffers.

### Specifying index data

- [indexBuffer](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbuffer.md): A buffer that contains indices for the vertices that compose the triangle list.
- [indexType](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indextype.md): The data type of indices in the index buffer.
- [indexBufferOffset](mtlaccelerationstructuremotiontrianglegeometrydescriptor/indexbufferoffset.md): The offset, in bytes, to the first index in the buffer.

### Specifying vertex data

- [vertexBuffers](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexbuffers.md): An array of motion keyframes, each containing triangle data.
- [vertexStride](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexstride.md): The stride, in bytes, between vertices in each vertex buffer.

### Instance Properties

- [transformationMatrixBuffer](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbuffer.md)
- [transformationMatrixBufferOffset](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixbufferoffset.md)
- [transformationMatrixLayout](mtlaccelerationstructuremotiontrianglegeometrydescriptor/transformationmatrixlayout.md)
- [vertexFormat](mtlaccelerationstructuremotiontrianglegeometrydescriptor/vertexformat.md)

## Relationships

### Inherits From

- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md)

## See Also

### Motion geometry descriptors

- [MTL4AccelerationStructureMotionTriangleGeometryDescriptor](mtl4accelerationstructuremotiontrianglegeometrydescriptor.md): Describes motion triangle geometry, suitable for motion ray tracing.
- [MTL4AccelerationStructureMotionCurveGeometryDescriptor](mtl4accelerationstructuremotioncurvegeometrydescriptor.md): Describes motion curve geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionCurveGeometryDescriptor](mtlaccelerationstructuremotioncurvegeometrydescriptor.md)
- [MTL4AccelerationStructureMotionBoundingBoxGeometryDescriptor](mtl4accelerationstructuremotionboundingboxgeometrydescriptor.md): Describes motion bounding box geometry, suitable for motion ray tracing.
- [MTLAccelerationStructureMotionBoundingBoxGeometryDescriptor](mtlaccelerationstructuremotionboundingboxgeometrydescriptor.md): A description of a list of bounding boxes, as motion keyframe data, to turn into an acceleration structure.
- [MTLMotionKeyframeData](mtlmotionkeyframedata.md): Geometry data for a specific keyframe to use in a moving instance.
