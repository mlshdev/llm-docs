> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/deleteappentities(oftype:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/deleteappentities(oftype:))

# deleteAppEntities(ofType:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Deletes all app entities of the specified type from the current index.

## Declaration

```swift
func deleteAppEntities<Entity>(ofType entityType: Entity.Type) async throws where Entity : IndexedEntity
```

## Parameters

- `entityType`: One of your app’s entity types. For example, specify `MyEntity.Type` to delete all instances of `MyEntity` you added to the index.

<a id="discussion"></a>

## Discussion

This method removes all entities of the specified type from the app’s indexes. You might call this method as a precursor to indexing a new set of entity objects.

## See Also

### Indexing app entities

- [indexAppEntities(\_:priority:)](indexappentities%28__priority_%29.md): Indexes one or more app entities and assigns an optional priority to them.
- [deleteAppEntities(identifiedBy:ofType:)](deleteappentities%28identifiedby_oftype_%29.md): Deletes entities with the specified identifiers and type from the current index.
