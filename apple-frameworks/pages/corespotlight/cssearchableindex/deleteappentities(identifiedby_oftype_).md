> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/deleteappentities(identifiedby:oftype:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/deleteappentities(identifiedby:oftype:))

# deleteAppEntities(identifiedBy:ofType:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Deletes entities with the specified identifiers and type from the current index.

## Declaration

```swift
func deleteAppEntities<Entity>(identifiedBy identifiers: [Entity.ID], ofType type: Entity.Type) async throws where Entity : IndexedEntity
```

## Parameters

- `identifiers`: The IDs of the entities you want to delete. Get the identifier value of an entity from its [id](https://developer.apple.com/documentation/swift/identifiable/id-8t2ws) property.
- `type`: One of your app’s entity types. For example, specify `MyEntity.Type` to delete entities with the `MyEntity` type in the index.

<a id="discussion"></a>

## Discussion

Use this method to remove only the specified entities from the current index. You might call this method as a precursor to indexing a new set of entity objects. To remove all entities of the specified type, call the [deleteAppEntities(ofType:)](deleteappentities%28oftype_%29.md) method instead.

## See Also

### Indexing app entities

- [indexAppEntities(\_:priority:)](indexappentities%28__priority_%29.md): Indexes one or more app entities and assigns an optional priority to them.
- [deleteAppEntities(ofType:)](deleteappentities%28oftype_%29.md): Deletes all app entities of the specified type from the current index.
