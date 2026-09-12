> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction](https://developer.apple.com/documentation/coreai/inferencefunction)

# InferenceFunction

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A function that performs inference on input values and produces output values.

## Declaration

```swift
struct InferenceFunction
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

An `InferenceFunction` owns the resources needed for inference, including model weights and intermediate buffers. You load a function from an [AIModel](aimodel.md) and call [run(inputs:states:outputViews:)](inferencefunction/run%28inputs_states_outputviews_%29-14emi.md) to perform inference.

This type is `Sendable`, so you can run it concurrently from multiple tasks. The function automatically allocates additional intermediate buffers as needed to support concurrency.

## Topics

### Running inference

- [run(inputs:states:outputViews:)](inferencefunction/run%28inputs_states_outputviews_%29-mqfb.md): Runs the function on the provided input arrays and returns the output values.
- [run(inputs:states:outputViews:)](inferencefunction/run%28inputs_states_outputviews_%29-14emi.md): Runs the function on the provided input values and returns the output values.
- [encode(inputs:states:outputViews:to:)](inferencefunction/encode%28inputs_states_outputviews_to_%29.md): Encodes the inference onto the provided compute stream, returning async values for the outputs.

### Inspecting a function

- [descriptor](inferencefunction/descriptor.md): The descriptor for this function’s inputs, outputs, and states.

### Supporting types

- [InferenceFunction.Inputs](inferencefunction/inputs.md): A collection of named input values for an inference function.
- [InferenceFunction.Outputs](inferencefunction/outputs.md): The output values produced by running an inference function.
- [InferenceFunction.MutableViews](inferencefunction/mutableviews.md): A collection of `InferenceValue.MutableView`s which can be updated in-place by an `InferenceFunction`.

### Asynchronous inference

- [InferenceFunction.AsyncValue](inferencefunction/asyncvalue.md): A future which will provide an inference value once any pending write is complete.
- [InferenceFunction.AsyncMutableValue](inferencefunction/asyncmutablevalue.md): An async value which can be provided as a mutable argument to an inference function.
- [InferenceFunction.AsyncMutableViews](inferencefunction/asyncmutableviews.md): A collection of mutable references to async states, used as the states argument to an inference function.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inference

- [InferenceFunctionDescriptor](inferencefunctiondescriptor.md): A description of an inference function’s signature.
- [InferenceValue](inferencevalue.md): A value that an inference function accepts as input or produces as output.
- [ImageDescriptor](imagedescriptor.md): A description of an image’s dimensions and pixel format.
- [ComputeStream](computestream.md): A stream of work to be run asynchronously.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
