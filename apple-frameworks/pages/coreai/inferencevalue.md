> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue](https://developer.apple.com/documentation/coreai/inferencevalue)

# InferenceValue

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that an inference function accepts as input or produces as output.

## Declaration

```swift
struct InferenceValue
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

An `InferenceValue` wraps either an [NDArray](ndarray.md) or a pixel buffer, and you retrieve it after inference using the [ndArray](inferencevalue/ndarray.md) property.

## Topics

### Inspecting a value

- [kind](inferencevalue/kind-swift.property.md): The kind of data this value contains.
- [ndArray](inferencevalue/ndarray.md): The array that the value wraps.
- [pixelBuffer](inferencevalue/pixelbuffer.md): Consume this value to access the underlying pixel buffer.

### Creating a value

- [init(\_:)](inferencevalue/init%28__%29.md): Creates an inference value that wraps the specified pixel buffer.

### Describing values

- [InferenceValue.Descriptor](inferencevalue/descriptor.md): A description of the type and shape of an inference value.
- [InferenceValue.Kind](inferencevalue/kind-swift.enum.md): The type of data an inference value contains.

### Accessing views

- [InferenceValue.View](inferencevalue/view.md): A borrowed, read-only view of an inference value.
- [InferenceValue.MutableView](inferencevalue/mutableview.md): A borrowed, mutable view of an inference value.
- [InferenceValue.NamedMutableViews](inferencevalue/namedmutableviews.md): A collection of named mutable views into inference values.

### Adopting representable protocols

- [InferenceValue.ViewRepresentable](inferencevalue/viewrepresentable.md): A type that can provide a read-only view of itself as an inference value.
- [InferenceValue.MutableViewRepresentable](inferencevalue/mutableviewrepresentable.md): A type that can provide a mutable view of itself as an inference value.

## See Also

### Inference

- [InferenceFunction](inferencefunction.md): A function that performs inference on input values and produces output values.
- [InferenceFunctionDescriptor](inferencefunctiondescriptor.md): A description of an inference function’s signature.
- [ImageDescriptor](imagedescriptor.md): A description of an image’s dimensions and pixel format.
- [ComputeStream](computestream.md): A stream of work to be run asynchronously.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
