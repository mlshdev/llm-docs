> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/metadata(for:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/metadata(for:))

# metadata(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata of the specified persistent store.

## Declaration

```swift
func metadata(for store: NSPersistentStore) -> [String : Any]
```

## Parameters

- `store`: A persistent store.

<a id="return-value"></a>

## Return Value

A dictionary that contains the metadata currently stored or to-be-stored in `store`.

## See Also

### Related Documentation

- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.

# metadataForPersistentStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata of the specified persistent store.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) metadataForPersistentStore:(NSPersistentStore *) store;
```

## Parameters

- `store`: A persistent store.

<a id="return-value"></a>

## Return Value

A dictionary that contains the metadata currently stored or to-be-stored in `store`.

## See Also

### Related Documentation

- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.
