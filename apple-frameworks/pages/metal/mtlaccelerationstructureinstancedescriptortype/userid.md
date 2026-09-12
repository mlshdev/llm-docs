> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptortype/userid](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptortype/userid)

# MTLAccelerationStructureInstanceDescriptorType.userID (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option specifying that the instance contains a user identifier.

## Declaration

```swift
case userID
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLAccelerationStructureUserIDInstanceDescriptor](../mtlaccelerationstructureuseridinstancedescriptor.md) structure memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorType.default](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorType.motion](motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorType.indirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorType.indirectMotion](indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

# MTLAccelerationStructureInstanceDescriptorTypeUserID (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option specifying that the instance contains a user identifier.

## Declaration

```objectivec
MTLAccelerationStructureInstanceDescriptorTypeUserID
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLAccelerationStructureUserIDInstanceDescriptor](../mtlaccelerationstructureuseridinstancedescriptor.md) structure memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorTypeDefault](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorTypeMotion](motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion](indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.
