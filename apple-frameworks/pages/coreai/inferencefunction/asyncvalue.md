> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncvalue](https://developer.apple.com/documentation/coreai/inferencefunction/asyncvalue)

# InferenceFunction.AsyncValue

**Framework:** Core AI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A future which will provide an inference value once any pending write is complete.

## Declaration

```swift
final class AsyncValue
```

<a id="overview"></a>

## Overview

An `AsyncValue` contains an underlying `InferenceValue` however that value may be actively in-use by some previously dispatched async work, and thus accessing the underlying value below an `AsyncValue` requires an `await` to wait for any previous compute writing it to be complete.

An `AsyncValue` is immutable once any previous compute has completed.

Async values can be used in async pipelines of inference to dispatch multiple inference functions in sequence without waiting for each to complete before dispatching the next. This can improve performance by parallelizing phases of the inferences which are not data dependent:

```swift
 // Pipeline encoding of a text embedding function followed by decoder
 var textTokens: NDArray = ...
 let embeddingOutputs = try textEmbeddingFunction.encode(inputs: ["tokens": .init(textTokens)])
 let embeddings: InferenceFunction.AsyncValue = embeddingsOutputs["embeddings"]

 let decoderOutputs = try decodingFunction.encode(inputs: ["embeddings": embeddings])
 let logits = decoderOutputs["logits"]!
 // Await the compute of logits to be complete
 let logitsNDArray = try await logits.ndArray
```

## Topics

### Creating an async value

- [init(\_:)](asyncvalue/init%28__%29-5qtut.md): Initialize the `AsyncValue` holding the provided pixel buffer.
- [init(\_:)](asyncvalue/init%28__%29-90hbj.md): Initialize an async value from an existing mutable async value.
- [init(\_:)](asyncvalue/init%28__%29-9wk3.md): Initialize the `AsyncValue` holding the provided ndArray.
- [init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](asyncvalue/init%28unsafebuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.

### Accessing an async value

- [kind](asyncvalue/kind.md): The kind of inference value held by this async value.
- [ndArray](asyncvalue/ndarray.md): Waits for any pending write access on the underlying ndArray to complete, then returns it.
- [pixelBuffer](asyncvalue/pixelbuffer.md): Waits for any pending write access on the underlying pixel buffer to complete, then returns it.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asynchronous inference

- [InferenceFunction.AsyncMutableValue](asyncmutablevalue.md): An async value which can be provided as a mutable argument to an inference function.
- [InferenceFunction.AsyncMutableViews](asyncmutableviews.md): A collection of mutable references to async states, used as the states argument to an inference function.
