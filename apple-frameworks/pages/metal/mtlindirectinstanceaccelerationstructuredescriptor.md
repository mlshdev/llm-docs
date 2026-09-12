> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectinstanceaccelerationstructuredescriptor](https://developer.apple.com/documentation/metal/mtlindirectinstanceaccelerationstructuredescriptor)

# MTLIndirectInstanceAccelerationStructureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.

## Declaration

```swift
class MTLIndirectInstanceAccelerationStructureDescriptor
```

## Topics

### Instance Properties

- [instanceCountBuffer](mtlindirectinstanceaccelerationstructuredescriptor/instancecountbuffer.md)
- [instanceCountBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/instancecountbufferoffset.md)
- [instanceDescriptorBuffer](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorbuffer.md)
- [instanceDescriptorBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset.md)
- [instanceDescriptorStride](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorstride.md)
- [instanceDescriptorType](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptortype.md)
- [instanceTransformationMatrixLayout](mtlindirectinstanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md)
- [maxInstanceCount](mtlindirectinstanceaccelerationstructuredescriptor/maxinstancecount.md)
- [maxMotionTransformCount](mtlindirectinstanceaccelerationstructuredescriptor/maxmotiontransformcount.md)
- [motionTransformBuffer](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformbuffer.md)
- [motionTransformBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.
- [motionTransformCountBuffer](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformcountbuffer.md)
- [motionTransformCountBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformcountbufferoffset.md)
- [motionTransformStride](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformstride.md)
- [motionTransformType](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformtype.md)

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

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.

# MTLIndirectInstanceAccelerationStructureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.

## Declaration

```objectivec
@interface MTLIndirectInstanceAccelerationStructureDescriptor : MTLAccelerationStructureDescriptor
```

## Topics

### Instance Properties

- [instanceCountBuffer](mtlindirectinstanceaccelerationstructuredescriptor/instancecountbuffer.md)
- [instanceCountBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/instancecountbufferoffset.md)
- [instanceDescriptorBuffer](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorbuffer.md)
- [instanceDescriptorBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorbufferoffset.md)
- [instanceDescriptorStride](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptorstride.md)
- [instanceDescriptorType](mtlindirectinstanceaccelerationstructuredescriptor/instancedescriptortype.md)
- [instanceTransformationMatrixLayout](mtlindirectinstanceaccelerationstructuredescriptor/instancetransformationmatrixlayout.md)
- [maxInstanceCount](mtlindirectinstanceaccelerationstructuredescriptor/maxinstancecount.md)
- [maxMotionTransformCount](mtlindirectinstanceaccelerationstructuredescriptor/maxmotiontransformcount.md)
- [motionTransformBuffer](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformbuffer.md)
- [motionTransformBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformbufferoffset.md): The offset, in bytes, to the descripton of the first motion transform.
- [motionTransformCountBuffer](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformcountbuffer.md)
- [motionTransformCountBufferOffset](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformcountbufferoffset.md)
- [motionTransformStride](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformstride.md)
- [motionTransformType](mtlindirectinstanceaccelerationstructuredescriptor/motiontransformtype.md)

### Type Methods

- [descriptor](mtlindirectinstanceaccelerationstructuredescriptor/descriptor.md)

## Relationships

### Inherits From

- [MTLAccelerationStructureDescriptor](mtlaccelerationstructuredescriptor.md)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.
