> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newcomputepipelinestatewithdescriptor:compilertaskoptions:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newcomputepipelinestatewithdescriptor:compilertaskoptions:completionhandler:)

# newComputePipelineStateWithDescriptor:compilerTaskOptions:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new compute pipeline state asynchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newComputePipelineStateWithDescriptor:(MTL4ComputePipelineDescriptor *) descriptor compilerTaskOptions:(MTL4CompilerTaskOptions *) compilerTaskOptions completionHandler:(MTLNewComputePipelineStateCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: A compute pipeline state descriptor, describing the compute pipeline to create.
- `compilerTaskOptions`: A descriptor of the compilation itself, providing parameters that influence execution of the compilation process.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.
