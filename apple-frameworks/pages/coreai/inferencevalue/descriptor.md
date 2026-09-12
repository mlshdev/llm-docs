> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/descriptor](https://developer.apple.com/documentation/coreai/inferencevalue/descriptor)

# InferenceValue.Descriptor

**Framework:** Core AI  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of the type and shape of an inference value.

## Declaration

```swift
enum Descriptor
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

You obtain descriptors from [InferenceFunctionDescriptor](../inferencefunctiondescriptor.md) to inspect what kind of value a function expects for each input or output.

## Topics

### Defining value descriptors

- [InferenceValue.Descriptor.image(\_:)](descriptor/image%28__%29.md)
- [InferenceValue.Descriptor.ndArray(\_:)](descriptor/ndarray%28__%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing values

- [InferenceValue.Kind](kind-swift.enum.md): The type of data an inference value contains.
