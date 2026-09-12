> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptortype](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptortype)

# MTLAccelerationStructureInstanceDescriptorType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Options for specifying different kinds of instance types.

## Declaration

```swift
enum MTLAccelerationStructureInstanceDescriptorType
```

## Topics

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorType.default](mtlaccelerationstructureinstancedescriptortype/default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorType.userID](mtlaccelerationstructureinstancedescriptortype/userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorType.motion](mtlaccelerationstructureinstancedescriptortype/motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorType.indirect](mtlaccelerationstructureinstancedescriptortype/indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorType.indirectMotion](mtlaccelerationstructureinstancedescriptortype/indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

### Initializers

- [init(rawValue:)](mtlaccelerationstructureinstancedescriptortype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the instance structures

- [instanceDescriptorType](mtlinstanceaccelerationstructuredescriptor/instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [instancedAccelerationStructures](mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .

# MTLAccelerationStructureInstanceDescriptorType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Options for specifying different kinds of instance types.

## Declaration

```objectivec
enum MTLAccelerationStructureInstanceDescriptorType : NSUInteger;
```

## Topics

### Specifying the instance descriptor type

- [MTLAccelerationStructureInstanceDescriptorTypeDefault](mtlaccelerationstructureinstancedescriptortype/default.md): An option specifying that the instance uses the default characteristics.
- [MTLAccelerationStructureInstanceDescriptorTypeUserID](mtlaccelerationstructureinstancedescriptortype/userid.md): An option specifying that the instance contains a user identifier.
- [MTLAccelerationStructureInstanceDescriptorTypeMotion](mtlaccelerationstructureinstancedescriptortype/motion.md): An option specifying that the instance contains motion data.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirect](mtlaccelerationstructureinstancedescriptortype/indirect.md): An option that enables an instance descriptor memory layout the GPU can populate.
- [MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion](mtlaccelerationstructureinstancedescriptortype/indirectmotion.md): An option specifying that the instance contains motion data, and enables using an instance descriptor memory layout that the GPU can populate.

## See Also

### Specifying the instance structures

- [instanceDescriptorType](mtlinstanceaccelerationstructuredescriptor/instancedescriptortype.md): The format of the instance data in the descriptor buffer.
- [instancedAccelerationStructures](mtlinstanceaccelerationstructuredescriptor/instancedaccelerationstructures.md): The bottom-level acceleration structures that instances use in the instance acceleration structure .
