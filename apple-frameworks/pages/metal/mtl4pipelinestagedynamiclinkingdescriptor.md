> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinestagedynamiclinkingdescriptor](https://developer.apple.com/documentation/metal/mtl4pipelinestagedynamiclinkingdescriptor)

# MTL4PipelineStageDynamicLinkingDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together properties to drive the dynamic linking process of a pipeline stage.

## Declaration

```swift
class MTL4PipelineStageDynamicLinkingDescriptor
```

## Topics

### Instance Properties

- [binaryLinkedFunctions](mtl4pipelinestagedynamiclinkingdescriptor/binarylinkedfunctions.md): Provides the array of binary functions to link.
- [maxCallStackDepth](mtl4pipelinestagedynamiclinkingdescriptor/maxcallstackdepth.md): Limits the maximum depth of the call stack for indirect function calls in the pipeline stage function.
- [preloadedLibraries](mtl4pipelinestagedynamiclinkingdescriptor/preloadedlibraries.md): Provides an array of dynamic libraries the compiler loads when it builds the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader compilation

- [Metal libraries](metal-libraries.md): Compile and manage Metal libraries from the command line.
- [Metal dynamic libraries](metal-dynamic-libraries.md): Create a single Metal library containing reusable code to reduce library size and avoid repeated shader compilation at runtime.
- [Metal binary archives](metal-binary-archives.md): Distribute precompiled GPU-specific binaries as part of your app to avoid runtime compilation of Metal shaders.
- [MTL4Compiler](mtl4compiler.md): A abstraction for a pipeline state and shader function compiler.
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4CompilerTaskStatus](mtl4compilertaskstatus.md): Represents the status of a compiler task.
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.

# MTL4PipelineStageDynamicLinkingDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together properties to drive the dynamic linking process of a pipeline stage.

## Declaration

```objectivec
@interface MTL4PipelineStageDynamicLinkingDescriptor : NSObject
```

## Topics

### Instance Properties

- [binaryLinkedFunctions](mtl4pipelinestagedynamiclinkingdescriptor/binarylinkedfunctions.md): Provides the array of binary functions to link.
- [maxCallStackDepth](mtl4pipelinestagedynamiclinkingdescriptor/maxcallstackdepth.md): Limits the maximum depth of the call stack for indirect function calls in the pipeline stage function.
- [preloadedLibraries](mtl4pipelinestagedynamiclinkingdescriptor/preloadedlibraries.md): Provides an array of dynamic libraries the compiler loads when it builds the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

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
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
