> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4instanceaccelerationstructuredescriptor](https://developer.apple.com/documentation/metal/mtl4instanceaccelerationstructuredescriptor)

# MTL4InstanceAccelerationStructureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Descriptor for an instance acceleration structure.

## Declaration

```swift
class MTL4InstanceAccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

An instance acceleration structure references other acceleration structures, and provides the ability to “instantiate” them multiple times, each one with potentially a different transformation matrix.

You specify the properties of the instances in the acceleration structure this descriptor builds by providing a buffer of `structs` via its [instanceDescriptorBuffer](mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer.md) property.

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers and acceleration structures this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [instanceCount](mtl4instanceaccelerationstructuredescriptor/instancecount.md): Controls the number of instance descriptors in the instance descriptor buffer references.
- [instanceDescriptorBuffer](mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer.md): Assigns a reference to a buffer containing instance descriptors for acceleration structures to reference.
- [instanceDescriptorStride](mtl4instanceaccelerationstructuredescriptor/instancedescriptorstride.md): Sets the stride, in bytes, between instance descriptors the instance descriptor buffer references.
- [instanceDescriptorType](mtl4instanceaccelerationstructuredescriptor/instancedescriptortype.md): The type of instance descriptor that the instance descriptor buffer references.
- [instanceTransformationMatrixLayout](mtl4instanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md): Specifies the layout for the transformation matrices in the instance descriptor buffer and the motion transformation matrix buffer.
- [motionTransformBuffer](mtl4instanceaccelerationstructuredescriptor/motiontransformbuffer.md): A buffer containing transformation information for instance motion keyframes, formatted according to the motion transform type.
- [motionTransformCount](mtl4instanceaccelerationstructuredescriptor/motiontransformcount.md): Controls the total number of motion transforms in the motion transform buffer.
- [motionTransformStride](mtl4instanceaccelerationstructuredescriptor/motiontransformstride.md): Specify the stride for motion transform.
- [motionTransformType](mtl4instanceaccelerationstructuredescriptor/motiontransformtype.md): Controls the type of motion transforms, either as a matrix or individual components.

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
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)

# MTL4InstanceAccelerationStructureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Descriptor for an instance acceleration structure.

## Declaration

```objectivec
@interface MTL4InstanceAccelerationStructureDescriptor : MTL4AccelerationStructureDescriptor
```

<a id="overview"></a>

## Overview

An instance acceleration structure references other acceleration structures, and provides the ability to “instantiate” them multiple times, each one with potentially a different transformation matrix.

You specify the properties of the instances in the acceleration structure this descriptor builds by providing a buffer of `structs` via its [instanceDescriptorBuffer](mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer.md) property.

Use a [MTLResidencySet](mtlresidencyset.md) to mark residency of all buffers and acceleration structures this descriptor references when you build this acceleration structure.

## Topics

### Instance Properties

- [instanceCount](mtl4instanceaccelerationstructuredescriptor/instancecount.md): Controls the number of instance descriptors in the instance descriptor buffer references.
- [instanceDescriptorBuffer](mtl4instanceaccelerationstructuredescriptor/instancedescriptorbuffer.md): Assigns a reference to a buffer containing instance descriptors for acceleration structures to reference.
- [instanceDescriptorStride](mtl4instanceaccelerationstructuredescriptor/instancedescriptorstride.md): Sets the stride, in bytes, between instance descriptors the instance descriptor buffer references.
- [instanceDescriptorType](mtl4instanceaccelerationstructuredescriptor/instancedescriptortype.md): The type of instance descriptor that the instance descriptor buffer references.
- [instanceTransformationMatrixLayout](mtl4instanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md): Specifies the layout for the transformation matrices in the instance descriptor buffer and the motion transformation matrix buffer.
- [motionTransformBuffer](mtl4instanceaccelerationstructuredescriptor/motiontransformbuffer.md): A buffer containing transformation information for instance motion keyframes, formatted according to the motion transform type.
- [motionTransformCount](mtl4instanceaccelerationstructuredescriptor/motiontransformcount.md): Controls the total number of motion transforms in the motion transform buffer.
- [motionTransformStride](mtl4instanceaccelerationstructuredescriptor/motiontransformstride.md): Specify the stride for motion transform.
- [motionTransformType](mtl4instanceaccelerationstructuredescriptor/motiontransformtype.md): Controls the type of motion transforms, either as a matrix or individual components.

## Relationships

### Inherits From

- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md)

## See Also

### Acceleration structures

- [Improving ray-tracing data access using per-primitive data](improving-ray-tracing-data-access-using-per-primitive-data.md): Simplify data access and improve GPU utilization by storing custom primitive data directly in the acceleration structure.
- [MTLAccelerationStructure](mtlaccelerationstructure.md): A collection of model data for GPU-accelerated intersection of rays with the model.
- [MTL4AccelerationStructureDescriptor](mtl4accelerationstructuredescriptor.md): Base class for Metal 4 acceleration structure descriptors.
- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md): A base class for classes that define the configuration for a new acceleration structure.
- [MTL4PrimitiveAccelerationStructureDescriptor](mtl4primitiveaccelerationstructuredescriptor.md): Descriptor for a primitive acceleration structure that directly references geometric shapes, such as triangles and bounding boxes.
- [MTLPrimitiveAccelerationStructureDescriptor](mtlprimitiveaccelerationstructuredescriptor.md): A description of an acceleration structure that contains geometry primitives.
- [MTLInstanceAccelerationStructureDescriptor](mtlinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that derives from instances of primitive acceleration structures.
- [MTLAccelerationStructureCommandEncoder](mtlaccelerationstructurecommandencoder.md): Encodes commands that build and refit acceleration structures for a single pass.
- [MTLAccelerationStructureUsage](mtlaccelerationstructureusage.md): Options that affect how Metal builds an acceleration structure and the behavior of that acceleration structure.
- [MTLAccelerationStructureRefitOptions](mtlaccelerationstructurerefitoptions.md)
