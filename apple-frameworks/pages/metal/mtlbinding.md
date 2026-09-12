> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinding](https://developer.apple.com/documentation/metal/mtlbinding)

# MTLBinding (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
protocol MTLBinding : NSObjectProtocol, Sendable
```

## Topics

### Instance Properties

- [access](mtlbinding/access.md)
- [index](mtlbinding/index.md)
- [isArgument](mtlbinding/isargument.md)
- [isUsed](mtlbinding/isused.md)
- [name](mtlbinding/name.md)
- [type](mtlbinding/type.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
- [MTLTensorBinding](mtltensorbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)

## See Also

### Introspection data

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)

# MTLBinding (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol MTLBinding <NSObject>
```

## Topics

### Instance Properties

- [access](mtlbinding/access.md)
- [index](mtlbinding/index.md)
- [argument](mtlbinding/isargument.md)
- [used](mtlbinding/isused.md)
- [name](mtlbinding/name.md)
- [type](mtlbinding/type.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
- [MTLTensorBinding](mtltensorbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)

## See Also

### Introspection data

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
