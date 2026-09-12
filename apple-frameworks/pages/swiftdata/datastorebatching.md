> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastorebatching](https://developer.apple.com/documentation/swiftdata/datastorebatching)

# DataStoreBatching

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

An interface that enables a custom data store to support batch requests.

## Declaration

```swift
protocol DataStoreBatching : DataStore
```

## Topics

### Deleting persisted model data

- [delete(\_:)](datastorebatching/delete%28__%29.md)
- [DataStoreBatchDeleteRequest](datastorebatchdeleterequest.md)

## Relationships

### Inherits From

- [DataStore](datastore.md)

### Conforming Types

- [DefaultStore](defaultstore.md)

## See Also

### Model storage

- [Maintaining a local copy of server data](maintaining-a-local-copy-of-server-data.md): Create and update a persistent store to cache read-only network data.
- [DefaultStore](defaultstore.md): A data store that uses Core Data as its undelying storage mechanism.
- [DataStore](datastore.md): An interface that enables SwiftData to read and write model data without knowledge of the underlying storage mechanism.
- [HistoryProviding](historyproviding.md): An interface that enables a custom data store to provide the history of changes for its persisted models.
- [Building a document-based app using SwiftData](https://developer.apple.com/documentation/swiftui/building-a-document-based-app-using-swiftdata): Code along with the WWDC presenter to transform an app with SwiftData.
- [ModelDocument](modeldocument.md): A document type that uses SwiftData to manage its storage.
