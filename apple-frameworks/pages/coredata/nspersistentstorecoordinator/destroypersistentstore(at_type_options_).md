> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/destroypersistentstore(at:type:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/destroypersistentstore(at:type:options:))

# destroyPersistentStore(at:type:options:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Deletes a specific type of persistent store at the provided location.

## Declaration

```swift
func destroyPersistentStore(at url: URL, type storeType: NSPersistentStore.StoreType, options: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `url`: The store’s location.
- `storeType`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).

## See Also

### Modifying a store

- [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_type_%29.md): Replaces one persistent store with another.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
