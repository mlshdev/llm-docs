> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4archive](https://developer.apple.com/documentation/metal/mtl4archive)

# MTL4Archive (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A read-only container that stores pipeline states from a shader compiler.

## Declaration

```swift
protocol MTL4Archive : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

The pipeline states can have intermediate representation (IR) binaries, GPU- and system-specific binaries, or a combination.

## Topics

### Identifying the archive

- [label](mtl4archive/label.md): A label that you can associate with this archive.

### Instance Methods

- [makeBinaryFunction(descriptor:)](mtl4archive/makebinaryfunction%28descriptor_%29.md): Synchronously creates a binary version of a GPU visible function or GPU intersection function.
- [makeComputePipelineState(descriptor:dynamicLinkingDescriptor:)](mtl4archive/makecomputepipelinestate%28descriptor_dynamiclinkingdescriptor_%29.md): Creates a compute pipeline state from the archive with a compute descriptor and a dynamic linking descriptor.
- [makeRenderPipelineState(descriptor:dynamicLinkingDescriptor:)](mtl4archive/makerenderpipelinestate%28descriptor_dynamiclinkingdescriptor_%29.md): Creates a render pipeline state from the archive with a render descriptor and a dynamic linking descriptor.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader compilation

- [Metal libraries](metal-libraries.md): Compile and manage Metal libraries from the command line.
- [Metal dynamic libraries](metal-dynamic-libraries.md): Create a single Metal library containing reusable code to reduce library size and avoid repeated shader compilation at runtime.
- [Metal binary archives](metal-binary-archives.md): Distribute precompiled GPU-specific binaries as part of your app to avoid runtime compilation of Metal shaders.
- [MTL4Compiler](mtl4compiler.md): A abstraction for a pipeline state and shader function compiler.
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4CompilerTaskStatus](mtl4compilertaskstatus.md): Represents the status of a compiler task.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.

# MTL4Archive (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A read-only container that stores pipeline states from a shader compiler.

## Declaration

```objectivec
@protocol MTL4Archive <NSObject>
```

<a id="overview"></a>

## Overview

The pipeline states can have intermediate representation (IR) binaries, GPU- and system-specific binaries, or a combination.

## Topics

### Identifying the archive

- [label](mtl4archive/label.md): A label that you can associate with this archive.

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:dynamicLinkingDescriptor:error:](mtl4archive/newcomputepipelinestatewithdescriptor_dynamiclinkingdescriptor_error_.md): Creates a compute pipeline state from the archive with a compute descriptor and a dynamic linking descriptor.
- [newComputePipelineStateWithDescriptor:error:](mtl4archive/newcomputepipelinestatewithdescriptor_error_.md): Creates a compute pipeline state from the archive with a descriptor.

### Creating render pipeline states

- [newRenderPipelineStateWithDescriptor:dynamicLinkingDescriptor:error:](mtl4archive/newrenderpipelinestatewithdescriptor_dynamiclinkingdescriptor_error_.md): Creates a render pipeline state from the archive with a render descriptor and a dynamic linking descriptor.
- [newRenderPipelineStateWithDescriptor:error:](mtl4archive/newrenderpipelinestatewithdescriptor_error_.md): Creates a render pipeline state from the archive with a descriptor.

### Instance Methods

- [newBinaryFunctionWithDescriptor:error:](mtl4archive/makebinaryfunction%28descriptor_%29.md): Synchronously creates a binary version of a GPU visible function or GPU intersection function.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader compilation

- [Metal libraries](metal-libraries.md): Compile and manage Metal libraries from the command line.
- [Metal dynamic libraries](metal-dynamic-libraries.md): Create a single Metal library containing reusable code to reduce library size and avoid repeated shader compilation at runtime.
- [Metal binary archives](metal-binary-archives.md): Distribute precompiled GPU-specific binaries as part of your app to avoid runtime compilation of Metal shaders.
- [MTL4Compiler](mtl4compiler.md): A abstraction for a pipeline state and shader function compiler.
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTask](mtl4compilertask.md): A reference to an asynchronous compilation task that you initiate from a compiler instance.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4CompilerTaskStatus](mtl4compilertaskstatus.md): Represents the status of a compiler task.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.
