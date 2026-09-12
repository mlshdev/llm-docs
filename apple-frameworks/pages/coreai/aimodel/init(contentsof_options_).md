> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/init(contentsof:options:)](https://developer.apple.com/documentation/coreai/aimodel/init(contentsof:options:))

# init(contentsOf:options:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an [AIModel](../aimodel.md) from a `.aimodel`or `.aimodelc` file.

## Declaration

```swift
init(contentsOf modelURL: URL, options: SpecializationOptions = .default) async throws
```

## Parameters

- `modelURL`: The URL of a `.aimodel` or `.aimodelc` file.
- `options`: Options for the specialization process.

## Mentioned In

- [Compiling Core AI models ahead of time](../compiling-core-ai-models-ahead-of-time.md)
- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)
- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

This initializer specializes the model if needed, caching the result for future calls.

Specializing the model can take a significant amount of time depending on model size and the compute unit types it targets. This initializer always uses the [default](../aimodelcache/default.md) cache.

> **Throws**

> If specializing or loading the model fails.

## See Also

### Creating a model

- [init(resolvingBookmark:)](init%28resolvingbookmark_%29.md): Create an `AIModel` by resolving bookmark data pointing to its specialized asset in a cache
