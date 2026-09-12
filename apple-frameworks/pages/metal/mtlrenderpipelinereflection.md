> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinereflection](https://developer.apple.com/documentation/metal/mtlrenderpipelinereflection)

# MTLRenderPipelineReflection (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Information about the arguments of a graphics function.

## Declaration

```swift
class MTLRenderPipelineReflection
```

<a id="overview"></a>

## Overview

The [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) class is an interface that represents the parameters for the shaders in a render pipeline state (see [MTLRenderPipelineState](mtlrenderpipelinestate.md)). Each pipeline state can include object, mesh, vertex, fragment, and tile shaders.

You create a reflection instance at the same time as the pipeline state that it represents by calling the appropriate [MTLDevice](mtldevice.md) method. For example, the [makeRenderPipelineState(descriptor:options:reflection:)](mtldevice/makerenderpipelinestate%28descriptor_options_reflection_%29.md) and [makeRenderPipelineState(descriptor:options:completionHandler:)](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md) methods create the pipeline state and the reflection instances at the same time.

> **Important**

>  Only create reflection instances if you need them because each one can require a significant amount of memory.

For more information, see [Pipeline state creation](pipeline-state-creation.md).

## Topics

### Inspecting a shader’s parameter

- [fragmentBindings](mtlrenderpipelinereflection/fragmentbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s fragment shader.
- [meshBindings](mtlrenderpipelinereflection/meshbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s mesh shader.
- [objectBindings](mtlrenderpipelinereflection/objectbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s object shader.
- [tileBindings](mtlrenderpipelinereflection/tilebindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s tile shader.
- [vertexBindings](mtlrenderpipelinereflection/vertexbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s vertex shader.

### Deprecated

- [vertexArguments](mtlrenderpipelinereflection/vertexarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.
- [fragmentArguments](mtlrenderpipelinereflection/fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.
- [tileArguments](mtlrenderpipelinereflection/tilearguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.

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

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)

# MTLRenderPipelineReflection (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Information about the arguments of a graphics function.

## Declaration

```objectivec
@interface MTLRenderPipelineReflection : NSObject
```

<a id="overview"></a>

## Overview

The [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) class is an interface that represents the parameters for the shaders in a render pipeline state (see [MTLRenderPipelineState](mtlrenderpipelinestate.md)). Each pipeline state can include object, mesh, vertex, fragment, and tile shaders.

You create a reflection instance at the same time as the pipeline state that it represents by calling the appropriate [MTLDevice](mtldevice.md) method. For example, the [newRenderPipelineStateWithDescriptor:options:reflection:error:](mtldevice/makerenderpipelinestate%28descriptor_options_reflection_%29.md) and [newRenderPipelineStateWithDescriptor:options:completionHandler:](mtldevice/makerenderpipelinestate%28descriptor_options_completionhandler_%29-5gdww.md) methods create the pipeline state and the reflection instances at the same time.

> **Important**

>  Only create reflection instances if you need them because each one can require a significant amount of memory.

For more information, see [Pipeline state creation](pipeline-state-creation.md).

## Topics

### Inspecting a shader’s parameter

- [fragmentBindings](mtlrenderpipelinereflection/fragmentbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s fragment shader.
- [meshBindings](mtlrenderpipelinereflection/meshbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s mesh shader.
- [objectBindings](mtlrenderpipelinereflection/objectbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s object shader.
- [tileBindings](mtlrenderpipelinereflection/tilebindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s tile shader.
- [vertexBindings](mtlrenderpipelinereflection/vertexbindings.md): An array of binding instances, each of which represents a parameter of the pipeline state’s vertex shader.

### Deprecated

- [vertexArguments](mtlrenderpipelinereflection/vertexarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.
- [fragmentArguments](mtlrenderpipelinereflection/fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.
- [tileArguments](mtlrenderpipelinereflection/tilearguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Introspection data

- [MTLComputePipelineReflection](mtlcomputepipelinereflection.md): Information about the arguments of a compute function.
- [MTLAutoreleasedComputePipelineReflection](mtlautoreleasedcomputepipelinereflection.md): A convenience type alias for an autoreleased compute pipeline reflection object.
- [MTLAutoreleasedRenderPipelineReflection](mtlautoreleasedrenderpipelinereflection.md): A convenience type alias for an autoreleased pipeline reflection instance.
- [MTLBindingType](mtlbindingtype.md)
- [MTLBinding](mtlbinding.md)
- [MTLBindingAccess](mtlbindingaccess.md)
- [MTLBufferBinding](mtlbufferbinding.md)
- [MTLTextureBinding](mtltexturebinding.md)
- [MTLThreadgroupBinding](mtlthreadgroupbinding.md)
- [MTLObjectPayloadBinding](mtlobjectpayloadbinding.md)
