> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makemachinelearningpipelinestate(descriptor:)-909v1](https://developer.apple.com/documentation/metal/mtl4compiler/makemachinelearningpipelinestate(descriptor:)-909v1)

# makeMachineLearningPipelineState(descriptor:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new ML pipeline state with descriptor.

## Declaration

```swift
func makeMachineLearningPipelineState(descriptor: MTL4MachineLearningPipelineDescriptor) throws -> any MTL4MachineLearningPipelineState
```

## Parameters

- `descriptor`: A machine learning pipeline state descriptor to use for creating the new pipeline state.

<a id="return-value"></a>

## Return Value

A machine learning pipeline state upon success, otherwise this function throws.
