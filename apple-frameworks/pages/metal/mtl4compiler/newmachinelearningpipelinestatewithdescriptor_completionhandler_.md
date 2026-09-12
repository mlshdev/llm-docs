> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newmachinelearningpipelinestatewithdescriptor:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newmachinelearningpipelinestatewithdescriptor:completionhandler:)

# newMachineLearningPipelineStateWithDescriptor:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new machine learning pipeline state asynchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newMachineLearningPipelineStateWithDescriptor:(MTL4MachineLearningPipelineDescriptor *) descriptor completionHandler:(MTL4NewMachineLearningPipelineStateCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: A machine learning pipeline state descriptor to use for creating the new pipeline state.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.
