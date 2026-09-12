> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor](https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor)

# MTL4AccelerationStructureCurveGeometryDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes curve geometry suitable for ray tracing.

## Declaration

```swift
class MTL4AccelerationStructureCurveGeometryDescriptor
```

<a id="overview"></a>

## Overview

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [controlPointBuffer](mtl4accelerationstructurecurvegeometrydescriptor/controlpointbuffer.md): References a buffer containing curve control points.
- [controlPointCount](mtl4accelerationstructurecurvegeometrydescriptor/controlpointcount.md): Declares the number of control points in the control point buffer.
- [controlPointFormat](mtl4accelerationstructurecurvegeometrydescriptor/controlpointformat.md): Declares the format of the control points the control point buffer references.
- [controlPointStride](mtl4accelerationstructurecurvegeometrydescriptor/controlpointstride.md): Sets the stride, in bytes, between control points in the control point buffer the control point buffer references.
- [curveBasis](mtl4accelerationstructurecurvegeometrydescriptor/curvebasis.md): Controls the curve basis function, determining how Metal interpolates the control points.
- [curveEndCaps](mtl4accelerationstructurecurvegeometrydescriptor/curveendcaps.md): Sets the type of curve end caps.
- [curveType](mtl4accelerationstructurecurvegeometrydescriptor/curvetype.md): Controls the curve type.
- [indexBuffer](mtl4accelerationstructurecurvegeometrydescriptor/indexbuffer.md): Assigns an optional index buffer containing references to control points in the control point buffer.
- [indexType](mtl4accelerationstructurecurvegeometrydescriptor/indextype.md): Specifies the size of the indices the `indexBuffer` contains, which is typically either 16 or 32-bits for each index.
- [radiusBuffer](mtl4accelerationstructurecurvegeometrydescriptor/radiusbuffer.md): Assigns a reference to a buffer containing the curve radius for each control point.
- [radiusFormat](mtl4accelerationstructurecurvegeometrydescriptor/radiusformat.md): Declares the format of the radii in the radius buffer.
- [radiusStride](mtl4accelerationstructurecurvegeometrydescriptor/radiusstride.md): Configures the stride, in bytes, between radii in the radius buffer.
- [segmentControlPointCount](mtl4accelerationstructurecurvegeometrydescriptor/segmentcontrolpointcount.md): Declares the number of control points per curve segment.
- [segmentCount](mtl4accelerationstructurecurvegeometrydescriptor/segmentcount.md): Declares the number of curve segments.

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

### Geometry descriptors

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md): Base class for all Metal 4 acceleration structure geometry descriptors.
- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md): A base class for descriptors that contain geometry data to convert into a ray-tracing acceleration structure.
- [MTL4AccelerationStructureTriangleGeometryDescriptor](mtl4accelerationstructuretrianglegeometrydescriptor.md): Describes triangle geometry suitable for ray tracing.
- [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md): A description of a list of triangle primitives to turn into an acceleration structure.
- [MTLAccelerationStructureCurveGeometryDescriptor](mtlaccelerationstructurecurvegeometrydescriptor.md): A descriptor you configure with curve geometry for building acceleration structures.
- [MTLCurveType](mtlcurvetype.md)
- [MTLCurveBasis](mtlcurvebasis.md)
- [MTLCurveEndCaps](mtlcurveendcaps.md)
- [MTL4AccelerationStructureBoundingBoxGeometryDescriptor](mtl4accelerationstructureboundingboxgeometrydescriptor.md): Describes bounding-box geometry suitable for ray tracing.
- [MTLAccelerationStructureBoundingBoxGeometryDescriptor](mtlaccelerationstructureboundingboxgeometrydescriptor.md): A description of a list of bounding boxes to turn into an acceleration structure.

# MTL4AccelerationStructureCurveGeometryDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes curve geometry suitable for ray tracing.

## Declaration

```objectivec
@interface MTL4AccelerationStructureCurveGeometryDescriptor : MTL4AccelerationStructureGeometryDescriptor
```

<a id="overview"></a>

## Overview

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [controlPointBuffer](mtl4accelerationstructurecurvegeometrydescriptor/controlpointbuffer.md): References a buffer containing curve control points.
- [controlPointCount](mtl4accelerationstructurecurvegeometrydescriptor/controlpointcount.md): Declares the number of control points in the control point buffer.
- [controlPointFormat](mtl4accelerationstructurecurvegeometrydescriptor/controlpointformat.md): Declares the format of the control points the control point buffer references.
- [controlPointStride](mtl4accelerationstructurecurvegeometrydescriptor/controlpointstride.md): Sets the stride, in bytes, between control points in the control point buffer the control point buffer references.
- [curveBasis](mtl4accelerationstructurecurvegeometrydescriptor/curvebasis.md): Controls the curve basis function, determining how Metal interpolates the control points.
- [curveEndCaps](mtl4accelerationstructurecurvegeometrydescriptor/curveendcaps.md): Sets the type of curve end caps.
- [curveType](mtl4accelerationstructurecurvegeometrydescriptor/curvetype.md): Controls the curve type.
- [indexBuffer](mtl4accelerationstructurecurvegeometrydescriptor/indexbuffer.md): Assigns an optional index buffer containing references to control points in the control point buffer.
- [indexType](mtl4accelerationstructurecurvegeometrydescriptor/indextype.md): Specifies the size of the indices the `indexBuffer` contains, which is typically either 16 or 32-bits for each index.
- [radiusBuffer](mtl4accelerationstructurecurvegeometrydescriptor/radiusbuffer.md): Assigns a reference to a buffer containing the curve radius for each control point.
- [radiusFormat](mtl4accelerationstructurecurvegeometrydescriptor/radiusformat.md): Declares the format of the radii in the radius buffer.
- [radiusStride](mtl4accelerationstructurecurvegeometrydescriptor/radiusstride.md): Configures the stride, in bytes, between radii in the radius buffer.
- [segmentControlPointCount](mtl4accelerationstructurecurvegeometrydescriptor/segmentcontrolpointcount.md): Declares the number of control points per curve segment.
- [segmentCount](mtl4accelerationstructurecurvegeometrydescriptor/segmentcount.md): Declares the number of curve segments.

## Relationships

### Inherits From

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md)

## See Also

### Geometry descriptors

- [MTL4AccelerationStructureGeometryDescriptor](mtl4accelerationstructuregeometrydescriptor.md): Base class for all Metal 4 acceleration structure geometry descriptors.
- [MTLAccelerationStructureGeometryDescriptor](mtlaccelerationstructuregeometrydescriptor.md): A base class for descriptors that contain geometry data to convert into a ray-tracing acceleration structure.
- [MTL4AccelerationStructureTriangleGeometryDescriptor](mtl4accelerationstructuretrianglegeometrydescriptor.md): Describes triangle geometry suitable for ray tracing.
- [MTLAccelerationStructureTriangleGeometryDescriptor](mtlaccelerationstructuretrianglegeometrydescriptor.md): A description of a list of triangle primitives to turn into an acceleration structure.
- [MTLAccelerationStructureCurveGeometryDescriptor](mtlaccelerationstructurecurvegeometrydescriptor.md): A descriptor you configure with curve geometry for building acceleration structures.
- [MTLCurveType](mtlcurvetype.md)
- [MTLCurveBasis](mtlcurvebasis.md)
- [MTLCurveEndCaps](mtlcurveendcaps.md)
- [MTL4AccelerationStructureBoundingBoxGeometryDescriptor](mtl4accelerationstructureboundingboxgeometrydescriptor.md): Describes bounding-box geometry suitable for ray tracing.
- [MTLAccelerationStructureBoundingBoxGeometryDescriptor](mtlaccelerationstructureboundingboxgeometrydescriptor.md): A description of a list of bounding boxes to turn into an acceleration structure.
