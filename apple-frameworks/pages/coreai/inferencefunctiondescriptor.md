> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunctiondescriptor](https://developer.apple.com/documentation/coreai/inferencefunctiondescriptor)

# InferenceFunctionDescriptor

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of an inference function’s signature.

## Declaration

```swift
struct InferenceFunctionDescriptor
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

Use a descriptor to inspect the names and types of a function’s inputs, outputs, and states before running inference. You obtain a descriptor from [functionDescriptor(for:)](aimodel/functiondescriptor%28for_%29.md) or from the [descriptor](inferencefunction/descriptor.md) property.

## Topics

### Identifying the function

- [name](inferencefunctiondescriptor/name.md): The function’s name.

### Describing inputs

- [inputCount](inferencefunctiondescriptor/inputcount.md): The number of inputs the function accepts.
- [inputNames](inferencefunctiondescriptor/inputnames.md): The names of the function’s inputs.
- [inputDescriptor(of:)](inferencefunctiondescriptor/inputdescriptor%28of_%29.md): Returns the descriptor for the specified input.

### Describing outputs

- [outputCount](inferencefunctiondescriptor/outputcount.md): The number of outputs the function produces.
- [outputNames](inferencefunctiondescriptor/outputnames.md): The names of the function’s outputs.
- [outputDescriptor(of:)](inferencefunctiondescriptor/outputdescriptor%28of_%29.md): Returns the descriptor for the specified output.

### Describing state

- [stateNames](inferencefunctiondescriptor/statenames.md): The names of the function’s states.
- [stateDescriptor(of:)](inferencefunctiondescriptor/statedescriptor%28of_%29.md): Returns the descriptor for the specified state.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inference

- [InferenceFunction](inferencefunction.md): A function that performs inference on input values and produces output values.
- [InferenceValue](inferencevalue.md): A value that an inference function accepts as input or produces as output.
- [ImageDescriptor](imagedescriptor.md): A description of an image’s dimensions and pixel format.
- [ComputeStream](computestream.md): A stream of work to be run asynchronously.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
