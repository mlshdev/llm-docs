> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/deleteentry(for:options:)](https://developer.apple.com/documentation/coreai/aimodelcache/deleteentry(for:options:))

# deleteEntry(for:options:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deletes the cache entry for a specific model and specialization options combination.

## Declaration

```swift
final func deleteEntry(for modelURL: URL, options: SpecializationOptions) throws
```

## Parameters

- `modelURL`: The URL of an `.aimodel` file that you previously specialized.
- `options`: The specialization options to match against.

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="discussion"></a>

## Discussion

> **Note**

> If no [AIModel](../aimodel.md) instance currently references the entry, deletion happens immediately. Otherwise, an error is thrown. Deletion can only occur for an entry when the last [AIModel](../aimodel.md) releases it.

## See Also

### Deleting cache entries

- [deleteEntries(for:)](deleteentries%28for_%29.md): Deletes all cache entries for a specific model, regardless of specialization options.
- [deleteAll()](deleteall%28%29.md): Deletes all entries in the cache.
- [deleteEntry(referencedBy:)](deleteentry%28referencedby_%29.md): Deletes a cache entry referenced by bookmark data.
