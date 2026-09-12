> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstoreuuidkey](https://developer.apple.com/documentation/coredata/nsstoreuuidkey)

# NSStoreUUIDKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that provides the store’s UUID.

## Declaration

```swift
let NSStoreUUIDKey: String
```

<a id="Discussion"></a>

## Discussion

The store UUID is useful to identify stores through URI representations, but it is *not* guaranteed to be unique. The UUID generated for new stores is unique—users can freely copy files and thus the UUID stored inside—so if you track or reference stores explicitly you need to be aware of duplicate UUIDs and potentially override the UUID when a new store is added to the list of known stores in your application.

## See Also

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](nspersistentstorecoordinator/setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](nsstoretypekey.md): A key that identifies the store type.

# NSStoreUUIDKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that provides the store’s UUID.

## Declaration

```objectivec
extern NSString * const NSStoreUUIDKey;
```

<a id="Discussion"></a>

## Discussion

The store UUID is useful to identify stores through URI representations, but it is *not* guaranteed to be unique. The UUID generated for new stores is unique—users can freely copy files and thus the UUID stored inside—so if you track or reference stores explicitly you need to be aware of duplicate UUIDs and potentially override the UUID when a new store is added to the list of known stores in your application.

## See Also

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStoreOfType:URL:options:error:](nspersistentstorecoordinator/metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](nspersistentstorecoordinator/metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata:forPersistentStore:](nspersistentstorecoordinator/setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](nsstoretypekey.md): A key that identifies the store type.
