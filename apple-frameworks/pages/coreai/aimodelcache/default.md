> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/default](https://developer.apple.com/documentation/coreai/aimodelcache/default)

# default

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The shared cache scoped to your app bundle.

## Declaration

```swift
static let `default`: AIModelCache
```

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

The shared specialized asset cache for your app bundle. The framework uses this cache by default whenever specialization happens automatically, such as during [init(contentsOf:options:)](../aimodel/init%28contentsof_options_%29.md).
