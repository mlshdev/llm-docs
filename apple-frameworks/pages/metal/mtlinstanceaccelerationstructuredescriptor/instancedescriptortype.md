> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptortype](https://developer.apple.com/documentation/metal/mtlinstanceaccelerationstructuredescriptor/instancedescriptortype)

# instanceDescriptorType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The format of the instance data in the descriptor buffer.

## Declaration

```swift
var instanceDescriptorType: MTLAccelerationStructureInstanceDescriptorType { get set }
```

## See Also

### Related Documentation

- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.

### Specifying the instance structures

- [instancedAccelerationStructures](instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
- [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.

# instanceDescriptorType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The format of the instance data in the descriptor buffer.

## Declaration

```objectivec
@property (nonatomic) MTLAccelerationStructureInstanceDescriptorType instanceDescriptorType;
```

## See Also

### Related Documentation

- [instanceDescriptorBuffer](instancedescriptorbuffer.md): A buffer that contains descriptions of each instance in the acceleration structure.

### Specifying the instance structures

- [instancedAccelerationStructures](instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
- [MTLAccelerationStructureInstanceDescriptorType](../mtlaccelerationstructureinstancedescriptortype.md): Options for specifying different kinds of instance types.
