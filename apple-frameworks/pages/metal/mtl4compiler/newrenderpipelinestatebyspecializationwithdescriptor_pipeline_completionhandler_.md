> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor:pipeline:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor:pipeline:completionhandler:)

# newRenderPipelineStateBySpecializationWithDescriptor:pipeline:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new render pipeline state from another, previously unspecialized, pipeline state

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newRenderPipelineStateBySpecializationWithDescriptor:(MTL4PipelineDescriptor *) descriptor pipeline:(id<MTLRenderPipelineState>) pipeline completionHandler:(MTLNewRenderPipelineStateCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: A render pipeline state descriptor or any type: default, tile, or mesh render pipeline descriptor.
- `pipeline`: A render pipeline state containing unspecialized substate.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.

<a id="discussion"></a>

## Discussion

Metal specializes the pipeline state with new state values the descriptor provides, observing the following rules:

- The compiler only updates properties that were originally specified as *unspecialized*. It doesn’t modify other already-specialized properties
- The compiler sets to their default behavior any unspecialized properties that your passed-in descriptor doesn’t specialize

Additionally, there are some cases where the Metal can’t specialize a pipeline:

- If the original pipeline state object doesn’t have any unspecialized properties
- You can’t re-specialize a previously specialized pipeline state object
