> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectaccelerationstructureinstancedescriptor](https://developer.apple.com/documentation/metal/mtlindirectaccelerationstructureinstancedescriptor)

# MTLIndirectAccelerationStructureInstanceDescriptor (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A description of an instance in an instanced geometry acceleration structure that the GPU can populate.

## Declaration

```swift
struct MTLIndirectAccelerationStructureInstanceDescriptor
```

<a id="overview"></a>

## Overview

This memory layout corresponds to the [MTLAccelerationStructureInstanceDescriptorType.indirect](mtlaccelerationstructureinstancedescriptortype/indirect.md) instance type.

## Topics

### Initializers

- [init()](mtlindirectaccelerationstructureinstancedescriptor/init%28%29.md)
- [init(transformationMatrix:options:mask:intersectionFunctionTableOffset:userID:accelerationStructureID:)](mtlindirectaccelerationstructureinstancedescriptor/init%28transformationmatrix_options_mask_intersectionfunctiontableoffset_userid_accelerationstructureid_%29.md)

### Instance Properties

- [accelerationStructureID](mtlindirectaccelerationstructureinstancedescriptor/accelerationstructureid.md)
- [intersectionFunctionTableOffset](mtlindirectaccelerationstructureinstancedescriptor/intersectionfunctiontableoffset.md)
- [mask](mtlindirectaccelerationstructureinstancedescriptor/mask.md)
- [options](mtlindirectaccelerationstructureinstancedescriptor/options.md)
- [transformationMatrix](mtlindirectaccelerationstructureinstancedescriptor/transformationmatrix.md)
- [userID](mtlindirectaccelerationstructureinstancedescriptor/userid.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.

# MTLIndirectAccelerationStructureInstanceDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of an instance in an instanced geometry acceleration structure that the GPU can populate.

## Declaration

```objectivec
typedef struct { ... } MTLIndirectAccelerationStructureInstanceDescriptor;
```

<a id="overview"></a>

## Overview

This memory layout corresponds to the [MTLAccelerationStructureInstanceDescriptorTypeIndirect](mtlaccelerationstructureinstancedescriptortype/indirect.md) instance type.

## Topics

### Instance Properties

- [accelerationStructureID](mtlindirectaccelerationstructureinstancedescriptor/accelerationstructureid.md)
- [intersectionFunctionTableOffset](mtlindirectaccelerationstructureinstancedescriptor/intersectionfunctiontableoffset.md)
- [mask](mtlindirectaccelerationstructureinstancedescriptor/mask.md)
- [options](mtlindirectaccelerationstructureinstancedescriptor/options.md)
- [transformationMatrix](mtlindirectaccelerationstructureinstancedescriptor/transformationmatrix.md)
- [userID](mtlindirectaccelerationstructureinstancedescriptor/userid.md)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureUserIDInstanceDescriptor](mtlaccelerationstructureuseridinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.
