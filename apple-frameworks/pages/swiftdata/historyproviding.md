> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historyproviding](https://developer.apple.com/documentation/swiftdata/historyproviding)

# HistoryProviding

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

An interface that enables a custom data store to provide the history of changes for its persisted models.

## Declaration

```swift
protocol HistoryProviding
```

## Topics

### Processing history fetch requests

- [fetchHistory(\_:)](historyproviding/fetchhistory%28__%29.md)

### Deleting history

- [deleteHistory(\_:)](historyproviding/deletehistory%28__%29.md)

### Getting the history transaction type

- [HistoryType](historyproviding/historytype-swift.associatedtype.md)

### Type Properties

- [historyType](historyproviding/historytype-swift.type.property.md)

## Relationships

### Conforming Types

- [DefaultStore](defaultstore.md)

## See Also

### Model storage

- [Maintaining a local copy of server data](maintaining-a-local-copy-of-server-data.md): Create and update a persistent store to cache read-only network data.
- [DefaultStore](defaultstore.md): A data store that uses Core Data as its undelying storage mechanism.
- [DataStore](datastore.md): An interface that enables SwiftData to read and write model data without knowledge of the underlying storage mechanism.
- [DataStoreBatching](datastorebatching.md): An interface that enables a custom data store to support batch requests.
- [Building a document-based app using SwiftData](https://developer.apple.com/documentation/swiftui/building-a-document-based-app-using-swiftdata): Code along with the WWDC presenter to transform an app with SwiftData.
- [ModelDocument](modeldocument.md): A document type that uses SwiftData to manage its storage.
