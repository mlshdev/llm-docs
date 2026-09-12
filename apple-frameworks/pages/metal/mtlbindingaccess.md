> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbindingaccess](https://developer.apple.com/documentation/metal/mtlbindingaccess)

# MTLBindingAccess (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
enum MTLBindingAccess
```

## Topics

### Enumeration Cases

- [MTLBindingAccess.readOnly](mtlbindingaccess/readonly.md)
- [MTLBindingAccess.readWrite](mtlbindingaccess/readwrite.md)
- [MTLBindingAccess.writeOnly](mtlbindingaccess/writeonly.md)

### Initializers

- [init(rawValue:)](mtlbindingaccess/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Introspection data

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)

# MTLBindingAccess (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum MTLBindingAccess : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTLArgumentAccessReadOnly](mtlbindingaccess/mtlargumentaccessreadonly.md): Deprecated. The function can only read its argument data.
- [MTLArgumentAccessReadWrite](mtlbindingaccess/mtlargumentaccessreadwrite.md): Deprecated. The function can either read or write its argument data.
- [MTLArgumentAccessWriteOnly](mtlbindingaccess/mtlargumentaccesswriteonly.md): Deprecated. The function can only write its argument data.
- [MTLBindingAccessReadOnly](mtlbindingaccess/readonly.md)
- [MTLBindingAccessReadWrite](mtlbindingaccess/readwrite.md)
- [MTLBindingAccessWriteOnly](mtlbindingaccess/writeonly.md)

## See Also

### Introspection data

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
