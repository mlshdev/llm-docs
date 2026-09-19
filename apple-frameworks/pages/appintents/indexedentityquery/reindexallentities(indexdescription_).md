> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/indexedentityquery/reindexallentities(indexdescription:)

# reindexAllEntities(indexDescription:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Reindexes all entities in the app index with the specified characteristics.

## Declaration

```swift
func reindexAllEntities(indexDescription: CSSearchableIndexDescription) async throws
```

<a id="discussion"></a>

## Discussion

- Parameter:

  - indexDescription: An object that describes the characteristics of the searchable index. Use the information in this type to determine which of your app’s [CSSearchableIndex](../../corespotlight/cssearchableindex.md) instances to update.

The system calls this method when it needs you to reindex all app entities in one of your app’s searchable indexes. In your implementation of this method, fetch all entities and donate them again to your index.
