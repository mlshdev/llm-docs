> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction](https://developer.apple.com/documentation/metal/mtlfunction)

# MTLFunction (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A interface that represents a public shader function in a Metal library.

## Declaration

```swift
protocol MTLFunction : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

Use [MTLFunction](mtlfunction.md) instances to specify which shaders a Metal pipeline calls when the GPU executes commands that specify that pipeline. For more information on creating pipeline states, see [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) and [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md).

An [MTLFunction](mtlfunction.md) instance is a *specialized* function if the shader contains function constants, otherwise it is a *nonspecialized* function.

Don’t use standard allocation and initialization techniques to create an [MTLFunction](mtlfunction.md) instance. Instead, use the function creation methods provided by the [MTLLibrary](mtllibrary.md) protocol. To create a nonspecialized function, call the [makeFunction(name:)](mtllibrary/makefunction%28name_%29.md) method.

To create a specialized function, call one of these [MTLLibrary](mtllibrary.md) methods:

- [makeFunction(name:constantValues:completionHandler:)](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md)
- [makeFunction(name:constantValues:)](mtllibrary/makefunction%28name_constantvalues_%29.md)

[MTLFunction](mtlfunction.md) instances can use a significant amount of memory; release any strong references to them after you finish creating pipeline instances.

## Topics

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [MTLFunctionType](mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

### Identifying the tessellation patch

- [patchType](mtlfunction/patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [patchControlPointCount](mtlfunction/patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.
- [MTLPatchType](mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.

### Retrieving function attributes

- [vertexAttributes](mtlfunction/vertexattributes.md): An array that describes the vertex input attributes to a vertex function.
- [stageInputAttributes](mtlfunction/stageinputattributes.md): An array that describes the input attributes to the function.

### Retrieving function constants

- [functionConstantsDictionary](mtlfunction/functionconstantsdictionary.md): A dictionary of function constants for a specialized function.

### Creating argument encoders

- [makeArgumentEncoder(bufferIndex:)](mtlfunction/makeargumentencoder%28bufferindex_%29.md): Creates an argument encoder for an argument buffer that’s one of this function’s arguments.
- [makeArgumentEncoder(bufferIndex:reflection:)](mtlfunction/makeargumentencoder%28bufferindex_reflection_%29.md): Deprecated. Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

# MTLFunction (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A interface that represents a public shader function in a Metal library.

## Declaration

```objectivec
@protocol MTLFunction <NSObject>
```

<a id="overview"></a>

## Overview

Use [MTLFunction](mtlfunction.md) instances to specify which shaders a Metal pipeline calls when the GPU executes commands that specify that pipeline. For more information on creating pipeline states, see [MTLRenderPipelineDescriptor](mtlrenderpipelinedescriptor.md) and [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md).

An [MTLFunction](mtlfunction.md) instance is a *specialized* function if the shader contains function constants, otherwise it is a *nonspecialized* function.

Don’t use standard allocation and initialization techniques to create an [MTLFunction](mtlfunction.md) instance. Instead, use the function creation methods provided by the [MTLLibrary](mtllibrary.md) protocol. To create a nonspecialized function, call the [newFunctionWithName:](mtllibrary/makefunction%28name_%29.md) method.

To create a specialized function, call one of these [MTLLibrary](mtllibrary.md) methods:

- [newFunctionWithName:constantValues:completionHandler:](mtllibrary/makefunction%28name_constantvalues_completionhandler_%29.md)
- [newFunctionWithName:constantValues:error:](mtllibrary/makefunction%28name_constantvalues_%29.md)

[MTLFunction](mtlfunction.md) instances can use a significant amount of memory; release any strong references to them after you finish creating pipeline instances.

## Topics

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [MTLFunctionType](mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.
- [MTLFunctionOptions](mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.

### Identifying the tessellation patch

- [patchType](mtlfunction/patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [patchControlPointCount](mtlfunction/patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.
- [MTLPatchType](mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.

### Retrieving function attributes

- [vertexAttributes](mtlfunction/vertexattributes.md): An array that describes the vertex input attributes to a vertex function.
- [stageInputAttributes](mtlfunction/stageinputattributes.md): An array that describes the input attributes to the function.

### Retrieving function constants

- [functionConstantsDictionary](mtlfunction/functionconstantsdictionary.md): A dictionary of function constants for a specialized function.

### Creating argument encoders

- [newArgumentEncoderWithBufferIndex:](mtlfunction/makeargumentencoder%28bufferindex_%29.md): Creates an argument encoder for an argument buffer that’s one of this function’s arguments.
- [newArgumentEncoderWithBufferIndex:reflection:](mtlfunction/makeargumentencoder%28bufferindex_reflection_%29.md): Deprecated. Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
