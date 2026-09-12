> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlprimitiveaccelerationstructuredescriptor](https://developer.apple.com/documentation/metal/mtlprimitiveaccelerationstructuredescriptor)

# MTLPrimitiveAccelerationStructureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an acceleration structure that contains geometry primitives.

## Declaration

```swift
class MTLPrimitiveAccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

Metal provides acceleration structures with a two-level hierarchy. The bottom layer consists of primitive acceleration structures, which instance acceleration structures in the top level reference.

## Topics

### Specifying geometry

- [geometryDescriptors](mtlprimitiveaccelerationstructuredescriptor/geometrydescriptors.md): An array that contains the individual pieces of geometry that compose the acceleration structure.

### Specifying motion behavior

- [motionKeyframeCount](mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](mtlprimitiveaccelerationstructuredescriptor/motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](mtlprimitiveaccelerationstructuredescriptor/motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

## Relationships

### Inherits From

- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md)

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
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTLPrimitiveAccelerationStructureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an acceleration structure that contains geometry primitives.

## Declaration

```objectivec
@interface MTLPrimitiveAccelerationStructureDescriptor : MTLAccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

Metal provides acceleration structures with a two-level hierarchy. The bottom layer consists of primitive acceleration structures, which instance acceleration structures in the top level reference.

## Topics

### Creating a primitive geometry descriptor

- [descriptor](mtlprimitiveaccelerationstructuredescriptor/descriptor.md): Creates a new primitive descriptor.

### Specifying geometry

- [geometryDescriptors](mtlprimitiveaccelerationstructuredescriptor/geometrydescriptors.md): An array that contains the individual pieces of geometry that compose the acceleration structure.

### Specifying motion behavior

- [motionKeyframeCount](mtlprimitiveaccelerationstructuredescriptor/motionkeyframecount.md): The number of keyframes in the geometry data.
- [motionStartTime](mtlprimitiveaccelerationstructuredescriptor/motionstarttime.md): The start time for the range of motion that the keyframe data describes.
- [motionEndTime](mtlprimitiveaccelerationstructuredescriptor/motionendtime.md): The end time for the range of motion that the keyframe data describes.
- [motionStartBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionstartbordermode.md): The mode to use when handling timestamps before the start time.
- [motionEndBorderMode](mtlprimitiveaccelerationstructuredescriptor/motionendbordermode.md): The mode to use when handling timestamps after the end time.
- [MTLMotionBorderMode](mtlmotionbordermode.md): Options for specifying how the acceleration structure handles timestamps that are outside the specified range.

## Relationships

### Inherits From

- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
