> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(type:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(type:at:options:))

# metadataForPersistentStore(type:at:options:)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns the metadata of a specific type of persistent store at the provided location.

## Declaration

```swift
class func metadataForPersistentStore(type storeType: NSPersistentStore.StoreType, at storeURL: URL, options: [AnyHashable : Any]? = nil) throws -> [String : Any]
```

## Parameters

- `storeType`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).
- `storeURL`: The store’s location.
- `options`: A dictionary containing key-value pairs that specify store behavior and characteristics. For more information, see [Store options](../store-options.md).

## See Also

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.
