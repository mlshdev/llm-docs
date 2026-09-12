> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/computestream](https://developer.apple.com/documentation/coreai/computestream)

# ComputeStream

**Framework:** Core AI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A stream of work to be run asynchronously.

## Declaration

```swift
final class ComputeStream
```

<a id="overview"></a>

## Overview

A compute stream is what is provided to [encode(inputs:states:outputViews:to:)](inferencefunction/encode%28inputs_states_outputviews_to_%29.md) to encode the work onto the stream. Multiple inferences encoded to the same stream are serialized as needed based on the the values read/written.

## Topics

### Creating a stream

- [init()](computestream/init%28%29.md): Initialize an empty compute stream.
- [init(commandQueue:)](computestream/init%28commandqueue_%29.md): Initialize a compute stream which will encode its work to the provided command queue.

### Waiting for work to finish

- [currentWorkCompleted()](computestream/currentworkcompleted%28%29.md): Waits for all previous work encoded to this stream to be complete.

## See Also

### Inference

- [InferenceFunction](inferencefunction.md): A function that performs inference on input values and produces output values.
- [InferenceFunctionDescriptor](inferencefunctiondescriptor.md): A description of an inference function’s signature.
- [InferenceValue](inferencevalue.md): A value that an inference function accepts as input or produces as output.
- [ImageDescriptor](imagedescriptor.md): A description of an image’s dimensions and pixel format.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
