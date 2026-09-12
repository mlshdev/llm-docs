> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache](https://developer.apple.com/documentation/coreai/aimodelcache)

# AIModelCache

**Framework:** Core AI  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A cache that stores the specialized model artifacts for inference.

## Declaration

```swift
final class AIModelCache
```

## Mentioned In

- [Managing model specialization and caching](managing-model-specialization-and-caching.md)

<a id="overview"></a>

## Overview

The cache holds the optimized, device-specific artifacts that [AIModel](aimodel.md) loads to execute its inference functions. Each cache entry contains a specialized asset formed from a specific `.aimodel` or `.aimodelc` and [SpecializationOptions](specializationoptions.md) combination.

## Topics

### Accessing the default cache

- [default](aimodelcache/default.md): The shared cache scoped to your app bundle.

### Creating a shared cache

- [init(appGroup:)](aimodelcache/init%28appgroup_%29.md): Creates a cache that shares specialized assets across an app group.

### Loading a specialized model

- [model(for:options:)](aimodelcache/model%28for_options_%29.md): Returns a previously specialized model from the cache, if available.

### Deleting cache entries

- [deleteEntry(for:options:)](aimodelcache/deleteentry%28for_options_%29.md): Deletes the cache entry for a specific model and specialization options combination.
- [deleteEntries(for:)](aimodelcache/deleteentries%28for_%29.md): Deletes all cache entries for a specific model, regardless of specialization options.
- [deleteAll()](aimodelcache/deleteall%28%29.md): Deletes all entries in the cache.
- [deleteEntry(referencedBy:)](aimodelcache/deleteentry%28referencedby_%29.md): Deletes a cache entry referenced by bookmark data.

### Controlling cache persistence

- [AIModelCache.Policy](aimodelcache/policy.md): A policy that controls when the system purges specialized assets from a cache.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration

- [Managing model specialization and caching](managing-model-specialization-and-caching.md): Configure model specialization, manage cached assets, and reduce your app’s storage footprint.
- [Compiling Core AI models ahead of time](compiling-core-ai-models-ahead-of-time.md): Reduce on-device specialization time by compiling Core AI models at build time.
- [ComputeUnitKind](computeunitkind.md): A type of hardware compute unit available for model inference.
- [SpecializationOptions](specializationoptions.md)
