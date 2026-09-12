> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptortype/indirectmotion](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptortype/indirectmotion)

# MTLAccelerationStructureInstanceDescriptorType.indirectMotion (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

## Declaration

```swift
case indirectMotion
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md) memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorType.default](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorType.userID](userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorType.motion](motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorType.indirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.

# MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

## Declaration

```objectivec
MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion
```

<a id="discussion"></a>

## Discussion

This instance type corresponds to the [MTLIndirectAccelerationStructureMotionInstanceDescriptor](../mtlindirectaccelerationstructuremotioninstancedescriptor.md) memory layout.

## See Also

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorTypeDefault](default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorTypeUserID](userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorTypeMotion](motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirect](indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
