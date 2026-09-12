> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compilertaskstatus](https://developer.apple.com/documentation/metal/mtl4compilertaskstatus)

# MTL4CompilerTaskStatus (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents the status of a compiler task.

## Declaration

```swift
enum MTL4CompilerTaskStatus
```

## Topics

### Enumeration Cases

- [MTL4CompilerTaskStatus.compiling](mtl4compilertaskstatus/compiling.md): The compiler task is currently compiling.
- [MTL4CompilerTaskStatus.finished](mtl4compilertaskstatus/finished.md): The compiler task is finished.
- [MTL4CompilerTaskStatus.none](mtl4compilertaskstatus/none.md): No status.
- [MTL4CompilerTaskStatus.scheduled](mtl4compilertaskstatus/scheduled.md): The compiler task is currently scheduled.

### Initializers

- [init(rawValue:)](mtl4compilertaskstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
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
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.

# MTL4CompilerTaskStatus (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Represents the status of a compiler task.

## Declaration

```objectivec
enum MTL4CompilerTaskStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [MTL4CompilerTaskStatusCompiling](mtl4compilertaskstatus/compiling.md): The compiler task is currently compiling.
- [MTL4CompilerTaskStatusFinished](mtl4compilertaskstatus/finished.md): The compiler task is finished.
- [MTL4CompilerTaskStatusNone](mtl4compilertaskstatus/none.md): No status.
- [MTL4CompilerTaskStatusScheduled](mtl4compilertaskstatus/scheduled.md): The compiler task is currently scheduled.

## See Also

### Shader compilation

- [Metal libraries](metal-libraries.md): Compile and manage Metal libraries from the command line.
- [Metal dynamic libraries](metal-dynamic-libraries.md): Create a single Metal library containing reusable code to reduce library size and avoid repeated shader compilation at runtime.
- [Metal binary archives](metal-binary-archives.md): Distribute precompiled GPU-specific binaries as part of your app to avoid runtime compilation of Metal shaders.
- [MTL4Compiler](mtl4compiler.md): A abstraction for a pipeline state and shader function compiler.
- [MTL4CompilerDescriptor](mtl4compilerdescriptor.md): Groups together properties for creating a compiler context.
- [MTL4CompilerTask](mtl4compilertask.md): A reference to an asynchronous compilation task that you initiate from a compiler instance.
- [MTL4CompilerTaskOptions](mtl4compilertaskoptions.md): The configuration options that control the behavior of a compilation task for a Metal 4 compiler instance.
- [MTL4Archive](mtl4archive.md): A read-only container that stores pipeline states from a shader compiler.
- [MTL4BinaryFunction](mtl4binaryfunction.md): Represents a binary function.
- [MTL4BinaryFunctionDescriptor](mtl4binaryfunctiondescriptor.md): Base interface for other function-derived interfaces.
- [MTL4BinaryFunctionOptions](mtl4binaryfunctionoptions.md): Options for configuring the creation of binary functions.
- [MTL4PipelineStageDynamicLinkingDescriptor](mtl4pipelinestagedynamiclinkingdescriptor.md): Groups together properties to drive the dynamic linking process of a pipeline stage.
