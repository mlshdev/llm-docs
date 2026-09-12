> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newmachinelearningpipelinestatewithdescriptor:error:](https://developer.apple.com/documentation/metal/mtl4compiler/newmachinelearningpipelinestatewithdescriptor:error:)

# newMachineLearningPipelineStateWithDescriptor:error:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new ML pipeline state with descriptor.

## Declaration

```objectivec
- (id<MTL4MachineLearningPipelineState>) newMachineLearningPipelineStateWithDescriptor:(MTL4MachineLearningPipelineDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A machine learning pipeline state descriptor to use for creating the new pipeline state.
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A machine learning pipeline state if operation is successful, otherwise `nil`.
