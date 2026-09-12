> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptortype/motion](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptortype/motion)

# MTLAccelerationStructureInstanceDescriptorType.motion (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option specifying that the instance contains motion data.

## Declaration

```swift
case motion
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLAccelerationStructureMotionInstanceDescriptor](../mtlaccelerationstructuremotioninstancedescriptor.md) structure memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorType.default](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorType.userID](userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorType.indirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorType.indirectMotion](indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

# MTLAccelerationStructureInstanceDescriptorTypeMotion (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option specifying that the instance contains motion data.

## Declaration

```objectivec
MTLAccelerationStructureInstanceDescriptorTypeMotion
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLAccelerationStructureMotionInstanceDescriptor](../mtlaccelerationstructuremotioninstancedescriptor.md) structure memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorTypeDefault](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorTypeUserID](userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion](indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.
