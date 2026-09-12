> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newrenderpipelinestatewithdescriptor:compilertaskoptions:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newrenderpipelinestatewithdescriptor:compilertaskoptions:completionhandler:)

# newRenderPipelineStateWithDescriptor:compilerTaskOptions:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new render pipeline state asynchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newRenderPipelineStateWithDescriptor:(MTL4PipelineDescriptor *) descriptor compilerTaskOptions:(MTL4CompilerTaskOptions *) compilerTaskOptions completionHandler:(MTLNewRenderPipelineStateCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: A render, tile, or mesh pipeline state descriptor that describes the pipeline to create.
- `compilerTaskOptions`: A description of the compilation process itself, providing parameters that influence execution of the compilation process.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.

<a id="discussion"></a>

## Discussion

Use this method to build any render pipeline type, including render, tile, and mesh render pipeline states. The type of the descriptor you pass indicates the pipeline type this method builds.

Passing in a compute pipeline descriptor to the `descriptor` parameter produces an error.
