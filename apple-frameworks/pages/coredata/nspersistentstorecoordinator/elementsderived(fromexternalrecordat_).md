> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/elementsderived(fromexternalrecordat:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/elementsderived(fromexternalrecordat:))

# elementsDerived(fromExternalRecordAt:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```swift
class func elementsDerived(fromExternalRecordAt fileURL: URL) -> [AnyHashable : Any]
```

## Parameters

- `fileURL`: A file URL specifying the location of a Spotlight external record file.

<a id="return-value"></a>

## Return Value

A dictionary containing the parsed elements derived from the Spotlight support file specified by `fileURL`.

<a id="Discussion"></a>

## Discussion

Dictionary keys and the corresponding values are described in [Spotlight record keys](../spotlight-record-keys.md).

## See Also

### Deprecated type methods

- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStore(at:options:)](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

# elementsDerivedFromExternalRecordURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** macOS 10.6+ (deprecated in 10.13)

Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.

> Spotlight integration is deprecated. Use CoreSpotlight integration instead.

## Declaration

```objectivec
+ (NSDictionary *) elementsDerivedFromExternalRecordURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: A file URL specifying the location of a Spotlight external record file.

<a id="return-value"></a>

## Return Value

A dictionary containing the parsed elements derived from the Spotlight support file specified by `fileURL`.

<a id="Discussion"></a>

## Discussion

Dictionary keys and the corresponding values are described in [Spotlight record keys](../spotlight-record-keys.md).

## See Also

### Deprecated type methods

- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStoreAtURL:options:error:](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
