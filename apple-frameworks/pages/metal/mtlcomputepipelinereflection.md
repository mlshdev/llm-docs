> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinereflection](https://developer.apple.com/documentation/metal/mtlcomputepipelinereflection)

# MTLComputePipelineReflection (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Information about the arguments of a compute function.

## Declaration

```swift
class MTLComputePipelineReflection
```

<a id="overview"></a>

## Overview

An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object provides access to the arguments of the compute function used in an [MTLComputePipelineState](mtlcomputepipelinestate.md) object. An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object can be created along with an [MTLComputePipelineState](mtlcomputepipelinestate.md) object. Don’t create an [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object directly. Instead, call either the [makeComputePipelineState(function:options:reflection:)](mtldevice/makecomputepipelinestate%28function_options_reflection_%29.md) or [makeComputePipelineState(function:options:completionHandler:)](mtldevice/makecomputepipelinestate%28function_options_completionhandler_%29.md) method of [MTLDevice](mtldevice.md) to create both an [MTLComputePipelineState](mtlcomputepipelinestate.md) object and an [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object.

[MTLComputePipelineReflection](mtlcomputepipelinereflection.md) objects can use a significant amount of memory; release any strong references to them after you finish creating pipeline objects.

## Topics

### Obtaining the arguments of the compute function

- [arguments](mtlcomputepipelinereflection/arguments.md): Deprecated. An array of instances that describe the arguments of a compute function.

### Instance Properties

- [bindings](mtlcomputepipelinereflection/bindings.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Introspection data

- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)

# MTLComputePipelineReflection (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Information about the arguments of a compute function.

## Declaration

```objectivec
@interface MTLComputePipelineReflection : NSObject
```

<a id="overview"></a>

## Overview

An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object provides access to the arguments of the compute function used in an [MTLComputePipelineState](mtlcomputepipelinestate.md) object. An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object can be created along with an [MTLComputePipelineState](mtlcomputepipelinestate.md) object. Don’t create an [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object directly. Instead, call either the [newComputePipelineStateWithFunction:options:reflection:error:](mtldevice/makecomputepipelinestate%28function_options_reflection_%29.md) or [newComputePipelineStateWithFunction:options:completionHandler:](mtldevice/makecomputepipelinestate%28function_options_completionhandler_%29.md) method of [MTLDevice](mtldevice.md) to create both an [MTLComputePipelineState](mtlcomputepipelinestate.md) object and an [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) object.

[MTLComputePipelineReflection](mtlcomputepipelinereflection.md) objects can use a significant amount of memory; release any strong references to them after you finish creating pipeline objects.

## Topics

### Obtaining the arguments of the compute function

- [arguments](mtlcomputepipelinereflection/arguments.md): Deprecated. An array of instances that describe the arguments of a compute function.

### Instance Properties

- [bindings](mtlcomputepipelinereflection/bindings.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Introspection data

- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md): Information about the arguments of a graphics function.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
