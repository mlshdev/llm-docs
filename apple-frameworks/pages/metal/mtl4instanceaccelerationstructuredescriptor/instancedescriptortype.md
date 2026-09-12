> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancedescriptortype](https://developer.apple.com/documentation/metal/mtl4instanceaccelerationstructuredescriptor/instancedescriptortype)

# instanceDescriptorType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The type of instance descriptor that the instance descriptor buffer references.

## Declaration

```swift
var instanceDescriptorType: MTLAccelerationStructureInstanceDescriptorType { get set }
```

<a id="discussion"></a>

## Discussion

This value determines the layout Metal expects for the structs the instance descriptor buffer contains:

- [MTLAccelerationStructureInstanceDescriptorType.indirect](../mtlaccelerationstructureinstancedescriptortype/indirect.md): Use the [MTLIndirectAccelerationStructureInstanceDescriptor](../mtlindirectaccelerationstructureinstancedescriptor.md) struct layout.
- [MTLAccelerationStructureInstanceDescriptorType.indirectMotion](../mtlaccelerationstructureinstancedescriptortype/indirectmotion.md): Use the [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md) struct layout.

The default value is [MTLAccelerationStructureInstanceDescriptorType.indirect](../mtlaccelerationstructureinstancedescriptortype/indirect.md).

# instanceDescriptorType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The type of instance descriptor that the instance descriptor buffer references.

## Declaration

```objectivec
@property (nonatomic) MTLAccelerationStructureInstanceDescriptorType instanceDescriptorType;
```

<a id="discussion"></a>

## Discussion

This value determines the layout Metal expects for the structs the instance descriptor buffer contains:

- [MTLAccelerationStructureInstanceDescriptorTypeIndirect](../mtlaccelerationstructureinstancedescriptortype/indirect.md): Use the [MTLIndirectAccelerationStructureInstanceDescriptor](../mtlindirectaccelerationstructureinstancedescriptor.md) struct layout.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion](../mtlaccelerationstructureinstancedescriptortype/indirectmotion.md): Use the [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md) struct layout.

The default value is [MTLAccelerationStructureInstanceDescriptorTypeIndirect](../mtlaccelerationstructureinstancedescriptortype/indirect.md).
