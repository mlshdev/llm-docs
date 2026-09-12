> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor)

# MTLAccelerationStructureMotionInstanceDescriptor (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.

## Declaration

```swift
struct MTLAccelerationStructureMotionInstanceDescriptor
```

## Topics

### Creating an instance descriptor

- [init()](mtlaccelerationstructuremotioninstancedescriptor/init%28%29.md): Creates an acceleration-structure motion instance with default property values.
- [init(options:mask:intersectionFunctionTableOffset:accelerationStructureIndex:userID:motionTransformsStartIndex:motionTransformsCount:motionStartBorderMode:motionEndBorderMode:motionStartTime:motionEndTime:)](mtlaccelerationstructuremotioninstancedescriptor/init%28options_mask_intersectionfunctiontableoffset_accelerationstructureindex_userid_motiontransformsstartindex_motiontransformscount_motionstartbordermode_motionendbordermode_motio~efcf4a6f.md): Creates an acceleration-structure motion instance with the property values you provide.

### Specifying the instance

- [accelerationStructureIndex](mtlaccelerationstructuremotioninstancedescriptor/accelerationstructureindex.md): The index of an acceleration structure which applies to the next acceleration-structure motion instance you create with the descriptor.

### Specifying motion data

- [motionStartTime](mtlaccelerationstructuremotioninstancedescriptor/motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](mtlaccelerationstructuremotioninstancedescriptor/motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](mtlaccelerationstructuremotioninstancedescriptor/motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](mtlaccelerationstructuremotioninstancedescriptor/motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsStartIndex](mtlaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [motionTransformsCount](mtlaccelerationstructuremotioninstancedescriptor/motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](mtlaccelerationstructuremotioninstancedescriptor/intersectionfunctiontableoffset.md): An offset into the intersection-function table for ray tracing, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [options](mtlaccelerationstructuremotioninstancedescriptor/options.md): An option set which applies to the next acceleration structure motion-instance you create with the descriptor.
- [mask](mtlaccelerationstructuremotioninstancedescriptor/mask.md): A mask for testing ray-tracing rays with a scene’s geometry, which applies to the next acceleration-structure motion instance you create with the descriptor.

### Specifying the user identifier

- [userID](mtlaccelerationstructuremotioninstancedescriptor/userid.md): An unique identifier, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.

# MTLAccelerationStructureMotionInstanceDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.

## Declaration

```objectivec
typedef struct { ... } MTLAccelerationStructureMotionInstanceDescriptor;
```

## Topics

### Specifying the instance

- [accelerationStructureIndex](mtlaccelerationstructuremotioninstancedescriptor/accelerationstructureindex.md): The index of an acceleration structure which applies to the next acceleration-structure motion instance you create with the descriptor.

### Specifying motion data

- [motionStartTime](mtlaccelerationstructuremotioninstancedescriptor/motionstarttime.md): A starting time for the range of motion that the key-frame data represents.
- [motionEndTime](mtlaccelerationstructuremotioninstancedescriptor/motionendtime.md): An ending time for the range of motion that the key-frame data represents.
- [motionStartBorderMode](mtlaccelerationstructuremotioninstancedescriptor/motionstartbordermode.md): A behavior that configures how a motion instance handles timestamps before a starting time.
- [motionEndBorderMode](mtlaccelerationstructuremotioninstancedescriptor/motionendbordermode.md): A behavior that configures how a motion instance handles timestamps after an ending time.
- [motionTransformsStartIndex](mtlaccelerationstructuremotioninstancedescriptor/motiontransformsstartindex.md): The index of motion data that represents the first key-frame motion data, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [motionTransformsCount](mtlaccelerationstructuremotioninstancedescriptor/motiontransformscount.md): The number of motion data key-frames, which applies to the next acceleration-structure motion instance you create with the descriptor.

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](mtlaccelerationstructuremotioninstancedescriptor/intersectionfunctiontableoffset.md): An offset into the intersection-function table for ray tracing, which applies to the next acceleration-structure motion instance you create with the descriptor.
- [options](mtlaccelerationstructuremotioninstancedescriptor/options.md): An option set which applies to the next acceleration structure motion-instance you create with the descriptor.
- [mask](mtlaccelerationstructuremotioninstancedescriptor/mask.md): A mask for testing ray-tracing rays with a scene’s geometry, which applies to the next acceleration-structure motion instance you create with the descriptor.

### Specifying the user identifier

- [userID](mtlaccelerationstructuremotioninstancedescriptor/userid.md): An unique identifier, which applies to the next acceleration-structure motion instance you create with the descriptor.

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.
