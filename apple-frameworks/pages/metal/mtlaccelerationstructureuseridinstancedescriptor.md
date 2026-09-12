> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureuseridinstancedescriptor](https://developer.apple.com/documentation/metal/mtlaccelerationstructureuseridinstancedescriptor)

# MTLAccelerationStructureUserIDInstanceDescriptor (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.

## Declaration

```swift
struct MTLAccelerationStructureUserIDInstanceDescriptor
```

## Topics

### Creating an instance descriptor

- [init()](mtlaccelerationstructureuseridinstancedescriptor/init%28%29.md): Creates a default acceleration structure instance.
- [init(transformationMatrix:options:mask:intersectionFunctionTableOffset:accelerationStructureIndex:userID:)](mtlaccelerationstructureuseridinstancedescriptor/init%28transformationmatrix_options_mask_intersectionfunctiontableoffset_accelerationstructureindex_userid_%29.md): Creates a new acceleration structure instance.

### Specifying the instance

- [accelerationStructureIndex](mtlaccelerationstructureuseridinstancedescriptor/accelerationstructureindex.md): The index of the acceleration structure to use for the instance.

### Specifying the instance transform

- [transformationMatrix](mtlaccelerationstructureuseridinstancedescriptor/transformationmatrix.md): The transform for placing and orienting the instance in the scene.

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](mtlaccelerationstructureuseridinstancedescriptor/intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal calls when testing a ray against the instance.
- [options](mtlaccelerationstructureuseridinstancedescriptor/options.md): The options for the instance.
- [mask](mtlaccelerationstructureuseridinstancedescriptor/mask.md): A mask to use for the instance when testing a ray against the geometry.

### Specifying the user identifier

- [userID](mtlaccelerationstructureuseridinstancedescriptor/userid.md): The user identifier for the instance.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.

# MTLAccelerationStructureUserIDInstanceDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier for the instance.

## Declaration

```objectivec
typedef struct { ... } MTLAccelerationStructureUserIDInstanceDescriptor;
```

## Topics

### Specifying the instance

- [accelerationStructureIndex](mtlaccelerationstructureuseridinstancedescriptor/accelerationstructureindex.md): The index of the acceleration structure to use for the instance.

### Specifying the instance transform

- [transformationMatrix](mtlaccelerationstructureuseridinstancedescriptor/transformationmatrix.md): The transform for placing and orienting the instance in the scene.

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](mtlaccelerationstructureuseridinstancedescriptor/intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal calls when testing a ray against the instance.
- [options](mtlaccelerationstructureuseridinstancedescriptor/options.md): The options for the instance.
- [mask](mtlaccelerationstructureuseridinstancedescriptor/mask.md): A mask to use for the instance when testing a ray against the geometry.

### Specifying the user identifier

- [userID](mtlaccelerationstructureuseridinstancedescriptor/userid.md): The user identifier for the instance.

## See Also

### Instance descriptors

- [MTLAccelerationStructureInstanceDescriptor](mtlaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure.
- [MTLAccelerationStructureMotionInstanceDescriptor](mtlaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure, with the instance including a user identifier and motion data for the instance.
- [MTLAccelerationStructureInstanceOptions](mtlaccelerationstructureinstanceoptions.md): Options for adjusting the behavior of an instanced acceleration structure.
- [MTL4IndirectInstanceAccelerationStructureDescriptor](mtl4indirectinstanceaccelerationstructuredescriptor.md): Descriptor for an “indirect” instance acceleration structure that allows providing the instance count and motion transform count indirectly, through buffer references.
- [MTLIndirectInstanceAccelerationStructureDescriptor](mtlindirectinstanceaccelerationstructuredescriptor.md): A description of an acceleration structure that Metal derives from instances of primitive acceleration structures that the GPU can populate.
- [MTLIndirectAccelerationStructureInstanceDescriptor](mtlindirectaccelerationstructureinstancedescriptor.md): A description of an instance in an instanced geometry acceleration structure that the GPU can populate.
- [MTLIndirectAccelerationStructureMotionInstanceDescriptor](mtlindirectaccelerationstructuremotioninstancedescriptor.md): A description of an instance in an acceleration structure that the GPU can populate, with motion data for the instance.
