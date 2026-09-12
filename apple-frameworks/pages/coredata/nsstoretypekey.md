> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstoretypekey](https://developer.apple.com/documentation/coredata/nsstoretypekey)

# NSStoreTypeKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that identifies the store type.

## Declaration

```swift
let NSStoreTypeKey: String
```

## See Also

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](nspersistentstorecoordinator/setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreUUIDKey](nsstoreuuidkey.md): A key that provides the store’s UUID.

# NSStoreTypeKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that identifies the store type.

## Declaration

```objectivec
extern NSString * const NSStoreTypeKey;
```

## See Also

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata:forPersistentStore:](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreUUIDKey](nsstoreuuidkey.md): A key that provides the store’s UUID.
