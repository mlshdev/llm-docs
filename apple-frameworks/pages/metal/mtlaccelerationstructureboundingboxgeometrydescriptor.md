> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructureboundingboxgeometrydescriptor)

# MTLAccelerationStructureBoundingBoxGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of bounding boxes to turn into an acceleration structure.

## Declaration

```swift
class MTLAccelerationStructureBoundingBoxGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Specifying the number of bounding boxes

- [boundingBoxCount](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxcount.md): The number of bounding boxes in the bounding box buffer.

### Specifying bounding boxes data

- [boundingBoxBuffer](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxBufferOffset](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.
- [boundingBoxStride](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.

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

### Geometry descriptors

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md): Base class for all Metal 4 acceleration structure geometry descriptors.
- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md): A base class for descriptors that contain geometry data to convert into a ray-tracing acceleration structure.
- [MTL4AccelerationStructureTriangleGeometryDescriptor](mtl4accelerationstructuretrianglegeometrydescriptor.md): Describes triangle geometry suitable for ray tracing.
- [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md): A description of a list of triangle primitives to turn into an acceleration structure.
- [MTL4AccelerationStructureCurveGeometryDescriptor](mtl4accelerationstructurecurvegeometrydescriptor.md): Describes curve geometry suitable for ray tracing.
- [MTLAccelerationStructureCurveGeometryDescriptor](mtlaccelerationstructurecurvegeometrydescriptor.md): A descriptor you configure with curve geometry for building acceleration structures.
- [MTLCurveType](mtlcurvetype.md)
- [MTLCurveBasis](mtlcurvebasis.md)
- [MTLCurveEndCaps](mtlcurveendcaps.md)
- [MTL4AccelerationStructureBoundingBoxGeometryDescriptor](mtl4accelerationstructureboundingboxgeometrydescriptor.md): Describes bounding-box geometry suitable for ray tracing.

# MTLAccelerationStructureBoundingBoxGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of a list of bounding boxes to turn into an acceleration structure.

## Declaration

```objectivec
@interface MTLAccelerationStructureBoundingBoxGeometryDescriptor : MTLAccelerationStructureGeometryDescriptor
```

## Mentioned In

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md)

## Topics

### Creating a bounding box geometry descriptor

- [descriptor](mtlaccelerationstructureboundingboxgeometrydescriptor/descriptor.md): Creates a new bounding box descriptor.

### Specifying the number of bounding boxes

- [boundingBoxCount](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxcount.md): The number of bounding boxes in the bounding box buffer.

### Specifying bounding boxes data

- [boundingBoxBuffer](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer.md): A buffer that contains an array of bounding box structures.
- [boundingBoxBufferOffset](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxbufferoffset.md): The offset, in bytes, to the first bounding box in the buffer.
- [boundingBoxStride](mtlaccelerationstructureboundingboxgeometrydescriptor/boundingboxstride.md): The stride, in bytes, between bounding boxes in the buffer.

## Relationships

### Inherits From

- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md)

## See Also

### Geometry descriptors

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md): Base class for all Metal 4 acceleration structure geometry descriptors.
- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md): A base class for descriptors that contain geometry data to convert into a ray-tracing acceleration structure.
- [MTL4AccelerationStructureTriangleGeometryDescriptor](mtl4accelerationstructuretrianglegeometrydescriptor.md): Describes triangle geometry suitable for ray tracing.
- [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md): A description of a list of triangle primitives to turn into an acceleration structure.
- [MTL4AccelerationStructureCurveGeometryDescriptor](mtl4accelerationstructurecurvegeometrydescriptor.md): Describes curve geometry suitable for ray tracing.
- [MTLAccelerationStructureCurveGeometryDescriptor](mtlaccelerationstructurecurvegeometrydescriptor.md): A descriptor you configure with curve geometry for building acceleration structures.
- [MTLCurveType](mtlcurvetype.md)
- [MTLCurveBasis](mtlcurvebasis.md)
- [MTLCurveEndCaps](mtlcurveendcaps.md)
- [MTL4AccelerationStructureBoundingBoxGeometryDescriptor](mtl4accelerationstructureboundingboxgeometrydescriptor.md): Describes bounding-box geometry suitable for ray tracing.
