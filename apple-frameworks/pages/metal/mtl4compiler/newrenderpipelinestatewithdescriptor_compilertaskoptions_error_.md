> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newrenderpipelinestatewithdescriptor:compilertaskoptions:error:](https://developer.apple.com/documentation/metal/mtl4compiler/newrenderpipelinestatewithdescriptor:compilertaskoptions:error:)

# newRenderPipelineStateWithDescriptor:compilerTaskOptions:error:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new render pipeline state synchronously.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithDescriptor:(MTL4PipelineDescriptor *) descriptor compilerTaskOptions:(MTL4CompilerTaskOptions *) compilerTaskOptions error:(NSError **) error;
```

## Parameters

- `descriptor`: A render, tile, or mesh pipeline state descriptor that describes the pipeline to create.
- `compilerTaskOptions`: A description of the compilation process itself, providing parameters that influence execution of the compilation process.
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A new render pipeline state object upon success, `nil` otherwise.

<a id="discussion"></a>

## Discussion

Use this method to build any render pipeline type, including render, tile, and mesh render pipeline states. The type of the descriptor you pass indicates the pipeline type this method builds.

Passing in a compute pipeline descriptor to the `descriptor` parameter produces an error.
