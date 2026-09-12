> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/imagedescriptor](https://developer.apple.com/documentation/coreai/imagedescriptor)

# ImageDescriptor

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of an image’s dimensions and pixel format.

## Declaration

```swift
struct ImageDescriptor
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## Topics

### Inspecting image properties

- [pixelFormatType](imagedescriptor/pixelformattype.md): The four-character code that identifies the pixel format.
- [width](imagedescriptor/width.md): The width of the image, in pixels.
- [height](imagedescriptor/height.md): The height of the image, in pixels.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inference

- [InferenceFunction](inferencefunction.md): A function that performs inference on input values and produces output values.
- [InferenceFunctionDescriptor](inferencefunctiondescriptor.md): A description of an inference function’s signature.
- [InferenceValue](inferencevalue.md): A value that an inference function accepts as input or produces as output.
- [ComputeStream](computestream.md): A stream of work to be run asynchronously.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
