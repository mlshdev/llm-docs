> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/setmetadata(_:for:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/setmetadata(_:for:))

# setMetadata(\_:for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the metadata for the specified persistent store.

## Declaration

```swift
func setMetadata(_ metadata: [String : Any]?, for store: NSPersistentStore)
```

## Parameters

- `metadata`: A dictionary containing metadata for the store.
- `store`: A persistent store.

<a id="Discussion"></a>

## Discussion

The store type and UUID (`NSStoreTypeKey` and `NSStoreUUIDKey`) are always added automatically, however `NSStoreUUIDKey` is only added if it is not set manually as part of the dictionary argument.

> **Important**

>  Setting the metadata for a store does not change the information on disk until the store is actually saved.

## See Also

### Related Documentation

- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.

# setMetadata:forPersistentStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the metadata for the specified persistent store.

## Declaration

```objectivec
- (void) setMetadata:(NSDictionary<NSString *,id> *) metadata forPersistentStore:(NSPersistentStore *) store;
```

## Parameters

- `metadata`: A dictionary containing metadata for the store.
- `store`: A persistent store.

<a id="Discussion"></a>

## Discussion

The store type and UUID (`NSStoreTypeKey` and `NSStoreUUIDKey`) are always added automatically, however `NSStoreUUIDKey` is only added if it is not set manually as part of the dictionary argument.

> **Important**

>  Setting the metadata for a store does not change the information on disk until the store is actually saved.

## See Also

### Related Documentation

- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.
