> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/deleteentries(for:)](https://developer.apple.com/documentation/coreai/aimodelcache/deleteentries(for:))

# deleteEntries(for:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deletes all cache entries for a specific model, regardless of specialization options.

## Declaration

```swift
final func deleteEntries(for modelURL: URL) throws
```

## Parameters

- `modelURL`: The URL of an `.aimodel` file that you previously specialized.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

A model may have multiple entries in the cache. For example, one with [cpuOnly](../specializationoptions/cpuonly.md) and another with [default](../specializationoptions/default.md). This method deletes all of them.

> **Note**

> For each entry, if no [AIModel](../aimodel.md) instance currently references it, deletion happens immediately. Otherwise, an error is thrown. Deletion can only occur for an entry when the last [AIModel](../aimodel.md) releases it.

## See Also

### Deleting cache entries

- [deleteEntry(for:options:)](deleteentry%28for_options_%29.md): Deletes the cache entry for a specific model and specialization options combination.
- [deleteAll()](deleteall%28%29.md): Deletes all entries in the cache.
- [deleteEntry(referencedBy:)](deleteentry%28referencedby_%29.md): Deletes a cache entry referenced by bookmark data.
