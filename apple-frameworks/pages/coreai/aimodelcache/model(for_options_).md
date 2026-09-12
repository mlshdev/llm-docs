> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/model(for:options:)](https://developer.apple.com/documentation/coreai/aimodelcache/model(for:options:))

# model(for:options:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a previously specialized model from the cache, if available.

## Declaration

```swift
final func model(for modelURL: URL, options: SpecializationOptions) throws -> AIModel?
```

## Parameters

- `modelURL`: The URL of an `.aimodel` file that you previously specialized.
- `options`: The specialization options to match against.

<a id="return-value"></a>

## Return Value

The model if a matching cache entry exists, or `nil` otherwise.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

If this cache holds a specialized asset from previously specializing the model at `modelURL` with the specified `options`, this method loads and returns the model. This method never performs specialization.

> **Throws**

> If a cache entry was found but the specialized asset failed to load.
