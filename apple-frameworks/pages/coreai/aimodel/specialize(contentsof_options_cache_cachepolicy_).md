> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodel/specialize(contentsof:options:cache:cachepolicy:)](https://developer.apple.com/documentation/coreai/aimodel/specialize(contentsof:options:cache:cachepolicy:))

# specialize(contentsOf:options:cache:cachePolicy:)

**Framework:** Core AI  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Specializes a model for the current device.

## Declaration

```swift
@discardableResult static func specialize(contentsOf modelURL: URL, options: SpecializationOptions = .default, cache: AIModelCache = .default, cachePolicy: AIModelCache.Policy = .default) async throws -> AIModel
```

## Parameters

- `modelURL`: The URL of a `.aimodel` or `.aimodelc` file.
- `options`: Options for the specialization process.
- `cache`: The cache to store the resulting specialized asset in.
- `cachePolicy`: The policy to apply to the resulting specialized asset.

<a id="return-value"></a>

## Return Value

The model, ready for inference on the current device.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

This method performs specialization on the input `.aimodel` or `.aimodelc`, storing the resulting specialized assets in the specified cache.

> **Throws**

> If specializing or loading the model fails.
