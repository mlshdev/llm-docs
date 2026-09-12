> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsaccelerationstructure](https://developer.apple.com/documentation/metalperformanceshaders/mpsaccelerationstructure)

# MPSAccelerationStructure (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The base class for data structures that are built over geometry and used to accelerate ray tracing.

## Declaration

```swift
class MPSAccelerationStructure
```

## Topics

### Initializers

- [init(coder:device:)](mpsaccelerationstructure/init%28coder_device_%29.md): Deprecated.
- [init(coder:group:)](mpsaccelerationstructure/init%28coder_group_%29.md): Deprecated.
- [init(device:)](mpsaccelerationstructure/init%28device_%29.md): Deprecated.
- [init(group:)](mpsaccelerationstructure/init%28group_%29.md): Deprecated.

### Instance Properties

- [boundingBox](mpsaccelerationstructure/boundingbox.md): Deprecated.
- [group](mpsaccelerationstructure/group.md): Deprecated.
- [status](mpsaccelerationstructure/status.md): Deprecated.
- [usage](mpsaccelerationstructure/usage.md): Deprecated.

### Instance Methods

- [copy(with:device:)](mpsaccelerationstructure/copy%28with_device_%29.md): Deprecated.
- [copy(with:group:)](mpsaccelerationstructure/copy%28with_group_%29.md): Deprecated.
- [encode(with:)](mpsaccelerationstructure/encode%28with_%29.md): Deprecated.
- [encodeRefit(commandBuffer:)](mpsaccelerationstructure/encoderefit%28commandbuffer_%29.md): Deprecated.
- [rebuild()](mpsaccelerationstructure/rebuild%28%29.md): Deprecated.
- [rebuild(completionHandler:)](mpsaccelerationstructure/rebuild%28completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md)
- [MPSPolygonAccelerationStructure](mpspolygonaccelerationstructure.md)

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
- [MPSRayIntersector](mpsrayintersector.md): Deprecated. A kernel that performs intersection tests between rays and geometry.
- [MPSAccelerationStructureGroup](mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.

# MPSAccelerationStructure (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 12.0+ (deprecated in 17.0) · iPadOS 12.0+ (deprecated in 17.0) · Mac Catalyst 13.0+ (deprecated in 17.0) · macOS 10.14+ (deprecated in 14.0) · tvOS 12.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

The base class for data structures that are built over geometry and used to accelerate ray tracing.

## Declaration

```objectivec
@interface MPSAccelerationStructure : MPSKernel
```

## Topics

### Instance Properties

- [boundingBox](mpsaccelerationstructure/boundingbox.md): Deprecated.
- [group](mpsaccelerationstructure/group.md): Deprecated.
- [status](mpsaccelerationstructure/status.md): Deprecated.
- [usage](mpsaccelerationstructure/usage.md): Deprecated.

### Instance Methods

- [copyWithZone:device:](mpsaccelerationstructure/copy%28with_device_%29.md): Deprecated.
- [copyWithZone:group:](mpsaccelerationstructure/copy%28with_group_%29.md): Deprecated.
- [encodeWithCoder:](mpsaccelerationstructure/encode%28with_%29.md): Deprecated.
- [encodeRefitToCommandBuffer:](mpsaccelerationstructure/encoderefit%28commandbuffer_%29.md): Deprecated.
- [initWithCoder:device:](mpsaccelerationstructure/init%28coder_device_%29.md): Deprecated.
- [initWithCoder:group:](mpsaccelerationstructure/init%28coder_group_%29.md): Deprecated.
- [initWithDevice:](mpsaccelerationstructure/init%28device_%29.md): Deprecated.
- [initWithGroup:](mpsaccelerationstructure/init%28group_%29.md): Deprecated.
- [rebuild](mpsaccelerationstructure/rebuild%28%29.md): Deprecated.
- [rebuildWithCompletionHandler:](mpsaccelerationstructure/rebuild%28completionhandler_%29.md): Deprecated.

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md)
- [MPSPolygonAccelerationStructure](mpspolygonaccelerationstructure.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Ray Tracing

- [Accelerating ray tracing and motion blur using Metal](../metal/accelerating-ray-tracing-and-motion-blur-using-metal.md): Generate ray-traced images with motion blur using GPU-based parallel processing.
- [MPSRayIntersector](mpsrayintersector.md): Deprecated. A kernel that performs intersection tests between rays and geometry.
- [MPSAccelerationStructureGroup](mpsaccelerationstructuregroup.md): Deprecated. A group of acceleration structures.
- [MPSInstanceAccelerationStructure](mpsinstanceaccelerationstructure.md): Deprecated. An acceleration structure built over instances of other acceleration structures.
- [MPSTriangleAccelerationStructure](mpstriangleaccelerationstructure.md): Deprecated. An acceleration structure built over triangles.
