> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrayintersector](https://developer.apple.com/documentation/metalperformanceshaders/mpsrayintersector)

# MPSRayIntersector (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A kernel that performs intersection tests between rays and geometry.

## Declaration

```swift
class MPSRayIntersector
```

## Topics

### Initializers

- [init(coder:device:)](mpsrayintersector/init%28coder_device_%29.md): Deprecated.
- [init(device:)](mpsrayintersector/init%28device_%29.md): Deprecated.

### Instance Properties

- [boundingBoxIntersectionTestType](mpsrayintersector/boundingboxintersectiontesttype.md): Deprecated.
- [cullMode](mpsrayintersector/cullmode.md): Deprecated.
- [frontFacingWinding](mpsrayintersector/frontfacingwinding.md): Deprecated.
- [intersectionDataType](mpsrayintersector/intersectiondatatype.md): Deprecated.
- [intersectionStride](mpsrayintersector/intersectionstride.md): Deprecated.
- [rayDataType](mpsrayintersector/raydatatype.md): Deprecated.
- [rayIndexDataType](mpsrayintersector/rayindexdatatype.md): Deprecated.
- [rayMask](mpsrayintersector/raymask.md): Deprecated.
- [rayMaskOperator](mpsrayintersector/raymaskoperator.md): Deprecated.
- [rayMaskOptions](mpsrayintersector/raymaskoptions.md): Deprecated.
- [rayStride](mpsrayintersector/raystride.md): Deprecated.
- [triangleIntersectionTestType](mpsrayintersector/triangleintersectiontesttype.md): Deprecated.

### Instance Methods

- [copy(with:device:)](mpsrayintersector/copy%28with_device_%29.md): Deprecated.
- [encode(with:)](mpsrayintersector/encode%28with_%29.md): Deprecated.
- [encodeIntersection(commandBuffer:intersectionType:rayBuffer:rayBufferOffset:intersectionBuffer:intersectionBufferOffset:rayCount:accelerationStructure:)](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_intersectionbuffer_intersectionbufferoffset_raycount_accelerationstructure_%29.md): Deprecated.
- [encodeIntersection(commandBuffer:intersectionType:rayBuffer:rayBufferOffset:intersectionBuffer:intersectionBufferOffset:rayCountBuffer:rayCountBufferOffset:accelerationStructure:)](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_intersectionbuffer_intersectionbufferoffset_raycountbuffer_raycountbufferoffset_accelerationstructure_%29.md): Deprecated.
- [encodeIntersection(commandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCount:accelerationStructure:)](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_rayindexbuffer_rayindexbufferoffset_intersectionbuffer_intersectionbufferoffset_rayindexcount_accelerati~46b65da8.md): Deprecated.
- [encodeIntersection(commandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCountBuffer:rayIndexCountBufferOffset:accelerationStructure:)](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_rayindexbuffer_rayindexbufferoffset_intersectionbuffer_intersectionbufferoffset_rayindexcountbuffer_rayi~6888d682.md): Deprecated.
- [encodeIntersection(commandBuffer:intersectionType:rayTexture:intersectionTexture:accelerationStructure:)](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raytexture_intersectiontexture_accelerationstructure_%29.md): Deprecated.
- [recommendedMinimumRayBatchSize(rayCount:)](mpsrayintersector/recommendedminimumraybatchsize%28raycount_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Ray Tracing

- [Accelerating ray tracing and motion blur using Metal](../metal/accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [MPSAccelerationStructureGroup](mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.
- [MPSAccelerationStructure](mpsaccelerationstructure.md): Deprecated. The base class for data structures that are built over geometry and used to accelerate ray tracing.

# MPSRayIntersector (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

A kernel that performs intersection tests between rays and geometry.

## Declaration

```objectivec
@interface MPSRayIntersector : MPSKernel
```

## Topics

### Instance Properties

- [boundingBoxIntersectionTestType](mpsrayintersector/boundingboxintersectiontesttype.md): Deprecated.
- [cullMode](mpsrayintersector/cullmode.md): Deprecated.
- [frontFacingWinding](mpsrayintersector/frontfacingwinding.md): Deprecated.
- [intersectionDataType](mpsrayintersector/intersectiondatatype.md): Deprecated.
- [intersectionStride](mpsrayintersector/intersectionstride.md): Deprecated.
- [rayDataType](mpsrayintersector/raydatatype.md): Deprecated.
- [rayIndexDataType](mpsrayintersector/rayindexdatatype.md): Deprecated.
- [rayMask](mpsrayintersector/raymask.md): Deprecated.
- [rayMaskOperator](mpsrayintersector/raymaskoperator.md): Deprecated.
- [rayMaskOptions](mpsrayintersector/raymaskoptions.md): Deprecated.
- [rayStride](mpsrayintersector/raystride.md): Deprecated.
- [triangleIntersectionTestType](mpsrayintersector/triangleintersectiontesttype.md): Deprecated.

### Instance Methods

- [copyWithZone:device:](mpsrayintersector/copy%28with_device_%29.md): Deprecated.
- [encodeWithCoder:](mpsrayintersector/encode%28with_%29.md): Deprecated.
- [encodeIntersectionToCommandBuffer:intersectionType:rayBuffer:rayBufferOffset:intersectionBuffer:intersectionBufferOffset:rayCount:accelerationStructure:](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_intersectionbuffer_intersectionbufferoffset_raycount_accelerationstructure_%29.md): Deprecated.
- [encodeIntersectionToCommandBuffer:intersectionType:rayBuffer:rayBufferOffset:intersectionBuffer:intersectionBufferOffset:rayCountBuffer:rayCountBufferOffset:accelerationStructure:](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_intersectionbuffer_intersectionbufferoffset_raycountbuffer_raycountbufferoffset_accelerationstructure_%29.md): Deprecated.
- [encodeIntersectionToCommandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCount:accelerationStructure:](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_rayindexbuffer_rayindexbufferoffset_intersectionbuffer_intersectionbufferoffset_rayindexcount_accelerati~46b65da8.md): Deprecated.
- [encodeIntersectionToCommandBuffer:intersectionType:rayBuffer:rayBufferOffset:rayIndexBuffer:rayIndexBufferOffset:intersectionBuffer:intersectionBufferOffset:rayIndexCountBuffer:rayIndexCountBufferOffset:accelerationStructure:](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raybuffer_raybufferoffset_rayindexbuffer_rayindexbufferoffset_intersectionbuffer_intersectionbufferoffset_rayindexcountbuffer_rayi~6888d682.md): Deprecated.
- [encodeIntersectionToCommandBuffer:intersectionType:rayTexture:intersectionTexture:accelerationStructure:](mpsrayintersector/encodeintersection%28commandbuffer_intersectiontype_raytexture_intersectiontexture_accelerationstructure_%29.md): Deprecated.
- [initWithCoder:device:](mpsrayintersector/init%28coder_device_%29.md): Deprecated.
- [initWithDevice:](mpsrayintersector/init%28device_%29.md): Deprecated.
- [recommendedMinimumRayBatchSizeForRayCount:](mpsrayintersector/recommendedminimumraybatchsize%28raycount_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Ray Tracing

- [Accelerating ray tracing and motion blur using Metal](../metal/accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [MPSAccelerationStructureGroup](mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.
- [MPSAccelerationStructure](mpsaccelerationstructure.md): Deprecated. The base class for data structures that are built over geometry and used to accelerate ray tracing.
