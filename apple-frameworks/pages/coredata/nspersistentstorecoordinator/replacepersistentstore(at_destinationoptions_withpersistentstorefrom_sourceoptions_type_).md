> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/replacepersistentstore(at:destinationoptions:withpersistentstorefrom:sourceoptions:type:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/replacepersistentstore(at:destinationoptions:withpersistentstorefrom:sourceoptions:type:))

# replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:type:)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Replaces one persistent store with another.

## Declaration

```swift
func replacePersistentStore(at destinationURL: URL, destinationOptions: [AnyHashable : Any]? = nil, withPersistentStoreFrom sourceURL: URL, sourceOptions: [AnyHashable : Any]? = nil, type sourceType: NSPersistentStore.StoreType) throws
```

## Parameters

- `destinationURL`: The location of the store to replace.
- `destinationOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the store to replace. For more information, see [Store options](../store-options.md).
- `sourceURL`: The location of the store to use as the replacement.
- `sourceOptions`: A dictionary containing key-value pairs that specify the behavior and characteristics of the replacement store. For more information, see [Store options](../store-options.md).
- `sourceType`: The store type of the replacement store. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).

## See Also

### Modifying a store

- [destroyPersistentStore(at:type:options:)](destroypersistentstore%28at_type_options_%29.md): Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:type:)](migratepersistentstore%28__to_options_type_%29.md): Changes the location and, if necessary, the store type of the specified persistent store.
- [destroyPersistentStore(at:ofType:options:)](destroypersistentstore%28at_oftype_options_%29.md): Deprecated. Deletes a specific type of persistent store at the provided location.
- [migratePersistentStore(\_:to:options:withType:)](migratepersistentstore%28__to_options_withtype_%29.md): Deprecated. Changes the location and, if necessary, the store type of the specified persistent store.
- [replacePersistentStore(at:destinationOptions:withPersistentStoreFrom:sourceOptions:ofType:)](replacepersistentstore%28at_destinationoptions_withpersistentstorefrom_sourceoptions_oftype_%29.md): Deprecated. Replaces one persistent store with another.
