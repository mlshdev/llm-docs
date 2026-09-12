> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/deleteall()](https://developer.apple.com/documentation/coreai/aimodelcache/deleteall())

# deleteAll()

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deletes all entries in the cache.

## Declaration

```swift
final func deleteAll() throws
```

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

Use this method to reclaim storage when the app no longer needs any of its specialized models, or to reset the cache during testing.

> **Note**

> For each entry, if no [AIModel](../aimodel.md) instance currently references it, deletion happens immediately. Otherwise, an error is thrown. Deletion can only occur for an entry when the last [AIModel](../aimodel.md) releases it.

## See Also

### Deleting cache entries

- [deleteEntry(for:options:)](deleteentry%28for_options_%29.md): Deletes the cache entry for a specific model and specialization options combination.
- [deleteEntries(for:)](deleteentries%28for_%29.md): Deletes all cache entries for a specific model, regardless of specialization options.
- [deleteEntry(referencedBy:)](deleteentry%28referencedby_%29.md): Deletes a cache entry referenced by bookmark data.
