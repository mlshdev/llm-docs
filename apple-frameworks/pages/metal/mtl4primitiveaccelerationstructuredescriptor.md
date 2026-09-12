> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4primitiveaccelerationstructuredescriptor](https://developer.apple.com/documentation/metal/mtl4primitiveaccelerationstructuredescriptor)

# MTL4PrimitiveAccelerationStructureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.

## Declaration

```swift
class MTL4PrimitiveAccelerationStructureDescriptor
```

## Topics

### Instance Properties

- [geometryDescriptors](mtl4primitiveaccelerationstructuredescriptor/geometrydescriptors.md): Associates the array of geometry descriptors that comprise this primitive acceleration structure.
- [motionEndBorderMode](mtl4primitiveaccelerationstructuredescriptor/motionendbordermode.md): Configures the motion border mode.
- [motionEndTime](mtl4primitiveaccelerationstructuredescriptor/motionendtime.md): Configures the motion end time for this geometry.
- [motionKeyframeCount](mtl4primitiveaccelerationstructuredescriptor/motionkeyframecount.md): Sets the motion keyframe count.
- [motionStartBorderMode](mtl4primitiveaccelerationstructuredescriptor/motionstartbordermode.md): Configures the behavior when the ray-tracing system samples the acceleration structure before the motion start time.
- [motionStartTime](mtl4primitiveaccelerationstructuredescriptor/motionstarttime.md): Configures the motion start time for this geometry.

## Relationships

### Inherits From

- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTL4PrimitiveAccelerationStructureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.

## Declaration

```objectivec
@interface MTL4PrimitiveAccelerationStructureDescriptor : MTL4AccelerationStructureDescriptor
```

## Topics

### Instance Properties

- [geometryDescriptors](mtl4primitiveaccelerationstructuredescriptor/geometrydescriptors.md): Associates the array of geometry descriptors that comprise this primitive acceleration structure.
- [motionEndBorderMode](mtl4primitiveaccelerationstructuredescriptor/motionendbordermode.md): Configures the motion border mode.
- [motionEndTime](mtl4primitiveaccelerationstructuredescriptor/motionendtime.md): Configures the motion end time for this geometry.
- [motionKeyframeCount](mtl4primitiveaccelerationstructuredescriptor/motionkeyframecount.md): Sets the motion keyframe count.
- [motionStartBorderMode](mtl4primitiveaccelerationstructuredescriptor/motionstartbordermode.md): Configures the behavior when the ray-tracing system samples the acceleration structure before the motion start time.
- [motionStartTime](mtl4primitiveaccelerationstructuredescriptor/motionstarttime.md): Configures the motion start time for this geometry.

## Relationships

### Inherits From

- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
