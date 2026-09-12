> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4binaryfunction](https://developer.apple.com/documentation/metal/mtl4binaryfunction)

# MTL4BinaryFunction (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents a binary function.

## Declaration

```swift
protocol MTL4BinaryFunction : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

A binary function is a shader that you precompile from Metal IR to GPU machine code.

## Topics

### Instance Properties

- [functionType](mtl4binaryfunction/functiontype.md): Describes the type of this binary function.
- [name](mtl4binaryfunction/name.md): Obtains the optional name of this binary function.

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
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.

# MTL4BinaryFunction (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents a binary function.

## Declaration

```objectivec
@protocol MTL4BinaryFunction <NSObject>
```

<a id="overview"></a>

## Overview

A binary function is a shader that you precompile from Metal IR to GPU machine code.

## Topics

### Instance Properties

- [functionType](mtl4binaryfunction/functiontype.md): Describes the type of this binary function.
- [name](mtl4binaryfunction/name.md): Obtains the optional name of this binary function.

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
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.
