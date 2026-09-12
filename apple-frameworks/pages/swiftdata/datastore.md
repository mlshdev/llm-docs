> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/datastore](https://developer.apple.com/documentation/swiftdata/datastore)

# DataStore

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+ · Swift 5.9+

An interface that enables SwiftData to read and write model data without knowledge of the underlying storage mechanism.

## Declaration

```swift
protocol DataStore : AnyObject
```

## Topics

### Creating a data store

- [init(\_:migrationPlan:)](datastore/init%28__migrationplan_%29.md)

### Accessing store information

- [configuration](datastore/configuration-swift.property.md)
- [Configuration](datastore/configuration-swift.associatedtype.md)
- [DataStoreConfiguration](datastoreconfiguration.md)
- [identifier](datastore/identifier.md)
- [schema](datastore/schema.md)

### Processing fetch requests

- [fetch(\_:)](datastore/fetch%28__%29.md)
- [DataStoreFetchRequest](datastorefetchrequest.md)
- [DataStoreFetchResult](datastorefetchresult.md)
- [Snapshot](datastore/snapshot.md)
- [DataStoreSnapshot](datastoresnapshot.md)
- [DataStoreSnapshotValue](datastoresnapshotvalue.md)
- [fetchCount(\_:)](datastore/fetchcount%28__%29.md)
- [fetchIdentifiers(\_:)](datastore/fetchidentifiers%28__%29.md)

### Persisting model data

- [save(\_:)](datastore/save%28__%29.md)
- [DataStoreSaveChangesRequest](datastoresavechangesrequest.md)
- [DataStoreSaveChangesResult](datastoresavechangesresult.md)

### Removing all persisted model data

- [erase()](datastore/erase%28%29.md)

### Sharing cached data between model contexts

- [initializeState(for:)](datastore/initializestate%28for_%29.md)
- [EditingState](editingstate.md)
- [cachedSnapshots(for:editingState:)](datastore/cachedsnapshots%28for_editingstate_%29.md)
- [invalidateState(for:)](datastore/invalidatestate%28for_%29.md)

## Relationships

### Inherited By

- [DataStoreBatching](datastorebatching.md)

### Conforming Types

- [DefaultStore](defaultstore.md)

## See Also

### Model storage

- [Maintaining a local copy of server data](maintaining-a-local-copy-of-server-data.md): Create and update a persistent store to cache read-only network data.
- [DefaultStore](defaultstore.md): A data store that uses Core Data as its undelying storage mechanism.
- [DataStoreBatching](datastorebatching.md): An interface that enables a custom data store to support batch requests.
- [HistoryProviding](historyproviding.md): An interface that enables a custom data store to provide the history of changes for its persisted models.
- [Building a document-based app using SwiftData](https://developer.apple.com/documentation/swiftui/building-a-document-based-app-using-swiftdata): Code along with the WWDC presenter to transform an app with SwiftData.
- [ModelDocument](modeldocument.md): A document type that uses SwiftData to manage its storage.
