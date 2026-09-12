> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/deleteentry(referencedby:)](https://developer.apple.com/documentation/coreai/aimodelcache/deleteentry(referencedby:))

# deleteEntry(referencedBy:)

**Framework:** Core AI  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deletes a cache entry referenced by bookmark data.

## Declaration

```swift
static func deleteEntry(referencedBy bookmark: Data) throws
```

## Parameters

- `bookmark`: Data previously obtained from `AIModel.bookmarkData`.

<a id="discussion"></a>

## Discussion

Use this method to delete a cache entry referenced by bookmark data previously obtained from `AIModel.bookmarkData`. Because bookmark data encodes both the specific cache instance and the entry within it, this method is static and requires no cache instance to call.

> **Note**

> If no [AIModel](../aimodel.md) instance currently references the entry, deletion happens immediately. Otherwise, an error is thrown. Deletion can only occur for an entry when the last [AIModel](../aimodel.md) releases it.

## See Also

### Deleting cache entries

- [deleteEntry(for:options:)](deleteentry%28for_options_%29.md): Deletes the cache entry for a specific model and specialization options combination.
- [deleteEntries(for:)](deleteentries%28for_%29.md): Deletes all cache entries for a specific model, regardless of specialization options.
- [deleteAll()](deleteall%28%29.md): Deletes all entries in the cache.
