> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler](https://developer.apple.com/documentation/metal/mtl4compiler)

# MTL4Compiler (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A abstraction for a pipeline state and shader function compiler.

## Declaration

```swift
protocol MTL4Compiler : NSObjectProtocol, Sendable
```

## Mentioned In

- [Using the Metal 4 compilation API](using-the-metal-4-compilation-api.md)

## Topics

### Instance Properties

- [device](mtl4compiler/device.md): Returns the device that this compiler belongs to.
- [label](mtl4compiler/label.md): Returns the optional label you specify at creation time.
- [pipelineDataSetSerializer](mtl4compiler/pipelinedatasetserializer.md): Returns the pipeline data set serializer into which this compiler stores data for all pipelines it creates.

### Instance Methods

- [makeBinaryFunction(descriptor:compilerTaskOptions:)](mtl4compiler/makebinaryfunction%28descriptor_compilertaskoptions_%29-5o46e.md): Creates a new binary visible or intersection function synchronously.
- [makeBinaryFunction(descriptor:compilerTaskOptions:)](mtl4compiler/makebinaryfunction%28descriptor_compilertaskoptions_%29-hkc4.md): Creates a new binary visible or intersection function asynchronously.
- [makeComputePipelineState(descriptor:dynamicLinkingDescriptor:compilerTaskOptions:)](mtl4compiler/makecomputepipelinestate%28descriptor_dynamiclinkingdescriptor_compilertaskoptions_%29-19x.md): Creates a new compute pipeline state asynchronously.
- [makeComputePipelineState(descriptor:dynamicLinkingDescriptor:compilerTaskOptions:)](mtl4compiler/makecomputepipelinestate%28descriptor_dynamiclinkingdescriptor_compilertaskoptions_%29-7dqdm.md): Creates a new compute pipeline state object synchronously.
- [makeDynamicLibrary(library:)](mtl4compiler/makedynamiclibrary%28library_%29.md): Creates a new dynamic library from a library containing Metal IR code synchronously.
- [makeDynamicLibrary(url:)](mtl4compiler/makedynamiclibrary%28url_%29.md): Creates a new dynamic library from the contents of a file at an URL location synchronously.
- [makeLibrary(descriptor:)](mtl4compiler/makelibrary%28descriptor_%29.md): Creates a new Metal library synchronously.
- [makeMachineLearningPipelineState(descriptor:)](mtl4compiler/makemachinelearningpipelinestate%28descriptor_%29-36hxx.md): Creates a new machine learning pipeline state asynchronously.
- [makeMachineLearningPipelineState(descriptor:)](mtl4compiler/makemachinelearningpipelinestate%28descriptor_%29-909v1.md): Creates a new ML pipeline state with descriptor.
- [makeRenderPipelineState(descriptor:dynamicLinkingDescriptor:compilerTaskOptions:)](mtl4compiler/makerenderpipelinestate%28descriptor_dynamiclinkingdescriptor_compilertaskoptions_%29-66wsk.md): Creates a new render pipeline state asynchronously.
- [makeRenderPipelineState(descriptor:dynamicLinkingDescriptor:compilerTaskOptions:)](mtl4compiler/makerenderpipelinestate%28descriptor_dynamiclinkingdescriptor_compilertaskoptions_%29-84kox.md): Creates a new render pipeline state synchronously.
- [makeRenderPipelineStateBySpecialization(descriptor:pipeline:)](mtl4compiler/makerenderpipelinestatebyspecialization%28descriptor_pipeline_%29-2636j.md): Creates a new render pipeline state from another, previously unspecialized, pipeline state.
- [makeRenderPipelineStateBySpecialization(descriptor:pipeline:)](mtl4compiler/makerenderpipelinestatebyspecialization%28descriptor_pipeline_%29-7s2wp.md): Creates a new render pipeline state from another, previously unspecialized, pipeline state

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
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4CompilerTaskStatus](mtl4compilertaskstatus.md): Represents the status of a compiler task.
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.

# MTL4Compiler (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A abstraction for a pipeline state and shader function compiler.

## Declaration

```objectivec
@protocol MTL4Compiler <NSObject>
```

## Mentioned In

- [Using the Metal 4 compilation API](using-the-metal-4-compilation-api.md)

## Topics

### Instance Properties

- [device](mtl4compiler/device.md): Returns the device that this compiler belongs to.
- [label](mtl4compiler/label.md): Returns the optional label you specify at creation time.
- [pipelineDataSetSerializer](mtl4compiler/pipelinedatasetserializer.md): Returns the pipeline data set serializer into which this compiler stores data for all pipelines it creates.

### Instance Methods

- [newDynamicLibrary:error:](mtl4compiler/makedynamiclibrary%28library_%29.md): Creates a new dynamic library from a library containing Metal IR code synchronously.
- [newDynamicLibraryWithURL:error:](mtl4compiler/makedynamiclibrary%28url_%29.md): Creates a new dynamic library from the contents of a file at an URL location synchronously.
- [newLibraryWithDescriptor:error:](mtl4compiler/makelibrary%28descriptor_%29.md): Creates a new Metal library synchronously.
- [newBinaryFunctionWithDescriptor:compilerTaskOptions:completionHandler:](mtl4compiler/newbinaryfunctionwithdescriptor_compilertaskoptions_completionhandler_.md): Returns a new compiler task that asyncrhonously creates a binary version of a GPU visible function or GPU intersection function.
- [newBinaryFunctionWithDescriptor:compilerTaskOptions:error:](mtl4compiler/newbinaryfunctionwithdescriptor_compilertaskoptions_error_.md): Creates a new binary visible or intersection function synchronously.
- [newComputePipelineStateWithDescriptor:compilerTaskOptions:completionHandler:](mtl4compiler/newcomputepipelinestatewithdescriptor_compilertaskoptions_completionhandler_.md): Creates a new compute pipeline state asynchronously.
- [newComputePipelineStateWithDescriptor:compilerTaskOptions:error:](mtl4compiler/newcomputepipelinestatewithdescriptor_compilertaskoptions_error_.md): Creates a new compute pipeline state object synchronously.
- [newComputePipelineStateWithDescriptor:dynamicLinkingDescriptor:compilerTaskOptions:completionHandler:](mtl4compiler/newcomputepipelinestatewithdescriptor_dynamiclinkingdescriptor_compilertaskoptions_completionhandler_.md): Creates a new compute pipeline state asynchronously.
- [newComputePipelineStateWithDescriptor:dynamicLinkingDescriptor:compilerTaskOptions:error:](mtl4compiler/newcomputepipelinestatewithdescriptor_dynamiclinkingdescriptor_compilertaskoptions_error_.md): Creates a new compute pipeline state synchronously.
- [newDynamicLibrary:completionHandler:](mtl4compiler/newdynamiclibrary_completionhandler_.md): Creates a new dynamic Metal library instance asynchronously.
- [newDynamicLibraryWithURL:completionHandler:](mtl4compiler/newdynamiclibrarywithurl_completionhandler_.md): Creates a new dynamic library from the contents of a file at an URL location synchronously.
- [newLibraryWithDescriptor:completionHandler:](mtl4compiler/newlibrarywithdescriptor_completionhandler_.md): Creates a new Metal library instance asynchronously.
- [newMachineLearningPipelineStateWithDescriptor:completionHandler:](mtl4compiler/newmachinelearningpipelinestatewithdescriptor_completionhandler_.md): Creates a new machine learning pipeline state asynchronously.
- [newMachineLearningPipelineStateWithDescriptor:error:](mtl4compiler/newmachinelearningpipelinestatewithdescriptor_error_.md): Creates a new ML pipeline state with descriptor.
- [newRenderPipelineStateBySpecializationWithDescriptor:pipeline:completionHandler:](mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor_pipeline_completionhandler_.md): Creates a new render pipeline state from another, previously unspecialized, pipeline state
- [newRenderPipelineStateBySpecializationWithDescriptor:pipeline:error:](mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor_pipeline_error_.md): Creates a new render pipeline state from another, previously unspecialized, pipeline state.
- [newRenderPipelineStateWithDescriptor:compilerTaskOptions:completionHandler:](mtl4compiler/newrenderpipelinestatewithdescriptor_compilertaskoptions_completionhandler_.md): Creates a new render pipeline state asynchronously.
- [newRenderPipelineStateWithDescriptor:compilerTaskOptions:error:](mtl4compiler/newrenderpipelinestatewithdescriptor_compilertaskoptions_error_.md): Creates a new render pipeline state synchronously.
- [newRenderPipelineStateWithDescriptor:dynamicLinkingDescriptor:compilerTaskOptions:completionHandler:](mtl4compiler/newrenderpipelinestatewithdescriptor_dynamiclinkingdescriptor_compilertaskoptions_completionhandler_.md): Creates a new render pipeline state asynchronously.
- [newRenderPipelineStateWithDescriptor:dynamicLinkingDescriptor:compilerTaskOptions:error:](mtl4compiler/newrenderpipelinestatewithdescriptor_dynamiclinkingdescriptor_compilertaskoptions_error_.md): Creates a new render pipeline state synchronously.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader compilation

- [Metal libraries](metal-libraries.md): Compile and manage Metal libraries from the command line.
- [Metal dynamic libraries](metal-dynamic-libraries.md): Create a single Metal library containing reusable code to reduce library size and avoid repeated shader compilation at runtime.
- [Metal binary archives](metal-binary-archives.md): Distribute precompiled GPU-specific binaries as part of your app to avoid runtime compilation of Metal shaders.
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTask](mtl4compilertask.md): A reference to an asynchronous compilation task that you initiate from a compiler instance.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4CompilerTaskStatus](mtl4compilertaskstatus.md): Represents the status of a compiler task.
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.
