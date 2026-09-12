> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/migratepersistentstore(_:to:options:type:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/migratepersistentstore(_:to:options:type:))

# migratePersistentStore(\_:to:options:type:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Changes the location and, if necessary, the store type of the specified persistent store.

## Declaration

```swift
func migratePersistentStore(_ store: NSPersistentStore, to storeURL: URL, options: [AnyHashable : Any]? = nil, type storeType: NSPersistentStore.StoreType) throws -> NSPersistentStore
```

## Parameters

- `store`: The peristent store to migrate.
- `storeURL`: The location of the new persistent store.
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).
- `storeType`: The new store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).

<a id="Discussion"></a>

## Discussion

Performance may vary depending on the store types of the old and new stores. Invoking this method removes the specified store from the coordinator.

## See Also

### Modifying a store

- [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
