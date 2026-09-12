> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel](https://developer.apple.com/documentation/coreai/aimodel)

# AIModel

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A specialized model for running inference on a device.

## Declaration

```swift
struct AIModel
```

## Mentioned In

- [Managing model specialization and caching](managing-model-specialization-and-caching.md)
- [Compiling Core AI models ahead of time](compiling-core-ai-models-ahead-of-time.md)
- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

An `AIModel` represents a specialized `.aimodel` asset, optimized for the current device’s hardware. You create one by loading the asset from disk:

```swift
let model = try await AIModel(contentsOf: modelURL)
```

Use [functionDescriptor(for:)](aimodel/functiondescriptor%28for_%29.md) to inspect a function’s inputs and outputs, then load an [InferenceFunction](inferencefunction.md) to run inference.

> **Note**

> The model instance is lightweight and doesn’t own weights or intermediate buffers. Those resources belong to the functions you load from it.

## Topics

### Creating a model

- [init(contentsOf:options:)](aimodel/init%28contentsof_options_%29.md): Creates an [AIModel](aimodel.md) from a `.aimodel`or `.aimodelc` file.
- [init(resolvingBookmark:)](aimodel/init%28resolvingbookmark_%29.md): Create an `AIModel` by resolving bookmark data pointing to its specialized asset in a cache

### Loading inference functions

- [loadFunction(named:)](aimodel/loadfunction%28named_%29.md)
- [functionDescriptor(for:)](aimodel/functiondescriptor%28for_%29.md): Returns a descriptor for the specified function.
- [functionNames](aimodel/functionnames.md): The names of the inference functions in this model.

### Specializing a model

- [specialize(contentsOf:options:cache:cachePolicy:)](aimodel/specialize%28contentsof_options_cache_cachepolicy_%29.md): Specializes a model for the current device.

### Inspecting a model

- [bookmarkData](aimodel/bookmarkdata.md): Create a bookmark for this AIModel’s cached specialized asset entry as serialized data.
- [deviceArchitectureName](aimodel/devicearchitecturename.md): The Core AI architecture name of the current device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md): Power your app’s intelligent features with an on-device AI model.
- [AIModelAsset](aimodelasset.md): An unspecialized source model asset.
