> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor)

# MTLInstanceAccelerationStructureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an acceleration structure that derives from instances of primitive acceleration structures.

## Declaration

```swift
class MTLInstanceAccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

Metal provides acceleration structures with a two-level hierarchy. The bottom layer consists of primitive acceleration structures, which instance acceleration structures in the top level reference.

## Topics

### Specifying the instance structures

- [instanceDescriptorType](mtlinstanceaccelerationstructuredescriptor/instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [instancedAccelerationStructures](mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
- [MTLAccelerationStructureInstanceDescriptorType](mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.

### Specifying the list of instances

- [instanceCount](mtlinstanceaccelerationstructuredescriptor/instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](mtlinstanceaccelerationstructuredescriptor/instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](mtlinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](mtlinstanceaccelerationstructuredescriptor/instancedescriptorstride.md): The stride, in bytes, between instance descriptions.

### Specifying motion data

- [motionTransformCount](mtlinstanceaccelerationstructuredescriptor/motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBuffer](mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.
- [motionTransformBufferOffset](mtlinstanceaccelerationstructuredescriptor/motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.

### Instance Properties

- [instanceTransformationMatrixLayout](mtlinstanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md)
- [motionTransformStride](mtlinstanceaccelerationstructuredescriptor/motiontransformstride.md)
- [motionTransformType](mtlinstanceaccelerationstructuredescriptor/motiontransformtype.md)

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
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTLInstanceAccelerationStructureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an acceleration structure that derives from instances of primitive acceleration structures.

## Declaration

```objectivec
@interface MTLInstanceAccelerationStructureDescriptor : MTLAccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

Metal provides acceleration structures with a two-level hierarchy. The bottom layer consists of primitive acceleration structures, which instance acceleration structures in the top level reference.

## Topics

### Creating a instance geometry descriptor

- [descriptor](mtlinstanceaccelerationstructuredescriptor/descriptor.md): Creates an instance descriptor.

### Specifying the instance structures

- [instanceDescriptorType](mtlinstanceaccelerationstructuredescriptor/instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [instancedAccelerationStructures](mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
- [MTLAccelerationStructureInstanceDescriptorType](mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.

### Specifying the list of instances

- [instanceCount](mtlinstanceaccelerationstructuredescriptor/instancecount.md): The number of instances in the instance descriptor buffer.
- [instanceDescriptorBuffer](mtlinstanceaccelerationstructuredescriptor/instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.
- [instanceDescriptorBufferOffset](mtlinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset.md): The offset, in bytes, to the descripton of the first instance.
- [instanceDescriptorStride](mtlinstanceaccelerationstructuredescriptor/instancedescriptorstride.md): The stride, in bytes, between instance descriptions.

### Specifying motion data

- [motionTransformCount](mtlinstanceaccelerationstructuredescriptor/motiontransformcount.md): The number of motion transforms in the motion transform buffer.
- [motionTransformBuffer](mtlinstanceaccelerationstructuredescriptor/motiontransformbuffer.md): A buffer that contains descriptions of each motion transform in the acceleration structure.
- [motionTransformBufferOffset](mtlinstanceaccelerationstructuredescriptor/motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.

### Instance Properties

- [instanceTransformationMatrixLayout](mtlinstanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md)
- [motionTransformStride](mtlinstanceaccelerationstructuredescriptor/motiontransformstride.md)
- [motionTransformType](mtlinstanceaccelerationstructuredescriptor/motiontransformtype.md)

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
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTL4InstanceAccelerationStructureDescriptor](mtl4instanceaccelerationstructuredescriptor.md): Descriptor for an instance acceleration structure.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
